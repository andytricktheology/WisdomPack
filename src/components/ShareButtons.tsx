import React from 'react';
import { motion } from 'framer-motion';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, description, image }) => {
  const shareButtons = [
    {
      Component: FacebookShareButton,
      Icon: FacebookIcon,
      props: { url, quote: title }
    },
    {
      Component: TwitterShareButton,
      Icon: TwitterIcon,
      props: { url, title }
    },
    {
      Component: LinkedinShareButton,
      Icon: LinkedinIcon,
      props: { url, title, summary: description }
    },
    {
      Component: PinterestShareButton,
      Icon: PinterestIcon,
      props: { url, media: image || '', description: title }
    }
  ];

  return (
    <div className="flex space-x-2">
      {shareButtons.map(({ Component, Icon, props }, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Component {...props}>
            <Icon size={32} round />
          </Component>
        </motion.div>
      ))}
    </div>
  );
};

export default ShareButtons;
