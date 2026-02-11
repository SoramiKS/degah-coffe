'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Instagram, MapPin, Menu, X } from 'lucide-react';
import MenuItemCard from './components/MenuItemCard';
import BrewingMethodCard from './components/BrewingMethodCard';

const DegahCoffeePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample menu items
  const menuItems = [
    {
      id: 1,
      name: 'Ethiopian Single Origin',
      description: 'Bright and floral notes with citrus undertones',
      price: '$18.00',
    },
    {
      id: 2,
      name: 'Colombian Medium Roast',
      description: 'Balanced flavor with chocolate and nutty notes',
      price: '$16.50',
    },
    {
      id: 3,
      name: 'Sumatra Dark Roast',
      description: 'Bold and earthy with hints of spice',
      price: '$17.00',
    },
    {
      id: 4,
      name: 'Guatemalan Highland',
      description: 'Rich and complex with caramel sweetness',
      price: '$19.00',
    },
    {
      id: 5,
      name: 'Brazilian Cerrado',
      description: 'Smooth and nutty with low acidity',
      price: '$15.50',
    },
    {
      id: 6,
      name: 'Jamaican Blue Mountain',
      description: 'Exceptionally mild and well-balanced',
      price: '$25.00',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-[#8B4513]" />
            <span className="text-xl font-bold font-serif">DEGAH.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-[#8B4513] transition-colors">The Roast</Link>
            <Link href="#" className="hover:text-[#8B4513] transition-colors">Our Space</Link>
            <Link href="#" className="hover:text-[#8B4513] transition-colors">Order Now</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black py-4 px-4 absolute top-full left-0 right-0 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="hover:text-[#8B4513] transition-colors">The Roast</Link>
              <Link href="#" className="hover:text-[#8B4513] transition-colors">Our Space</Link>
              <Link href="#" className="hover:text-[#8B4513] transition-colors">Order Now</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black pt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DEGAH.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quietly Bold, Darkly Roasted.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="border border-[#8B4513] text-[#8B4513] px-8 py-3 hover:bg-[#8B4513] hover:text-white transition-colors duration-300">
              Explore Our Beans
            </button>
          </motion.div>
        </div>
      </section>

      {/* Curated Beans Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Curated Beans
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <MenuItemCard 
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Method Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Brewing Methods
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BrewingMethodCard 
              title="Pour Over" 
              description="Clean and bright extraction highlighting bean characteristics" 
              index={0} 
            />
            <BrewingMethodCard 
              title="French Press" 
              description="Full-bodied and rich with robust flavors" 
              index={1} 
            />
            <BrewingMethodCard 
              title="Espresso" 
              description="Intense and concentrated with crema finish" 
              index={2} 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-[#8B4513]" />
                <span className="text-xl font-bold font-serif">DEGAH.</span>
              </div>
              <p className="mt-2 text-gray-500 text-sm">Quietly Bold, Darkly Roasted.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Instagram className="h-5 w-5" />
                <span>@degah.coffee</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Roastery Lane, Coffee District</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Degah Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DegahCoffeePage;