import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock blog posts - In real app, this would come from your backend/Supabase
  const blogPosts = [
    {
      id: 1,
      title: "The Hidden Meanings in Biblical Parables",
      excerpt: "Discover the deeper symbolism and spiritual truths concealed within Christ's teachings through parables.",
      content: "Full blog post content here...",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
      author: "Biblical Wisdom Author",
      date: "2025-01-15",
      category: "Theology",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Unsealing the Book of Revelation",
      excerpt: "A comprehensive guide to understanding the prophetic visions and their relevance to modern times.",
      content: "Full blog post content here...",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=400&fit=crop",
      author: "Biblical Wisdom Author",
      date: "2025-01-12",
      category: "Prophecy",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "The Power of Sacred Names",
      excerpt: "Exploring the significance and spiritual authority contained within divine names in scripture.",
      content: "Full blog post content here...",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      author: "Biblical Wisdom Author",
      date: "2025-01-10",
      category: "Spirituality",
      readTime: "6 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Divine Wisdom Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore profound Biblical insights, theological revelations, and spiritual wisdom
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <ShareButtons
                    url={`${window.location.origin}/blog/${post.id}`}
                    title={post.title}
                    description={post.excerpt}
                    image={post.image}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
