'use client';

import { motion } from 'framer-motion';

interface BrewingMethodCardProps {
  title: string;
  description: string;
  index?: number;
}

const BrewingMethodCard = ({ title, description, index = 0 }: BrewingMethodCardProps) => {
  return (
    <motion.div
      className="p-6 border border-gray-800 hover:border-[#8B4513] transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-2xl font-serif mb-3 text-[#8B4513]">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default BrewingMethodCard;