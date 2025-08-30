
"use client";
import React, { useState, useEffect } from 'react';
import { ChefHat, Utensils, Users, Calendar, Sparkles, ArrowRight, Quote, MapPin, Phone, Mail, Menu, X, Star, Instagram, Twitter, Facebook } from 'lucide-react';

const RestaurantWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeWord, setActiveWord] = useState(0);

  const heroWords = ['ARTISTRY', 'ELEGANCE', 'PASSION'];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Service carousel interval
    const serviceInterval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 3);
    }, 4000);

    // Hero text animation interval
    const wordInterval = setInterval(() => {
      setActiveWord(prev => (prev + 1) % heroWords.length);
    }, 3000);

    // Particle effect for hero section
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particles = [];
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15
        });
      }
      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(234, 179, 8, 0.5)';
        particles.forEach(p => {
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animateParticles);
      };
      animateParticles();
    }

    // Glowing cursor trail effect
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);
    document.addEventListener('mousemove', (e) => {
      cursorTrail.style.left = `${e.clientX}px`;
      cursorTrail.style.top = `${e.clientY}px`;
    });

    return () => {
      clearInterval(serviceInterval);
      clearInterval(wordInterval);
      document.body.removeChild(cursorTrail);
    };
  }, []);

  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Custom Menus",
      description: "Bespoke dishes crafted to align with your event's vision and flavors."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Full-Service Catering",
      description: "Effortless execution with meticulous attention to every detail."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Planning",
      description: "Curated logistics and aesthetics for a flawless celebration."
    }
  ];

  const menuItems = [
    {
      category: "Starters",
      items: [
        { name: "Heirloom Tomato Carpaccio", price: "$15", description: "Thinly sliced tomatoes, burrata, basil oil, balsamic pearls" },
        { name: "Artisan Charcuterie", price: "$19", description: "Cured meats, local cheeses, truffle honey, figs" }
      ]
    },
    {
      category: "Mains",
      items: [
        { name: "Saffron-Seared Scallops", price: "$32", description: "Pan-seared scallops, cauliflower puree, citrus beurre blanc" },
        { name: "Wild Mushroom Ravioli", price: "$26", description: "Handmade pasta, truffle cream, aged parmesan" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Salted Caramel Panna Cotta", price: "$11", description: "Silky custard, caramel brittle, fresh berries" },
        { name: "Dark Chocolate Sphere", price: "$13", description: "Melted chocolate reveal, raspberry coulis, gold dust" }
      ]
    }
  ];

  const eventTypes = [
    {
      name: "Weddings",
      description: "Bespoke menus to make your special day unforgettable.",
      image: "https://images.unsplash.com/photo-1519741497674-411a6b6025d5?w=400&h=300&fit=crop&q=80",
      icon: "💍"
    },
    {
      name: "Corporate Events",
      description: "Sophisticated dining for professional gatherings.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=300&fit=crop&q=80",
      icon: "💼"
    },
    {
      name: "Private Parties",
      description: "Tailored experiences for intimate or lavish celebrations.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop&q=80",
      icon: "🎉"
    },
    {
      name: "Special Occasions",
      description: "Artful cuisine for milestone moments.",
      image: "https://images.unsplash.com/photo-1530103861714-7d7e69c21833?w=400&h=300&fit=crop&q=80",
      icon: "🎂"
    }
  ];

  const testimonials = [
    { name: "Emma S.", quote: "A culinary journey that left us speechless!" },
    { name: "Liam R.", quote: "The catering for our wedding was pure magic." },
    { name: "Sophie K.", quote: "Every bite was a masterpiece of flavor." }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-extrabold text-yellow-500 tracking-tight">Golden Taste</h1>
          <div className="hidden md:flex space-x-6">
            {['Home', 'Menu', 'About', 'Catering', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-gray-300 hover:text-yellow-500 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <button className="md:hidden text-yellow-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 py-4">
            <div className="flex flex-col items-center space-y-3">
              {['Home', 'Menu', 'About', 'Catering', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 overflow-hidden">
        <canvas id="particle-canvas" className="absolute inset-0 opacity-40"></canvas>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&h=800&fit=crop&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className={`max-w-2xl mx-auto text-center transform transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-4 py-1 rounded-full font-semibold text-sm mb-4 animate-float">
              <Sparkles className="w-4 h-4" />
              <span>Golden Taste</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tighter">
              CULINARY{' '}
              <span className="text-yellow-500 inline-block transition-all duration-1000 ease-in-out opacity-0 animate-word" style={{ animationDelay: `${activeWord * 3}s` }}>
                {heroWords[activeWord]}
              </span>
            </h1>
            <p className="text-base text-gray-200 max-w-md mx-auto mb-6">
              Savor a dining experience where every dish is a masterpiece of flavor and innovation.
            </p>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50">
              Reserve Now
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section with 3D Tilt */}
      <section id="menu" className="py-16 bg-gray-900/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-2 tracking-tighter">
              OUR <span className="text-yellow-500">MENU</span>
            </h2>
            <p className="text-gray-400 text-sm">Exquisite dishes crafted with passion and precision</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {menuItems.map((category, index) => (
              <div 
                key={index} 
                className="group relative bg-black/80 rounded-xl p-6 border border-yellow-500/10 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/20"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s' }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const tiltX = (y - centerY) / 20;
                  const tiltY = (centerX - x) / 20;
                  card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) translateZ(20px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) translateZ(0)';
                }}
              >
                <h3 className="text-xl font-semibold text-yellow-500 mb-4">{category.category}</h3>
                {category.items.map((item, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-200">{item.name}</span>
                      <span className="text-yellow-500">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-2 tracking-tighter">
              OUR <span className="text-yellow-500">LEGACY</span>
            </h2>
            <p className="text-gray-400 text-sm">Crafting unforgettable moments since 2008</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-yellow-500">
                <Quote className="absolute -left-4 top-0 w-6 h-6 text-yellow-500 bg-black rounded-full p-1" />
                <p className="text-gray-200 text-sm italic">
                  "We don’t just serve food; we create experiences that linger in the heart."
                </p>
                <p className="mt-2 text-yellow-500 font-medium">— Elena Martinez, Founder</p>
              </div>
              <p className="text-gray-200 text-sm">
                Golden Taste merges culinary innovation with sustainable practices, earning a Michelin star and global acclaim for redefining fine dining.
              </p>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&q=80" 
                alt="Restaurant interior" 
                className="rounded-xl border-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-500 text-black rounded-lg flex items-center justify-center font-bold text-sm rotate-6 shadow-lg group-hover:shadow-yellow-500/50 transition-all">
                Michelin Star
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-8 bg-gray-900/60 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="flex animate-marquee">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 mx-4 bg-black/80 rounded-lg p-4 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-200 text-sm italic">"{testimonial.quote}"</p>
                  <p className="text-yellow-500 text-sm font-medium mt-2">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section with Parallax Cards */}
      <section id="catering" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-2 tracking-tighter">
              CATERING <span className="text-yellow-500">EXCELLENCE</span>
            </h2>
            <p className="text-gray-400 text-sm">Transform your event with our artistry</p>
          </div>
          <div className="max-w-2xl mx-auto relative h-64 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${
                  index === activeService ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="w-14 h-14 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/30">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm max-w-xs">{service.description}</p>
                <div className="flex space-x-2 mt-4">
                  {services.map((_, i) => (
                    <button 
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeService ? 'bg-yellow-500 w-5' : 'bg-gray-600'
                      }`}
                      onClick={() => setActiveService(i)}
                    ></button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <div 
                key={index}
                className="group relative bg-black/80 rounded-xl p-5 border border-yellow-500/10 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/20"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s' }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const tiltX = (y - centerY) / 20;
                  const tiltY = (centerX - x) / 20;
                  card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) translateZ(20px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) translateZ(0)';
                }}
              >
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/20 transition-all duration-500 rounded-xl"></div>
                <div className="text-2xl mb-2 relative">{event.icon}</div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-2 relative">{event.name}</h3>
                <p className="text-sm text-gray-400 mb-3 relative">{event.description}</p>
                <img src={event.image} alt={event.name} className="w-full h-24 object-cover rounded-md relative" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-2 tracking-tighter">
              CONNECT <span className="text-white">WITH US</span>
            </h2>
            <p className="text-black/80 text-sm">Reserve your table or plan your event</p>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-6 h-6 mb-2" />
              <h3 className="text-base font-semibold mb-1">Location</h3>
              <p className="text-black/80 text-sm">123 Gourmet Street<br />Culinary District, CT 54321</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-6 h-6 mb-2" />
              <h3 className="text-base font-semibold mb-1">Contact</h3>
              <p className="text-black/80 text-sm">(555) 123-FOOD<br />info@goldentaste.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="w-6 h-6 mb-2" />
              <h3 className="text-base font-semibold mb-1">Hours</h3>
              <p className="text-black/80 text-sm">Tue-Sun: 5pm - 10pm<br />Closed Mondays</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-900/80 text-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 transform transition-all duration-800 opacity-0 translate-y-10 animate-footer">
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">Golden Taste</h3>
              <p className="text-sm text-gray-400">
                Crafting culinary masterpieces with passion and precision since 2008.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://instagram.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {['Home', 'Menu', 'About', 'Catering', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">Stay Connected</h3>
              <p className="text-sm text-gray-400 mb-4">Join our newsletter for exclusive updates and offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-black/50 text-gray-200 border border-yellow-500/20 rounded-l-lg focus:outline-none focus:border-yellow-500"
                />
                <button className="px-4 py-2 bg-yellow-500 text-black rounded-r-lg hover:bg-yellow-400 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Golden Taste. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-word {
          animation: fadeWord 3s infinite;
        }
        @keyframes fadeWord {
          0%, 20% { opacity: 0; transform: translateY(10px); }
          30%, 70% { opacity: 1; transform: translateY(0); }
          80%, 100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-footer {
          animation: fadeInFooter 1s ease-out forwards;
        }
        @keyframes fadeInFooter {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .cursor-trail {
          position: fixed;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default RestaurantWebsite;
