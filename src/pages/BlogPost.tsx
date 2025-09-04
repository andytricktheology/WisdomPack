import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const BlogPost: React.FC = () => {
  const { id } = useParams();

  // Mock blog post data - In real app, fetch from backend/Supabase
  const post = {
    id: 1,
    title: "The Hidden Meanings in Biblical Parables",
    excerpt: "Discover the deeper symbolism and spiritual truths concealed within Christ's teachings through parables.",
    content: `
      <p>Throughout the New Testament, Jesus used parables as a primary method of teaching profound spiritual truths. These simple stories, drawn from everyday life, contain layers of meaning that continue to reveal themselves to those who seek understanding.</p>
      
      <h3>The Purpose of Parables</h3>
      <p>Jesus himself explained that parables serve a dual purpose: to reveal truth to those with open hearts and to conceal it from those who are not ready to receive it. This divine wisdom ensures that spiritual truths are protected while remaining accessible to genuine seekers.</p>
      
      <h3>Symbolic Language</h3>
      <p>Each element in a parable carries symbolic weight. The seeds in the Parable of the Sower represent different types of hearts and their receptivity to divine truth. The field represents the world, the various soils represent different spiritual conditions of humanity.</p>
      
      <h3>Modern Applications</h3>
      <p>These ancient stories remain remarkably relevant today. The Parable of the Talents speaks to our responsibility to develop our God-given abilities and use them for the advancement of His kingdom. The Good Samaritan challenges our understanding of who our neighbor truly is.</p>
      
      <h3>Deeper Mysteries</h3>
      <p>Some parables contain prophetic elements that point to end-time events and the establishment of God's kingdom on earth. The Parable of the Ten Virgins speaks to spiritual preparedness, while the Wheat and Tares reveals the coexistence of good and evil until the final judgment.</p>
      
      <p>As we study these profound teachings, we must approach them with humility and prayer, asking the Holy Spirit to illuminate their deeper meanings for our lives today.</p>
    `,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop",
    author: "Biblical Wisdom Author",
    date: "2025-01-15",
    category: "Theology",
    readTime: "8 min read"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-4">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mb-8">
            <ShareButtons
              url={window.location.href}
              title={post.title}
              description={post.excerpt}
              image={post.image}
            />
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div 
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Social Share Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Share this article
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Help spread divine wisdom to others
              </p>
            </div>
            <ShareButtons
              url={window.location.href}
              title={post.title}
              description={post.excerpt}
              image={post.image}
            />
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mock related articles */}
            {[
              {
                title: "Unsealing the Book of Revelation",
                excerpt: "A comprehensive guide to understanding prophetic visions",
                image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop"
              },
              {
                title: "The Power of Sacred Names", 
                excerpt: "Exploring the significance of divine names in scripture",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
              }
            ].map((article, index) => (
              <Link
                key={index}
                to={`/blog/${index + 2}`}
                className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BlogPost;
