import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Mic, ShoppingBag, MessageCircle } from 'lucide-react';
import AnimatedHeadline from '../components/AnimatedHeadline';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Divine Wisdom Blog',
      description: 'Explore deep Biblical insights and theological revelations',
      link: '/blog',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mic,
      title: 'Truth Seekers Podcast',
      description: 'Listen to enlightening discussions on spiritual matters',
      link: '/podcast',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: BookOpen,
      title: 'Published Books',
      description: 'Discover life-changing books available on Amazon',
      link: '/books',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: ShoppingBag,
      title: 'Inspired Merchandise',
      description: 'Wear your faith with meaningful designs',
      link: '/merch',
      color: 'from-yellow-500 to-red-500'
    }
  ];

  const merchItems = [
    {
      id: 1,
      name: '"Unlocking Truth" T-Shirt',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/330040/c900ff?text=Unlocking+Truth',
      link: '/merch',
    },
    {
      id: 2,
      name: '"Wisdom Seeker" Hoodie',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/c900ff/330040?text=Wisdom+Seeker',
      link: '/merch',
    },
    {
      id: 3,
      name: '"Divine Secrets" Mug',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/ffffff/330040?text=Divine+Secrets',
      link: '/merch',
    },
    {
      id: 4,
      name: '"Liberate the Masses" Cap',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/330040/ffffff?text=Liberate',
      link: '/merch',
    },
    {
      id: 5,
      name: '"Prophetic Timeline" Tee',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/c900ff/ffffff?text=Prophecy',
      link: '/merch',
    },
    {
      id: 6,
      name: '"Genesis Protocol" Journal',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/330040/c900ff?text=Genesis',
      link: '/merch',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <AnimatedHeadline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Discover hidden truths and divine wisdom through books, blogs, podcasts, and inspiring content
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/blog"
              className="group bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Blog</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/books"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Books</span>
              <BookOpen size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Divine Content
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in Biblical wisdom through multiple mediums designed to enlighten and inspire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={feature.link} className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Scroller Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Merchandise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Wear your faith and share the message.
            </p>
        </div>
        <div
            className="group w-full overflow-hidden whitespace-nowrap"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
        >
            <div className="inline-block animate-scroll-x group-hover:[animation-play-state:paused]">
                {[...merchItems, ...merchItems].map((item, index) => (
                    <Link to={item.link} key={index} className="inline-block mx-4 w-64">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white truncate">{item.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Journey to Spiritual Enlightenment
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Connect with a community of truth seekers and discover the hidden wisdom within sacred texts
            </p>
            <Link
              to="/connect"
              className="inline-flex items-center space-x-2 bg-white text-primary-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Get Connected</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
