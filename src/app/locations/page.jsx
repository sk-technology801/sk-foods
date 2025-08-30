"use client"
import React, { useState, useEffect } from 'react';

// Custom icon components to replace Lucide React imports
const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Phone = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const Clock = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const ArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const Star = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Train = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h0"/><path d="M16 15h0"/></svg>;
const Car = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>;
const Tram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h0"/><path d="M16 15h0"/></svg>;
const Sparkles = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18h-2"/></svg>;
const Navigation = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>;
const Globe = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const Award = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;

const CheckIcon = () => (
  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </div>
);

const LocationsPage = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      id: 1,
      name: "Golden Taste Downtown",
      address: "123 Gourmet Street, Culinary District, CT 54321",
      phone: "(555) 123-FOOD",
      email: "downtown@goldentaste.com",
      hours: {
        weekdays: "5:00 PM - 10:00 PM",
        weekends: "5:00 PM - 11:00 PM",
        closed: "Monday"
      },
      features: ["Signature Tasting Menu", "Chef's Counter", "Private Dining Room", "Wine Cellar"],
      coordinates: { lat: 40.7128, lng: -74.0060 },
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80",
      ambiance: "Sophisticated urban elegance with panoramic city views"
    },
    {
      id: 2,
      name: "Golden Taste Waterside",
      address: "456 Harbor View, Marina Bay, CT 54322",
      phone: "(555) 123-SEAFOOD",
      email: "waterside@goldentaste.com",
      hours: {
        weekdays: "5:30 PM - 10:30 PM",
        weekends: "5:30 PM - 11:30 PM",
        closed: "Tuesday"
      },
      features: ["Seafood Specialties", "Waterfront Terrace", "Raw Bar", "Sunset Views"],
      coordinates: { lat: 40.7021, lng: -74.0120 },
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&q=80",
      ambiance: "Coastal chic with breathtaking waterfront vistas"
    },
    {
      id: 3,
      name: "Golden Taste Paris",
      address: "789 Avenue Culinaire, 75008 Paris, France",
      phone: "+33 1 42 86 90 42",
      email: "paris@goldentaste.com",
      hours: {
        weekdays: "6:00 PM - 11:00 PM",
        weekends: "6:00 PM - 12:00 AM",
        closed: "Sunday"
      },
      features: ["French-Asian Fusion", "Rooftop Garden", "Art Collection", "Jazz Evenings"],
      coordinates: { lat: 48.8566, lng: 2.3522 },
      image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&h=600&fit=crop&q=80",
      ambiance: "Parisian elegance meets contemporary design"
    }
  ];

  const transportation = [
    { icon: <Train />, name: "Subway", details: "Line 4 to Gourmet St Station (2 min walk)" },
    { icon: <Car />, name: "Parking", details: "Valet available ($25) or public garage nearby" },
    { icon: <Tram />, name: "Bus", details: "Routes 12, 45, 67 stop at Culinary District" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&h=800&fit=crop&q=80')" }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold text-sm mb-8">
              <Globe />
              <span>Our Locations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              EXPERIENCE <span className="text-yellow-500">GOLDEN TASTE</span>
              <span className="block">AROUND THE WORLD</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Each of our locations offers the same exceptional cuisine with a unique ambiance reflective of its surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-16 bg-gray-900 sticky top-20 z-30 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(index)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 ${
                  activeLocation === index
                    ? 'bg-yellow-500 text-black shadow-2xl'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-yellow-500/30'
                }`}
              >
                <MapPin />
                <span>{location.name.split(' ')[2]}</span>
                {activeLocation === index && <Sparkles />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Location Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className={`transition-all duration-500 ${activeLocation === index ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Information */}
                <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-black mb-4">{location.name}</h2>
                    <p className="text-yellow-500 text-lg mb-6">{location.ambiance}</p>
                    
                    <div className="flex items-start space-x-4 mb-6 p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
                      <div className="text-yellow-500 mt-1 flex-shrink-0">
                        <MapPin />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Address</h3>
                        <p className="text-gray-300">{location.address}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="text-yellow-500">
                            <Phone />
                          </div>
                          <h3 className="font-bold">Phone</h3>
                        </div>
                        <p className="text-gray-300">{location.phone}</p>
                      </div>
                      
                      <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="text-yellow-500">
                            <Mail />
                          </div>
                          <h3 className="font-bold">Email</h3>
                        </div>
                        <p className="text-gray-300">{location.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="p-6 bg-gray-900 rounded-2xl border border-yellow-500/30">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="text-yellow-500">
                        <Clock />
                      </div>
                      <h3 className="font-bold text-xl">Hours</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Tuesday - Friday</span>
                        <span className="font-semibold">{location.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Saturday - Sunday</span>
                        <span className="font-semibold">{location.hours.weekends}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Closed {location.hours.closed}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h3 className="font-bold text-xl mb-6 flex items-center">
                      <div className="text-yellow-500 mr-2">
                        <Award />
                      </div>
                      Location Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {location.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl border border-yellow-500/20">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Transportation */}
                  {index === 0 && (
                    <div className="pt-8">
                      <h3 className="font-bold text-xl mb-6">Getting Here</h3>
                      <div className="space-y-4">
                        {transportation.map((item, i) => (
                          <div key={i} className="flex items-start space-x-4 p-4 bg-gray-900 rounded-xl border border-yellow-500/30">
                            <div className="text-yellow-500 mt-1">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="text-gray-400 text-sm">{item.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <button className="flex-1 bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2">
                      <span>Reserve Table</span>
                      <ArrowRight />
                    </button>
                    <button className="flex-1 bg-transparent border-2 border-yellow-500 text-yellow-500 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500/10 transition-colors duration-300 flex items-center justify-center space-x-2">
                      <Navigation />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
                
                {/* Right Column - Image */}
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="mt-8 rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                        <MapPin />
                      </div>
                      <h3 className="text-2xl font-black mb-2">Interactive Map</h3>
                      <p className="text-gray-400 mb-6">Explore the area around {location.name.split(' ')[2]}</p>
                      <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors duration-300">
                        View Full Map
                      </button>
                    </div>
                  </div>
                  
                  {/* Awards Badge */}
                  <div className="absolute -top-4 -right-4 bg-yellow-500 text-black px-6 py-3 rounded-2xl font-bold shadow-2xl transform rotate-6 border-2 border-black">
                    <div className="flex items-center">
                      <Star />
                      <span>Michelin Star</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              LOCATION <span className="text-yellow-500">COMPARISON</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Each Golden Taste location offers a unique experience while maintaining our signature standards
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-yellow-500">
                  <th className="text-left pb-4 font-bold text-lg">Feature</th>
                  {locations.map((location) => (
                    <th key={location.id} className="text-center pb-4 font-bold text-lg">{location.name.split(' ')[2]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-4 font-semibold">Tasting Menu</td>
                  {locations.map((location) => (
                    <td key={location.id} className="text-center py-4">
                      <div className="flex justify-center">
                        <CheckIcon />
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 font-semibold">Private Dining</td>
                  {locations.map((location) => (
                    <td key={location.id} className="text-center py-4">
                      <div className="flex justify-center">
                        <CheckIcon />
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 font-semibold">Waterfront Views</td>
                  {locations.map((location, index) => (
                    <td key={location.id} className="text-center py-4">
                      {index === 1 ? <CheckIcon /> : <span className="text-gray-500">—</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 font-semibold">Rooftop Terrace</td>
                  {locations.map((location, index) => (
                    <td key={location.id} className="text-center py-4">
                      {index === 2 ? <CheckIcon /> : <span className="text-gray-500">—</span>}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 font-semibold">Valet Parking</td>
                  {locations.map((location, index) => (
                    <td key={location.id} className="text-center py-4">
                      {index !== 2 ? <CheckIcon /> : <span className="text-gray-500">—</span>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 font-semibold">Jazz Nights</td>
                  {locations.map((location, index) => (
                    <td key={location.id} className="text-center py-4">
                      {index === 2 ? <CheckIcon /> : <span className="text-gray-500">—</span>}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">
            READY TO <span className="text-white">EXPERIENCE</span> GOLDEN TASTE?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Reserve your table at any of our exceptional locations for an unforgettable dining experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black text-yellow-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center space-x-2">
              <span>Make Reservation</span>
              <ArrowRight />
            </button>
            
            <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black/10 transition-colors duration-300">
              View Full Menu
            </button>
          </div>
          
          <p className="mt-10 text-black/70">
            For large parties or special events, please contact us directly at{" "}
            <span className="font-semibold">events@goldentaste.com</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;