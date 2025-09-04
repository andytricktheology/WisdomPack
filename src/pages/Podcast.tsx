import React from 'react';
import { motion } from 'framer-motion';
import { Mic, PlayCircle, Share2 } from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const Podcast: React.FC = () => {
  const episodes = [
    {
      id: 1,
      title: 'Episode 15: The Prophetic Timeline',
      description: 'An in-depth analysis of end-time prophecies and their sequence. We explore Daniel, Revelation, and more.',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      platform: 'YouTube',
      date: '2025-01-20',
      duration: '45 min'
    },
    {
      id: 2,
      title: 'Episode 14: The Spiritual Battle Within',
      description: 'Understanding the constant struggle between flesh and spirit, and how to walk in victory.',
      embedUrl: 'https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC',
      platform: 'Spotify',
      date: '2025-01-13',
      duration: '38 min'
    },
    {
      id: 3,
      title: 'Episode 13: Wisdom from Proverbs',
      description: 'Practical life lessons and divine wisdom from the book of Proverbs for daily living.',
      embedUrl: 'https://redcircle.com/embedded-player/f0e3e3e3-a4b4-4b4b-8b4b-f0e3e3e3a4b4',
      platform: 'RedCircle',
      date: '2025-01-06',
      duration: '32 min'
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
            Truth Seekers Podcast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Listen to enlightening discussions on spiritual matters, biblical truths, and theological secrets.
          </p>
        </motion.div>

        <div className="space-y-12">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="lg:col-span-1">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={episode.embedUrl.includes('spotify') ? episode.embedUrl : `${episode.embedUrl}?rel=0`}
                    width="100%"
                    height={episode.embedUrl.includes('spotify') ? "152" : "100%"}
                    frameBorder="0"
                    allowFullScreen={!episode.embedUrl.includes('spotify')}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{episode.date} • {episode.duration}</span>
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">{episode.platform}</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {episode.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {episode.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
                    <PlayCircle size={20} />
                    <span>Listen Now</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share:</span>
                    <ShareButtons
                      url={window.location.href}
                      title={episode.title}
                      description={episode.description}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
