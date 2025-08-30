"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ShoppingCart, User, MapPin, Clock, Star, ChefHat, Award, Heart, ArrowRight, Play } from 'lucide-react';
import * as THREE from 'three';

// Three.js Background Component
const ThreeJSBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create food particles
    const geometries = [
      new THREE.SphereGeometry(0.08, 8, 8), // Berries/Round foods
      new THREE.CylinderGeometry(0.04, 0.08, 0.12, 6), // Carrots/Vegetables
      new THREE.BoxGeometry(0.06, 0.06, 0.06), // Croutons/Cubes
      new THREE.TorusGeometry(0.06, 0.02, 6, 8), // Onion rings
      new THREE.ConeGeometry(0.05, 0.12, 6), // Cone shapes
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xFFD700 }), // Gold/Yellow
      new THREE.MeshBasicMaterial({ color: 0xFFA500 }), // Orange
      new THREE.MeshBasicMaterial({ color: 0xFFFF00 }), // Bright Yellow
      new THREE.MeshBasicMaterial({ color: 0xF0E68C }), // Khaki
      new THREE.MeshBasicMaterial({ color: 0xFFE55C }), // Light Yellow
      new THREE.MeshBasicMaterial({ color: 0xFFC107 }), // Amber
    ];

    const particles = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const particle = new THREE.Mesh(geometry, material);
      
      particle.position.x = (Math.random() - 0.5) * 25;
      particle.position.y = (Math.random() - 0.5) * 25;
      particle.position.z = (Math.random() - 0.5) * 12;
      
      particle.rotation.x = Math.random() * Math.PI;
      particle.rotation.y = Math.random() * Math.PI;
      
      particle.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.003,
          y: (Math.random() - 0.5) * 0.003,
          z: (Math.random() - 0.5) * 0.003,
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015,
        }
      };
      
      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      particles.forEach(particle => {
        // Update position
        particle.position.x += particle.userData.velocity.x;
        particle.position.y += particle.userData.velocity.y;
        particle.position.z += particle.userData.velocity.z;
        
        // Update rotation
        particle.rotation.x += particle.userData.rotationSpeed.x;
        particle.rotation.y += particle.userData.rotationSpeed.y;
        particle.rotation.z += particle.userData.rotationSpeed.z;
        
        // Boundary checking - wrap around
        if (particle.position.x > 12) particle.position.x = -12;
        if (particle.position.x < -12) particle.position.x = 12;
        if (particle.position.y > 12) particle.position.y = -12;
        if (particle.position.y < -12) particle.position.y = 12;
      });

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
};

// Header Component
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header>
      
     
    </header>
  );
};

// Video Hero Section Component
const VideoHeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop&crop=center&q=80"
          loop
          muted
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-cooking-in-a-professional-kitchen-7613-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
       
        
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          ELEVATE YOUR
          <span className="block text-yellow-500">DINING EXPERIENCE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          Where culinary artistry meets exceptional service in an atmosphere of modern elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
            <span>Reserve Your Table</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="group flex items-center space-x-2 bg-transparent text-white px-10 py-4 rounded-xl font-bold text-lg border-2 border-white hover:border-yellow-500 hover:text-yellow-500 transform hover:scale-105 transition-all duration-300"
          >
            <Play className="w-6 h-6" />
            <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Homepage Component
