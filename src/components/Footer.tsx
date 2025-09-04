import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">BW</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Biblical Wisdom
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Unlocking Biblical secrets and divine truths through books, blogs, podcasts, and inspiring content. 
              Join our community of seekers on a journey to spiritual enlightenment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gradient-primary text-white hover:shadow-lg transition-shadow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Blog', 'Podcast', 'Books', 'Merch'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/connect"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Speaking Engagements</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Media Interviews</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Biblical Wisdom. All rights reserved. Unlocking divine truth for spiritual liberation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
