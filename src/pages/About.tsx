import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Feather } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About the Author
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A dedicated seeker of truth, committed to unveiling the hidden wisdom of the scriptures for spiritual liberation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full transform -rotate-6"></div>
              <img
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/ffffff/330040?text=Author"
                alt="Author Portrait"
                className="relative w-full rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              A Journey of Revelation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              For over two decades, I have been on an unwavering quest to understand the deeper mysteries of the Bible. My journey began not in a seminary, but in personal study, driven by a divine calling to look beyond surface-level interpretations and expose the theological tricks that have kept many in spiritual bondage.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Through prayer, research, and a commitment to the unadulterated Word, I've dedicated my life to sharing these profound truths through writing, speaking, and digital media.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <BookOpen className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Unlocking Secrets</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To delve into scripture and reveal the hidden wisdom and prophetic truths intended for our generation.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <Feather className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Liberating Minds</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To challenge conventional theology and free people from religious dogma that hinders true spiritual growth.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <Mic className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inspiring Seekers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To empower individuals to seek a personal and profound relationship with the Divine through accessible content.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
