'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Instagram, MapPin, Menu, X } from 'lucide-react';
import MenuItemCard from './components/MenuItemCard';
import BrewingMethodCard from './components/BrewingMethodCard';
import { useSmoothScroll } from './hooks/useSmoothScroll';

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

  useSmoothScroll();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-sm p-1">
              <img src="/logo.png" alt="Degah Coffee Logo" className="h-6 w-6 object-contain" />
            </div>
            <span className="text-xl font-bold font-serif">DEGAH.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#story" className="hover:text-[#8B4513] transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-[#8B4513] transition-colors">Menu</a>
            <a href="#experience" className="hover:text-[#8B4513] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#8B4513] transition-colors">Contact</a>
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
              <a href="#story" className="hover:text-[#8B4513] transition-colors">Our Story</a>
              <a href="#menu" className="hover:text-[#8B4513] transition-colors">Menu</a>
              <a href="#experience" className="hover:text-[#8B4513] transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#8B4513] transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/bg.webp" 
            alt="Degah Coffee Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-[#8B4513] opacity-20 blur-3xl z-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gray-800 opacity-30 blur-3xl z-0"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-black opacity-40 blur-2xl z-0"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-md p-3">
              <img src="/logo.png" alt="Degah Coffee Logo" className="h-24 w-24 object-contain" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DEGAH COFFEE
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A cozy space for coffee lovers. Handcrafted beverages and comfortable vibes.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <motion.div 
                className="bg-gray-800 w-full h-64 md:h-96 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gray-500">Coffee Shop Interior Image</span>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.h2 
                className="text-4xl md:text-5xl font-serif mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </motion.p>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Drinks Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Signature Drinks
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuItemCard 
              name="Coffee Latte"
              description="Smooth espresso with steamed milk and microfoam"
              price="$"
              index={0}
            />
            <MenuItemCard 
              name="Salted Caramel"
              description="Sweet caramel syrup with sea salt and espresso"
              price="$"
              index={1}
            />
            <MenuItemCard 
              name="Butter Scotch"
              description="Rich butter scotch sauce blended with coffee"
              price="$"
              index={2}
            />
            <MenuItemCard 
              name="Palm Sugar Coffee"
              description="Traditional palm sugar combined with rich espresso"
              price="$"
              index={3}
            />
            <MenuItemCard 
              name="Salted Palm Sugar"
              description="Palm sugar with sea salt and espresso blend"
              price="$"
              index={4}
            />
            <MenuItemCard 
              name="Cold Brew"
              description="Smooth cold brew with milk and vanilla"
              price="$"
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Experience
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BrewingMethodCard 
              title="Cozy Atmosphere" 
              description="Comfortable seating and warm lighting for relaxation" 
              index={0} 
            />
            <BrewingMethodCard 
              title="Free WiFi" 
              description="Stay connected with our high-speed internet" 
              index={1} 
            />
            <BrewingMethodCard 
              title="Artisanal Pastries" 
              description="Freshly baked goods to pair with your drink" 
              index={2} 
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Follow Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-between items-center max-w-2xl mx-auto"
          >
            <a href="#" className="flex flex-col items-center group w-1/3 min-w-[100px]">
              <div className="bg-white rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                <Instagram className="h-6 w-6 text-black" />
              </div>
              <span className="text-gray-400 text-center">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center group w-1/3 min-w-[100px]">
              <div className="bg-white rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                <Coffee className="h-6 w-6 text-black" />
              </div>
              <span className="text-gray-400 text-center">Facebook</span>
            </a>
            <a href="#" className="flex flex-col items-center group w-1/3 min-w-[100px]">
              <div className="bg-white rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-black" />
              </div>
              <span className="text-gray-400 text-center">Location</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-serif mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Visit Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-black rounded-lg p-6 border border-gray-800"
              >
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#8B4513]" />
                  <p className="text-xl">Sosromenduran, Kota Yogyakarta, Daerah Istimewa Yogyakarta</p>
                </div>
                <p className="text-gray-400 mb-2">Depan Gereja Hagios Family</p>
                <p className="text-gray-400 mb-2">Open Saturday: 10:00 AM - 13:00 PM</p>
                <p className="text-gray-400">Phone: (123) 456-7890</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg overflow-hidden border border-gray-800"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.18234567890!2d110.36241661484378!3d-7.791611194426307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDcnMjkuOCJTIDExMMKwMjEnNDQuNyJF!5e0!3m2!1sen!2sid!4v1617848912345" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Degah Coffee Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="bg-white rounded-sm p-1">
                  <img src="/logo.png" alt="Degah Coffee Logo" className="h-6 w-6 object-contain" />
                </div>
                <span className="text-xl font-bold font-serif">DEGAH.</span>
              </div>
              <p className="mt-2 text-gray-500 text-sm">Quietly Bold, Darkly Roasted.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Instagram className="h-5 w-5" />
                <span>@degah.coffee</span>
              </div>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Degah Coffee. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DegahCoffeePage;