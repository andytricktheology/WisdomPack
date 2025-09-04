import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Podcast from './pages/Podcast';
import Books from './pages/Books';
import Merch from './pages/Merch';
import About from './pages/About';
import Connect from './pages/Connect';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlog from './pages/admin/AdminBlog';
import AdminPodcast from './pages/admin/AdminPodcast';
import AdminBooks from './pages/admin/AdminBooks';
import AdminMerch from './pages/admin/AdminMerch';
import AdminComments from './pages/admin/AdminComments';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
            <Route path="/podcast" element={<Layout><Podcast /></Layout>} />
            <Route path="/books" element={<Layout><Books /></Layout>} />
            <Route path="/merch" element={<Layout><Merch /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/connect" element={<Layout><Connect /></Layout>} />
            
            {/* Admin Routes */}
            <Route path="/trickie/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <AdminBlog />
              </ProtectedRoute>
            } />
            <Route path="/admin/podcast" element={
              <ProtectedRoute>
                <AdminPodcast />
              </ProtectedRoute>
            } />
            <Route path="/admin/books" element={
              <ProtectedRoute>
                <AdminBooks />
              </ProtectedRoute>
            } />
            <Route path="/admin/merch" element={
              <ProtectedRoute>
                <AdminMerch />
              </ProtectedRoute>
            } />
            <Route path="/admin/comments" element={
              <ProtectedRoute>
                <AdminComments />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
