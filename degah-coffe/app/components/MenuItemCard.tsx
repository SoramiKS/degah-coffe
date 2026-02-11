'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

interface MenuItemCardProps {
  name: string;
  description: string;
  price?: string;
  index?: number;
}

const MenuItemCard = ({ name, description, price, index = 0 }: MenuItemCardProps) => {
  return (
    <motion.div
      className="bg-black border-b-2 border-transparent hover:border-[#8B4513] transition-all duration-300 p-6 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="bg-white rounded-sm p-0.5 mr-2">
            <Coffee className="h-3 w-3 text-black" />
          </div>
          <h3 className="text-xl font-serif group-hover:text-[#8B4513] transition-colors">{name}</h3>
        </div>
        <span className="text-[#8B4513] font-medium">$</span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

export default MenuItemCard;