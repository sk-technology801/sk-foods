"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChefHat, Award, Users, Clock, Heart, ArrowRight, Star, MapPin, Phone, Mail, Calendar, Utensils, Sparkles, Quote, Leaf, Gem, Target } from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    
    // Auto-rotate timeline and values
    const timelineInterval = setInterval(() => {
      setActiveTimeline(prev => (prev + 1) % 6);
    }, 4000);
    
    const valuesInterval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 3500);
    
    return () => {
      clearInterval(timelineInterval);
      clearInterval(valuesInterval);
    };
  }, []);

  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop&crop=face&q=80",
      bio: "With over 20 years of culinary experience spanning Italy, France, and Japan, Chef Marco brings innovation to traditional recipes.",
      specialty: "Modern Italian Fusion",
      quote: "Food is memories. I want every dish to create a lasting memory."
    },
    {
      name: "Sophie Laurent",
      role: "Pastry Artisan",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=face&q=80",
      bio: "Trained in Paris and Vienna, Sophie's desserts have been featured in multiple culinary magazines for their artistic presentation.",
      specialty: "Chocolate Sculptures",
      quote: "Dessert is the final note of the symphony - it must be perfect."
    },
    {
      name: "James Chen",
      role: "Head Sommelier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80",
      bio: "James curates our 5,000-bottle cellar with a focus on rare vintages and perfect food pairings from around the world.",
      specialty: "Burgundy & Bordeaux",
      quote: "Wine is the bridge between ingredients and emotion."
    },
    {
      name: "Maria Gonzalez",
      role: "Experience Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&q=80",
      bio: "Maria ensures every guest experiences our signature hospitality from arrival to departure, crafting personalized dining journeys.",
      specialty: "Custom Tasting Menus",
      quote: "Service is an invisible ingredient in every dish we serve."
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainable Excellence",
      description: "We partner with local organic farms and practice zero-waste cooking techniques while maintaining the highest culinary standards."
    },
    {
      icon: <Gem className="w-10 h-10" />,
      title: "Culinary Artistry",
      description: "Each plate is a canvas where flavors, textures, and colors combine to create edible works of art that engage all senses."
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Precision & Innovation",
      description: "We continuously experiment with techniques like molecular gastronomy while honoring traditional cooking methods."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Inspired Hospitality",
      description: "Beyond service, we create emotional connections through personalized experiences and attention to subtle details."
    }
  ];

  const milestones = [
    { 
      year: "2008", 
      event: "Golden Taste opens with just 12 tables and a big vision",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop&q=80"
    },
    { 
      year: "2012", 
      event: "Received our first Michelin Star and 'Best New Restaurant' award",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80"
    },
    { 
      year: "2015", 
      event: "Expanded to include exclusive chef's table and private dining rooms",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&q=80"
    },
    { 
      year: "2018", 
      event: "Featured in World's Top 100 Restaurants list for the first time",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80"
    },
    { 
      year: "2021", 
      event: "Launched our sustainable farm partnership and rooftop herb garden",
      image: "https://images.unsplash.com/photo-1592415486684-3c35d2ec9732?w=400&h=300&fit=crop&q=80"
    },
    { 
      year: "2023", 
      event: "Second location opening in Paris with focus on culinary innovation",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&q=80"
    }
  ];

  const ingredients = [
    { name: "Saffron", origin: "Iran", usage: "Signature golden risotto", icon: "🟡" },
    { name: "Truffle", origin: "Alba, Italy", usage: "Seasonal delicacies", icon: "🍄" },
    { name: "Wagyu", origin: "Kobe, Japan", usage: "Premium steak selection", icon: "🥩" },
    { name: "Vanilla", origin: "Madagascar", usage: "Desserts & infusions", icon: "🌿" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 parallax-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80')" }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold text-sm mb-8 animate-float">
              <Sparkles className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              WHERE <span className="text-yellow-500">CULINARY ART</span>
              <span className="block">MEETS THEATER</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              For over 15 years, Golden Taste has redefined fine dining as an immersive experience where 
              every plate tells a story and every evening becomes a cherished memory.
            </p>
            
            {/* Animated scrolldown indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-1 h-12 bg-yellow-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Diagonal Divider */}
      <section className="py-20 relative">
        <div className="custom-shape-divider-top-1701383949">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 mt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                <h2 className="text-5xl font-black">
                  BEYOND DINING:
                  <span className="block text-yellow-500">AN EXPERIENCE</span>
                </h2>
                
                <div className="relative pl-8 border-l-4 border-yellow-500">
                  <Quote className="absolute -left-5 top-0 w-10 h-10 text-yellow-500 bg-black p-2 rounded-full" />
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    "We don't just serve food; we craft memories. Each dish is a chapter in a story that unfolds 
                    throughout your evening with us, engaging all senses and creating moments that linger long after the last bite."
                  </p>
                  <p className="mt-4 text-yellow-500 font-semibold">— Elena Martinez, Founder</p>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our philosophy centers on the belief that exceptional dining should engage all senses and tell a story. 
                  We've created a multi-sensory experience where culinary artistry, ambiance, and service converge to create 
                  something truly extraordinary.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-900 rounded-2xl border border-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-black text-yellow-500 mb-2">5</div>
                    <div className="text-gray-300 font-semibold">Senses Engaged</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-2xl border border-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-black text-yellow-500 mb-2">12</div>
                    <div className="text-gray-300 font-semibold">Course Journey</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border-2 border-yellow-500/50 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=300&fit=crop&q=80"
                    alt="Kitchen artistry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-yellow-500/50 h-48 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=300&h=300&fit=crop&q=80"
                    alt="Food presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-yellow-500/50 h-48">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop&q=80"
                    alt="Restaurant ambiance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-yellow-500/50 h-48 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop&q=80"
                    alt="Wine selection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-xl border-4 border-black rotate-12">
                <div className="text-center text-black">
                  <div className="text-2xl font-black">1</div>
                  <div className="text-xs font-bold">MICHELIN STAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              OUR <span className="text-yellow-500">JOURNEY</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A timeline of innovation, excellence, and culinary artistry
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:flex relative h-96 mb-20">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500/50"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`absolute transition-all duration-1000 ease-in-out ${index === activeTimeline ? 'opacity-100' : 'opacity-40'}`}
                  style={{ 
                    top: `${index * (100/(milestones.length-1))}%`, 
                    left: `${index % 2 === 0 ? '35%' : '65%'}`,
                    transform: `translate(-50%, -50%) ${index === activeTimeline ? 'scale(1.05)' : 'scale(1)'}`
                  }}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className={`w-64 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    index % 2 === 0 
                      ? 'bg-black border-yellow-500/30 text-right' 
                      : 'bg-gray-800 border-yellow-500/30'
                  } ${index === activeTimeline ? 'shadow-lg shadow-yellow-500/20' : ''}`}>
                    <div className="text-2xl font-black text-yellow-500 mb-2">{milestone.year}</div>
                    <p className="text-gray-300 mb-4">{milestone.event}</p>
                    <div className={`overflow-hidden rounded-lg ${index === activeTimeline ? 'h-32' : 'h-0'} transition-all duration-500`}>
                      <img src={milestone.image} alt={milestone.event} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-500 rounded-full border-4 border-black`}></div>
                </div>
              ))}
            </div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-black mt-2 flex-shrink-0"></div>
                  <div className="ml-6 flex-1">
                    <div className="p-6 bg-gray-800 rounded-2xl border border-yellow-500/30">
                      <div className="text-2xl font-black text-yellow-500 mb-2">{milestone.year}</div>
                      <p className="text-gray-300 mb-4">{milestone.event}</p>
                      <img src={milestone.image} alt={milestone.event} className="w-full h-32 object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Carousel Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              OUR <span className="text-yellow-500">PILLARS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The foundation upon which every Golden Taste experience is built
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative h-96">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-in-out ${
                  index === activeValue ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="w-24 h-24 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 transform rotate-12">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-black text-yellow-500 mb-6">{value.title}</h3>
                <p className="text-xl text-gray-300 max-w-md mx-auto">{value.description}</p>
                
                <div className="flex space-x-2 mt-8">
                  {values.map((_, i) => (
                    <button 
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === activeValue ? 'bg-yellow-500 w-8' : 'bg-gray-700'
                      }`}
                      onClick={() => setActiveValue(i)}
                    ></button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Ingredients Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              SIGNATURE <span className="text-yellow-500">INGREDIENTS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Exceptional flavors begin with extraordinary ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="bg-black rounded-2xl p-6 border border-yellow-500/30 text-center transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{ingredient.icon}</div>
                <h3 className="text-2xl font-black mb-2 text-yellow-500">{ingredient.name}</h3>
                <p className="text-gray-400 mb-2">{ingredient.origin}</p>
                <p className="text-gray-300 text-sm">{ingredient.usage}</p>
                
                <div className="mt-4 h-1 w-16 bg-yellow-500 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Flip Cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              CULINARY <span className="text-yellow-500">ARTISANS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The visionaries who transform ingredients into experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="h-96 perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group">
                  <div className="absolute inset-0 bg-gray-900 rounded-2xl border border-yellow-500/30 p-6 backface-hidden transform rotate-y-180 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500/50 mb-6 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                    <p className="text-yellow-500 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.specialty}</p>
                    <div className="mt-auto pt-4 border-t border-yellow-500/30 w-full">
                      <p className="text-gray-300 text-sm italic">"{member.quote}"</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-yellow-500/30 p-6 backface-hidden flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-black mb-2 text-yellow-500">{member.name}</h3>
                    <p className="text-white font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                    <button className="mt-6 text-yellow-500 text-sm font-semibold flex items-center">
                      View Profile <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA Section */}
      <section className="py-20 bg-yellow-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8">
              READY TO EXPERIENCE <span className="text-white">GOLDEN TASTE</span>?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-black mb-2">Location</h3>
                <p className="text-black/80">123 Gourmet Street<br />Culinary District, CT 54321</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-black mb-2">Hours</h3>
                <p className="text-black/80">Mon-Thu: 5pm - 10pm<br />Fri-Sun: 5pm - 11pm</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-black mb-2">Reservations</h3>
                <p className="text-black/80">(555) 123-FOOD<br />reservations@goldentaste.com</p>
              </div>
            </div>

            <button className="bg-black text-yellow-500 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto group">
              <span>RESERVE YOUR TABLE</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="mt-8 text-black/70">
              Reservations recommended 2-3 weeks in advance for weekend dining
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .parallax-bg {
          background-attachment: fixed;
        }
        .custom-shape-divider-top-1701383949 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: translateY(-1px);
        }
        .custom-shape-divider-top-1701383949 svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
        }
        .custom-shape-divider-top-1701383949 .shape-fill {
          fill: #000000;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;