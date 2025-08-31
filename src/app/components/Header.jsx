"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, MapPin, Clock, Star } from 'lucide-react';

const RestaurantHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
   
      { name: 'About', href: '/about' },
    
    { name: "Locations", href: "/locations" }, 
  { name: "Catering", href: "/catering" }, 
  { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b-4 border-yellow-400' 
        : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-xl'
    }`}>
      {/* Top promotional bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2 px-4 text-center text-sm font-bold tracking-wide">
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <Star className="w-4 h-4 fill-white" />
          <span>FREE DELIVERY ON ORDERS OVER $30 • USE CODE: DELICIOUS30</span>
          <Star className="w-4 h-4 fill-white" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                isScrolled 
                  ? 'from-yellow-400 to-yellow-600' 
                  : 'from-white to-yellow-100'
              } flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <div className={`text-3xl font-black ${
                  isScrolled ? 'text-white' : 'text-yellow-600'
                } drop-shadow-lg`}>
                  🍽️
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <span className="text-xs font-bold text-white">+</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <h1 className={`text-3xl font-black tracking-tight ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } drop-shadow-lg transform transition-all duration-300`}>
                GOLDEN<span className={isScrolled ? 'text-yellow-600' : 'text-yellow-200'}>BITE</span>
              </h1>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center space-x-1">
                  <MapPin className={`w-3 h-3 ${isScrolled ? 'text-gray-600' : 'text-yellow-200'}`} />
                  <span className={`text-xs font-semibold ${isScrolled ? 'text-gray-600' : 'text-yellow-200'}`}>
                    Downtown • Uptown
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className={`w-3 h-3 ${isScrolled ? 'text-gray-600' : 'text-yellow-200'}`} />
                  <span className={`text-xs font-semibold ${isScrolled ? 'text-gray-600' : 'text-yellow-200'}`}>
                    Open 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-bold text-lg tracking-wide transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-yellow-600' 
                    : 'text-white hover:text-yellow-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <div className={`absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r ${
                  isScrolled 
                    ? 'from-yellow-400 to-yellow-600' 
                    : 'from-white to-yellow-200'
                } transition-all duration-300 group-hover:w-full rounded-full`}></div>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isScrolled 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-white/20 text-white hover:bg-white/30'
            } backdrop-blur-sm shadow-lg`}>
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isScrolled 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-white/20 text-white hover:bg-white/30'
            } backdrop-blur-sm shadow-lg group`}>
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                  <span className="text-xs font-bold text-white">{cartCount}</span>
                </div>
              )}
            </button>

            {/* User Profile */}
            <button className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isScrolled 
                ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                : 'bg-white/20 text-white hover:bg-white/30'
            } backdrop-blur-sm shadow-lg`}>
              <User className="w-5 h-5" />
            </button>

            {/* Order Now Button */}
            <button className={`hidden md:flex items-center space-x-2 px-8 py-4 rounded-full font-black text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl ${
              isScrolled 
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700' 
                : 'bg-white text-yellow-600 hover:bg-yellow-50'
            }`}>
              <span>ORDER NOW</span>
              <div className="w-2 h-2 bg-current rounded-full animate-ping"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              } backdrop-blur-sm shadow-lg`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} style={{ top: isScrolled ? '140px' : '160px' }}>
        <div className={`bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 h-full transition-all duration-500 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-4 mb-8 pb-6 border-b-2 border-white/30">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl">
                <span className="text-2xl">🍽️</span>
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">GOLDENBITE</h2>
                <p className="text-yellow-200 text-sm font-semibold">Delicious Moments</p>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-4 px-6 text-2xl font-bold text-white hover:text-yellow-200 hover:bg-white/10 rounded-2xl transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-8 space-y-4">
              <button className="w-full bg-white text-yellow-600 py-4 rounded-2xl font-black text-xl tracking-wide shadow-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
                ORDER NOW
              </button>
              <button className="w-full bg-white/20 text-white py-4 rounded-2xl font-bold text-lg backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
                View Cart ({cartCount})
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t-2 border-white/30">
              <div className="flex items-center space-x-3 text-white mb-3">
                <MapPin className="w-5 h-5 text-yellow-200" />
                <span className="font-semibold">123 Food Street, Downtown</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Clock className="w-5 h-5 text-yellow-200" />
                <span className="font-semibold">Open 24/7 • Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual flair */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-6 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
    </header>
  );
};

export default RestaurantHeader;