const RestaurantHomePage = () => {
  const [activeFood, setActiveFood] = useState('signature');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredDishes = [
    { 
      type: 'signature', 
      name: 'Golden Delight', 
      price: '$28', 
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&crop=center&q=80',
      description: 'Our signature creation with golden sauce'
    },
    { 
      type: 'special', 
      name: 'Chef\'s Choice', 
      price: '$32', 
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&crop=center&q=80',
      description: 'Daily special crafted with care'
    },
    { 
      type: 'premium', 
      name: 'Royal Feast', 
      price: '$38', 
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&crop=center&q=80',
      description: 'Premium dining experience'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '4.9', label: 'Customer Rating', icon: Star },
    { number: '2hrs', label: 'Average Service', icon: Clock },
    { number: '100+', label: 'Special Dishes', icon: ChefHat }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ThreeJSBackground />
      <RestaurantHeader />
      
      {/* Hero Section with Video */}
      <section id="home">
        <VideoHeroSection />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-yellow-500 text-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="text-center group transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-black/20 shadow-2xl hover:bg-black/20 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                    <div className="text-3xl font-black mb-2">{stat.number}</div>
                    <div className="font-bold text-sm">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold text-sm">
                <Award className="w-4 h-4" />
                <span>Our Story</span>
              </div>
              
              <h2 className="text-5xl font-black">
                CRAFTING MEMORIES
                <span className="block text-yellow-500">SINCE 2008</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded with a vision to create extraordinary culinary experiences, Golden Taste has become 
                a destination for food enthusiasts who appreciate the art of fine dining. Our commitment to 
                quality ingredients and innovative techniques ensures every meal is a celebration.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-900 rounded-xl border border-yellow-500/30">
                  <div className="text-3xl font-black text-yellow-500 mb-2">500+</div>
                  <div className="text-gray-300 font-semibold">Happy Customers Daily</div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl border border-yellow-500/30">
                  <div className="text-3xl font-black text-yellow-500 mb-2">25</div>
                  <div className="text-gray-300 font-semibold">Master Chefs</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=700&fit=crop&crop=center&q=80"
                alt="Restaurant interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-yellow-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl border-4 border-black">
                <div className="text-center">
                  <div className="text-2xl font-black">15+</div>
                  <div className="text-xs font-bold">YEARS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="menu" className="py-20 bg-gray-900 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold text-sm mb-6">
              <ChefHat className="w-4 h-4" />
              <span>Chef's Signature</span>
            </div>
            <h2 className="text-5xl font-black leading-tight mb-4">
              SIGNATURE
              <span className="block text-yellow-500">CREATIONS</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Each dish represents our dedication to culinary excellence and innovation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div 
                key={dish.name}
                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/30 shadow-2xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-lg font-bold text-sm">
                    Featured
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                    <p className="text-yellow-300 text-sm mb-3">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yellow-500">{dish.price}</span>
                      <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              VISUAL <span className="text-yellow-500">EXPERIENCE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A glimpse into our culinary artistry and dining atmosphere
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop&crop=center&q=80',
              'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center&q=80'
            ].map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-yellow-500/30 hover:border-yellow-500"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-yellow-500 text-black relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent animate-pulse" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-6xl font-black leading-tight">
              READY FOR AN
              <span className="block">UNFORGETTABLE MEAL?</span>
            </h2>
            
            <p className="text-xl font-semibold max-w-2xl mx-auto">
              Join thousands of satisfied guests who have experienced our exceptional cuisine and service. 
              Your perfect dining experience awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-black text-yellow-500 px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-black/50 transform hover:scale-105 transition-all duration-300 border-4 border-black">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-8 h-8" />
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-black border-4 border-yellow-500 flex items-center justify-center font-bold text-yellow-500 text-lg">
                    4.9
                  </div>
                  <div className="w-12 h-12 rounded-full bg-black border-4 border-yellow-500 flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">5,000+ Happy Guests</div>
                  <div className="text-black/70 text-sm">This month alone!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900 rounded-3xl p-12 shadow-2xl border border-yellow-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
              
              <h2 className="text-4xl font-black mb-4">
                STAY UPDATED WITH <span className="text-yellow-500">GOLDEN TASTE</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get exclusive updates on new dishes, special events, and member-only offers
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-yellow-500 focus:border-yellow-400 outline-none text-lg font-semibold bg-gray-800 text-white focus:bg-gray-700 transition-all duration-300"
                />
                <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Subscribe
                </button>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                Join <span className="font-bold text-yellow-500">12,000+</span> food lovers already subscribed
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default RestaurantHomePage;