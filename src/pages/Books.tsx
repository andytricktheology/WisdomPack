import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShoppingCart } from 'lucide-react';

const Books: React.FC = () => {
  const books = [
    {
      id: 1,
      title: 'The Enoch Cipher',
      description: 'Unlocking the secrets of the Book of Enoch and its impact on biblical prophecy.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x600/330040/c900ff?text=The+Enoch+Cipher',
      amazonLink: '#',
    },
    {
      id: 2,
      title: 'Parables of Power',
      description: 'A deep dive into the hidden meanings of Christ\'s parables and their application for modern life.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x600/c900ff/330040?text=Parables+of+Power',
      amazonLink: '#',
    },
    {
      id: 3,
      title: 'The Genesis Protocol',
      description: 'Exploring the pre-Adamic world, the fall of angels, and the origins of humanity.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x600/330040/ffffff?text=The+Genesis+Protocol',
      amazonLink: '#',
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Published Books
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover life-changing books that unlock biblical secrets and divine truths.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <div className="relative mb-6">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-auto object-cover rounded-lg shadow-md mx-auto max-w-[250px] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {book.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 h-16">
                  {book.description}
                </p>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  <span>Buy on Amazon</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
