"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChefHat, Utensils, Users, Calendar, Sparkles, ArrowRight, Quote, MapPin, Phone, Mail, Menu, X, Star, Award, Clock, Heart, Instagram, Facebook, Twitter, Play, Pause } from 'lucide-react';

const RestaurantWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [reservationForm, setReservationForm] = useState({
    name: '', email: '', date: '', time: '', guests: '2'
  });
  
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  const heroWords = ['ARTISTRY', 'ELEGANCE', 'PASSION', 'PERFECTION'];

  // Enhanced particle system
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particlesRef.current = [];
    for (let i = 0; i < 60; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.8 + 0.2,
        hue: Math.random() * 60 + 30,
        pulseSpeed: Math.random() * 0.05 + 0.01
      });
    }

    const animateParticles = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity = 0.3 + Math.sin(time * particle.pulseSpeed) * 0.3;
        
        // Boundary bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x -= dx * force * 0.01;
          particle.y -= dy * force * 0.01;
        }
        
        // Draw particle with glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dist = Math.sqrt((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2);
          
          if (dist < 80) {
            ctx.strokeStyle = `hsla(45, 70%, 60%, ${0.1 * (1 - dist / 80)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animateParticles);
    };
    
    animateParticles(0);
  }, [mousePosition]);

  useEffect(() => {
    setIsVisible(true);
    initParticles();

    // Scroll handler for parallax effects
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Service carousel
    const serviceInterval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4500);

    // Hero text animation
    const wordInterval = setInterval(() => {
      setActiveWord(prev => (prev + 1) % heroWords.length);
    }, 3500);

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(serviceInterval);
      clearInterval(wordInterval);
      clearInterval(testimonialInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles]);

  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Molecular Gastronomy",
      description: "Scientific artistry meets culinary innovation in every sphere and foam.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Chef's Table Experience",
      description: "Intimate dining with live culinary theater and wine pairings.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Events",
      description: "Bespoke celebrations with personalized menus and ambiance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Tasting Menus",
      description: "Multi-course journeys showcasing seasonal ingredients.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const menuCategories = ['all', 'appetizers', 'mains', 'desserts', 'beverages'];

  const enhancedMenuItems = [
    {
      id: 1,
      category: "appetizers",
      name: "Caviar Spherification",
      price: "$28",
      description: "Olive oil pearls with micro herbs and edible flowers",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop&q=80",
      dietary: ["vegetarian", "gluten-free"],
      rating: 4.9
    },
    {
      id: 2,
      category: "appetizers",
      name: "Deconstructed Caprese",
      price: "$22",
      description: "Tomato glass, mozzarella foam, basil essence",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&q=80",
      dietary: ["vegetarian"],
      rating: 4.8
    },
    {
      id: 3,
      category: "mains",
      name: "Wagyu A5 Perfection",
      price: "$95",
      description: "Sous-vide wagyu with truffle jus and seasonal vegetables",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&q=80",
      dietary: [],
      rating: 5.0
    },
    {
      id: 4,
      category: "mains",
      name: "Ocean Symphony",
      price: "$65",
      description: "Multi-textural seafood composition with sea foam",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop&q=80",
      dietary: ["pescatarian"],
      rating: 4.9
    },
    {
      id: 5,
      category: "desserts",
      name: "Chocolate Cosmos",
      price: "$18",
      description: "Interactive dessert with liquid nitrogen and gold dust",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop&q=80",
      dietary: [],
      rating: 4.7
    },
    {
      id: 6,
      category: "beverages",
      name: "Botanical Elixir",
      price: "$16",
      description: "House-infused spirits with fresh botanicals and dry ice",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=200&fit=crop&q=80",
      dietary: ["vegan"],
      rating: 4.8
    }
  ];

  const testimonials = [
    { 
      name: "James Mitchell", 
      role: "Food Critic",
      quote: "A transcendent experience that redefines modern cuisine",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&q=80",
      rating: 5
    },
    { 
      name: "Isabella Chen", 
      role: "Celebrity Chef",
      quote: "Pure artistry on every plate - simply extraordinary",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=60&h=60&fit=crop&q=80",
      rating: 5
    },
    { 
      name: "Alexander Rodriguez", 
      role: "Michelin Inspector",
      quote: "Innovation and tradition harmoniously united",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&q=80",
      rating: 5
    }
  ];

  const filteredMenuItems = activeFilter === 'all' 
    ? enhancedMenuItems 
    : enhancedMenuItems.filter(item => item.category === activeFilter);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Handle reservation logic here
    alert('Reservation request submitted! We\'ll contact you shortly.');
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Enhanced Navigation */}
    
      {/* Enhanced Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 opacity-60"
        ></canvas>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 px-6 py-2 rounded-full font-semibold text-sm mb-8 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5" />
              <span>Michelin Star Experience</span>
              <Award className="w-5 h-5" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
              CULINARY{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                  {heroWords[activeWord]}
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-red-500/20 blur-xl -z-10"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Where molecular gastronomy meets artistic expression in an unforgettable sensory journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/60">
                Reserve Experience
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Experience</span>
              </button>
            </div>

            {/* Floating stats */}
            <div className="mt-16 flex justify-center space-x-12">
              {[
                { number: "15+", label: "Years Excellence" },
                { number: "3★", label: "Michelin Stars" },
                { number: "50+", label: "Awards Won" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-b from-gray-900/90 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter">
              CULINARY <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ARTISTRY</span>
            </h2>
            <p className="text-gray-400 text-lg">Each dish tells a story of innovation and passion</p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg shadow-yellow-500/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenuItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative bg-gradient-to-br from-black/80 to-gray-900/80 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-yellow-500/90 text-black px-2 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-3 h-3" />
                    <span>{item.rating}</span>
                  </div>
                  {item.dietary.length > 0 && (
                    <div className="absolute top-4 left-4">
                      {item.dietary.includes('vegetarian') && (
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🌱</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-orange-400">{item.price}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`} 
                        />
                      ))}
                    </div>
                    
                    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform duration-300">
                      Order
                    </button>
                  </div>
                </div>

                {hoveredCard === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent pointer-events-none transition-opacity duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section (Enhanced Services) */}
      <section id="experience" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter">
              IMMERSIVE <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">EXPERIENCES</span>
            </h2>
            <p className="text-gray-400 text-lg">Beyond dining - creating memories that last forever</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    index === activeService 
                      ? 'border-yellow-500/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 scale-105' 
                      : 'border-white/10 bg-white/5 hover:border-yellow-500/30'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-3">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {index === activeService && (
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-yellow-500/30">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  loop
                  muted
                  poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop&q=80"
                >
                </video>
                
                <button 
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    {isVideoPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm rotate-12 shadow-xl">
                Watch Our<br/>Story
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 bg-gradient-to-r from-gray-900/80 to-black/80 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              WHAT CRITICS <span className="text-yellow-400">SAY</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative h-80 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentTestimonial 
                      ? 'opacity-100 scale-100 translate-x-0' 
                      : index < currentTestimonial 
                        ? 'opacity-0 scale-95 -translate-x-full' 
                        : 'opacity-0 scale-95 translate-x-full'
                  }`}
                >
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
                      />
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl text-gray-200 font-light italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-yellow-400">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-yellow-400 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section id="about" className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-black mb-6 tracking-tighter">
                  OUR <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">LEGACY</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Since 2008, Golden Taste has been at the forefront of culinary innovation, 
                  earning three Michelin stars and redefining the boundaries of fine dining.
                </p>
              </div>

              <div className="relative pl-8 border-l-4 border-gradient-to-b from-yellow-400 to-orange-500">
                <Quote className="absolute -left-6 top-0 w-8 h-8 text-yellow-400 bg-black rounded-full p-2" />
                <blockquote className="text-xl text-gray-200 italic mb-4 leading-relaxed">
                  "We don't just create dishes; we craft memories that transcend the ordinary, 
                  weaving stories through flavor, texture, and visual artistry."
                </blockquote>
                <cite className="text-yellow-400 font-semibold">— Chef Elena Rodriguez, Founder</cite>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
                  <div className="text-gray-400 text-sm">Signature Dishes</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Happy Guests</div>
                </div>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=400&fit=crop&q=80" 
                    alt="Restaurant ambiance" 
                    className="w-full h-64 object-cover rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=300&fit=crop&q=80" 
                    alt="Chef at work" 
                    className="w-full h-48 object-cover rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
                    style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=300&fit=crop&q=80" 
                    alt="Signature dish" 
                    className="w-full h-48 object-cover rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
                    style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=400&fit=crop&q=80" 
                    alt="Restaurant interior" 
                    className="w-full h-64 object-cover rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
                    style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                  />
                </div>
              </div>

              {/* Floating awards */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center text-black font-bold text-xs rotate-12 shadow-2xl">
                <Award className="w-8 h-8 mb-1" />
                <span>Michelin</span>
                <span>★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reservation Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter">
              RESERVE YOUR <span className="text-white">EXPERIENCE</span>
            </h2>
            <p className="text-black/80 text-lg">Begin your culinary journey with us</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Reservation Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Make a Reservation</h3>
              
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={reservationForm.name}
                      onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={reservationForm.email}
                      onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={reservationForm.date}
                      onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={reservationForm.time}
                      onChange={(e) => setReservationForm({...reservationForm, time: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
                    <select
                      value={reservationForm.guests}
                      onChange={(e) => setReservationForm({...reservationForm, guests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                <h3 className="text-2xl font-bold mb-6 text-white">Visit Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-white/90">
                        123 Culinary Boulevard<br />
                        Golden District, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Reservations</h4>
                      <p className="text-white/90">+1 (555) 123-GOLD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-white/90">reservations@goldentaste.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Hours</h4>
                      <p className="text-white/90">
                        Tuesday - Sunday: 6:00 PM - 11:00 PM<br />
                        Monday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Notice */}
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-5 h-5 text-red-300" />
                  <h4 className="font-semibold text-white">Special Events</h4>
                </div>
                <p className="text-white/90 text-sm">
                  Planning a special occasion? Our private dining experiences can be 
                  customized for anniversaries, proposals, and celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fbbf24, #f97316);
        }
      `}</style>
    </div>
  );
};

export default RestaurantWebsite;