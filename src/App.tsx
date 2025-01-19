import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Clientele from './components/Clientele';
import Resources from './components/Resources';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Solutions />
      <Clientele />
      <Resources />
      <Blog />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;