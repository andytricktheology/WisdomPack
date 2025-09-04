import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loginAttempts: number;
  isLocked: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = 'theconquerorisa4313@gmail.com';
const ADMIN_PASSWORD = 'BiblicalSecrets2025!'; // You can change this
const MAX_ATTEMPTS = 3;
const LOCK_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const ATTEMPT_RESET_TIME = 12 * 60 * 60 * 1000; // 12 hours

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authToken = Cookies.get('auth_token');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }

    // Check login attempts and lock status
    const attempts = localStorage.getItem('login_attempts');
    const lastAttemptTime = localStorage.getItem('last_attempt_time');
    const lockTime = localStorage.getItem('lock_time');

    if (lockTime) {
      const lockTimestamp = parseInt(lockTime);
      if (Date.now() - lockTimestamp < LOCK_DURATION) {
        setIsLocked(true);
      } else {
        localStorage.removeItem('lock_time');
        localStorage.removeItem('login_attempts');
        localStorage.removeItem('last_attempt_time');
      }
    }

    if (attempts && lastAttemptTime) {
      const lastAttempt = parseInt(lastAttemptTime);
      if (Date.now() - lastAttempt > ATTEMPT_RESET_TIME) {
        localStorage.removeItem('login_attempts');
        localStorage.removeItem('last_attempt_time');
        setLoginAttempts(0);
      } else {
        setLoginAttempts(parseInt(attempts));
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (isLocked) {
      return false;
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      Cookies.set('auth_token', 'authenticated', { expires: 1 }); // 1 day
      // Reset attempts on successful login
      localStorage.removeItem('login_attempts');
      localStorage.removeItem('last_attempt_time');
      setLoginAttempts(0);
      return true;
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      localStorage.setItem('login_attempts', newAttempts.toString());
      localStorage.setItem('last_attempt_time', Date.now().toString());

      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
        localStorage.setItem('lock_time', Date.now().toString());
      }

      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove('auth_token');
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      loginAttempts,
      isLocked
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
