"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Calendar, Users, ChefHat, 
  Send, MessageCircle, Instagram, Facebook, Twitter, 
  Star, Award, Heart, ArrowRight, CheckCircle, AlertCircle,
  Navigation, Utensils, Wine, Gift, Camera, Music
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: '',
    preferences: []
  });
  
  const [formStatus, setFormStatus] = useState('');
  const [activeTab, setActiveTab] = useState('reservation');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const canvasRef = useRef(null);
  const mapRef = useRef(null);
  
  const occasions = [
    'Anniversary', 'Birthday', 'Business Dinner', 'Date Night', 
    'Proposal', 'Wedding Celebration', 'Holiday Dinner', 'Other'
  ];
  
  const preferences = [
    'Window Seating', 'Quiet Area', 'Wine Pairing', 'Vegetarian Menu', 
    'Gluten-Free Options', 'Chef\'s Table', 'Private Room', 'Live Music'
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Reservations",
      primary: "+1 (555) 123-GOLD",
      secondary: "Daily 9AM - 10PM",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "reservations@goldentaste.com",
      secondary: "Response within 2 hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      primary: "+1 (555) 456-7890",
      secondary: "Quick responses",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&q=80",
      description: "Michelin-starred chef with 15+ years of culinary excellence"
    },
    {
      name: "Marcus Chen",
      role: "Head Sommelier",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80",
      description: "Master sommelier specializing in rare vintage collections"
    },
    {
      name: "Isabella Martinez",
      role: "Guest Relations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&q=80",
      description: "Ensuring every guest experience exceeds expectations"
    }
  ];

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 30
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    setIsVisible(true);
    
    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Team carousel
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % teamMembers.length);
    }, 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideInterval);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceToggle = (preference) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter(p => p !== preference)
        : [...prev.preferences, preference]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(''), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 opacity-40"></canvas>
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80')",
            transform: `translateY(${mousePosition.y * 0.01}px)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 px-6 py-3 rounded-full font-semibold text-sm mb-8">
              <MapPin className="w-5 h-5" />
              <span>Visit Our Michelin Star Restaurant</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 tracking-tighter">
              CONTACT{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                US
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready to embark on an extraordinary culinary journey? We're here to create 
              unforgettable moments for you and your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="group relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{method.title}</h3>
                <p className="text-white text-lg font-semibold mb-2">{method.primary}</p>
                <p className="text-gray-400">{method.secondary}</p>
                
                <div className="absolute -right-2 -top-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 tracking-tighter">
                MAKE A <span className="text-yellow-400">RESERVATION</span>
              </h2>
              <p className="text-gray-400 text-lg">Experience culinary excellence with personalized service</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-8 bg-white/5 rounded-lg p-1">
                  {[
                    { id: 'reservation', label: 'Reservation', icon: <Calendar className="w-4 h-4" /> },
                    { id: 'inquiry', label: 'General Inquiry', icon: <MessageCircle className="w-4 h-4" /> },
                    { id: 'private', label: 'Private Events', icon: <Users className="w-4 h-4" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                          : 'text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-yellow-400">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-yellow-400">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-yellow-400">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Reservation Details */}
                  {activeTab === 'reservation' && (
                    <>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-yellow-400">Date *</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-yellow-400">Time *</label>
                          <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-yellow-400">Guests *</label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white"
                          >
                            {[1,2,3,4,5,6,7,8,9,10].map(num => (
                              <option key={num} value={num} className="bg-gray-800">{num}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-yellow-400">Special Occasion</label>
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white"
                        >
                          <option value="" className="bg-gray-800">Select occasion (optional)</option>
                          {occasions.map(occasion => (
                            <option key={occasion} value={occasion} className="bg-gray-800">{occasion}</option>
                          ))}
                        </select>
                      </div>

                      {/* Preferences */}
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-yellow-400">Dining Preferences</label>
                        <div className="grid grid-cols-2 gap-3">
                          {preferences.map(preference => (
                            <label key={preference} className="flex items-center space-x-2 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={formData.preferences.includes(preference)}
                                onChange={() => handlePreferenceToggle(preference)}
                                className="w-4 h-4 text-yellow-500 bg-white/10 border-white/20 rounded focus:ring-yellow-500/20 focus:ring-2"
                              />
                              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{preference}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-yellow-400">
                      {activeTab === 'reservation' ? 'Special Requests' : 'Message'} {activeTab !== 'reservation' && '*'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder={
                        activeTab === 'reservation' 
                          ? "Any dietary restrictions, allergies, or special requests..."
                          : "Tell us how we can help you..."
                      }
                      required={activeTab !== 'reservation'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>
                          {activeTab === 'reservation' ? 'Confirm Reservation' : 'Send Message'}
                        </span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        {activeTab === 'reservation' 
                          ? 'Reservation request sent! We\'ll confirm within 30 minutes.' 
                          : 'Message sent successfully! We\'ll get back to you soon.'}
                      </span>
                    </div>
                  )}
                </form>
              </div>

              {/* Info Section */}
              <div className="space-y-8">
                {/* Location Card */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400">Visit Us</h3>
                      <p className="text-gray-400">Located in the heart of the city</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Address</h4>
                      <p className="text-gray-300">
                        123 Culinary Boulevard<br />
                        Golden District, NY 10001<br />
                        United States
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Hours</h4>
                        <div className="text-sm text-gray-300 space-y-1">
                          <div className="flex justify-between">
                            <span>Tue - Thu:</span>
                            <span>6PM - 10PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fri - Sat:</span>
                            <span>6PM - 11PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>5PM - 9PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Monday:</span>
                            <span className="text-red-400">Closed</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2">Parking</h4>
                        <p className="text-sm text-gray-300">
                          Valet service available<br />
                          Street parking nearby<br />
                          Parking garage adjacent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Spotlight */}
                <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                    <ChefHat className="w-6 h-6 mr-2" />
                    Meet Our Team
                  </h3>
                  
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ${
                          index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                          <p className="text-yellow-400 font-semibold mb-2">{member.role}</p>
                          <p className="text-sm text-gray-300">{member.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-2 mt-4">
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-yellow-400 w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Social & Reviews */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">Connect With Us</h3>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <a href="#" className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                      <Instagram className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-gray-400 mt-2">@goldentaste</span>
                    </a>
                    <a href="#" className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                      <Facebook className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-gray-400 mt-2">Golden Taste</span>
                    </a>
                    <a href="#" className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                      <Twitter className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-gray-400 mt-2">@goldentaste</span>
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">4.9/5 from 2,847 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter">
              FIND <span className="text-yellow-400">US</span>
            </h2>
            <p className="text-gray-400 text-lg">Located in the prestigious Golden District</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-96 lg:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <MapPin className="w-10 h-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Golden Taste Restaurant</h3>
                        <p className="text-gray-300">123 Culinary Boulevard</p>
                        <p className="text-gray-300">Golden District, NY 10001</p>
                      </div>
                      <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
                        <Navigation className="w-5 h-5" />
                        <span>Get Directions</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-orange-500/20 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Transportation & Directions */}
              <div className="space-y-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                    <Navigation className="w-5 h-5 mr-2" />
                    Getting Here
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-400 text-sm font-bold">🚗</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">By Car</h4>
                        <p className="text-sm text-gray-400">Valet parking available. Street parking after 6PM.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-400 text-sm font-bold">🚇</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">By Subway</h4>
                        <p className="text-sm text-gray-400">Golden District Station - 2 blocks north</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-yellow-400 text-sm font-bold">🚕</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">By Taxi/Uber</h4>
                        <p className="text-sm text-gray-400">Drop-off point directly in front</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Nearby Landmarks</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Golden Theater District</span>
                      <span className="text-sm text-gray-400">0.3 miles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Central Park East</span>
                      <span className="text-sm text-gray-400">0.5 miles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Museum of Fine Arts</span>
                      <span className="text-sm text-gray-400">0.7 miles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Grand Hotel Plaza</span>
                      <span className="text-sm text-gray-400">0.2 miles</span>
                    </div>
                  </div>
                </div>

                {/* Special Services */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Special Services</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-sm text-gray-300">Valet Parking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-sm text-gray-300">Wheelchair Access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-sm text-gray-300">Coat Check</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-sm text-gray-300">Private Rooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter">
              FREQUENTLY <span className="text-yellow-400">ASKED</span>
            </h2>
            <p className="text-gray-400 text-lg">Everything you need to know about dining with us</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What is your dress code?",
                  answer: "We maintain an elegant atmosphere with smart casual to formal attire. Jackets recommended for gentlemen, no athletic wear or flip-flops please.",
                  icon: <Users className="w-5 h-5" />
                },
                {
                  question: "Do you accommodate dietary restrictions?",
                  answer: "Absolutely! We offer vegetarian, vegan, gluten-free, and allergen-free options. Please inform us when making your reservation.",
                  icon: <Utensils className="w-5 h-5" />
                },
                {
                  question: "What is your cancellation policy?",
                  answer: "Reservations can be cancelled up to 24 hours in advance. Same-day cancellations may incur a fee for parties of 6 or more.",
                  icon: <Calendar className="w-5 h-5" />
                },
                {
                  question: "Do you offer wine pairings?",
                  answer: "Yes! Our sommelier creates perfect pairings for our tasting menus, featuring wines from our extensive collection of over 500 bottles.",
                  icon: <Wine className="w-5 h-5" />
                },
                {
                  question: "Can I host a private event?",
                  answer: "We offer several private dining options for 8-50 guests, including our exclusive chef's table and wine cellar dining room.",
                  icon: <Gift className="w-5 h-5" />
                },
                {
                  question: "Do you allow photography?",
                  answer: "We welcome food photography for personal use. Professional photography requires advance permission. Flash photography is not permitted.",
                  icon: <Camera className="w-5 h-5" />
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-black flex-shrink-0">
                      {faq.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl font-black mb-6 tracking-tighter text-white">
              READY TO <span className="text-black">DINE?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join us for an extraordinary culinary journey that will awaken your senses 
              and create memories to last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-black text-yellow-400 px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-black/50 flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <span>Make Reservation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all duration-300 flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "< 30min", label: "Reservation Response" },
                { number: "24/7", label: "Concierge Service" },
                { number: "100%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fbbf24, #f97316);
        }
        
        /* Focus states for accessibility */
        button:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 2px solid #f59e0b;
          outline-offset: 2px;
        }
        
        /* Custom checkbox styling */
        input[type="checkbox"]:checked {
          background-color: #f59e0b;
          border-color: #f59e0b;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;