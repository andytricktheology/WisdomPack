import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const Merch: React.FC = () => {
  const products = [
    {
      id: 1,
      name: '"Unlocking Truth" T-Shirt',
      price: '$29.99',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/330040/c900ff?text=Unlocking+Truth',
      link: '#',
    },
    {
      id: 2,
      name: '"Wisdom Seeker" Hoodie',
      price: '$49.99',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/c900ff/330040?text=Wisdom+Seeker',
      link: '#',
    },
    {
      id: 3,
      name: '"Divine Secrets" Mug',
      price: '$19.99',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/ffffff/330040?text=Divine+Secrets',
      link: '#',
    },
    {
      id: 4,
      name: '"Liberate the Masses" Cap',
      price: '$24.99',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/500x500/330040/ffffff?text=Liberate',
      link: '#',
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
            Inspired Merchandise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Wear your faith and share the message with our exclusive collection of apparel and accessories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-lg font-bold text-primary-500 mb-4">
                  {product.price}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <ShoppingBag size={20} />
                  <span>View on TeePublic</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;
