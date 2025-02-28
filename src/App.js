// App.js
import React from 'react';
import './root.css'
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import ChallengesSection from './component/ChallengesSection';
import Solutions from "./component/Solutions";
import FeatureSection from './component/FeatureSection';

import ExportSection from './component/ExportSection';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
// import NewsletterSection from './NewsletterSection';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import TestimonialsSection from './component/TestimonialsSection';
import WhatsAppButton from './WhatsAppButton';
import Chatbot from './Chatbot';
// import Testimonials from './Testimonials';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <HeroSection />
      <ScrollToTop />
      <ChallengesSection />
      <Solutions />

      <FeatureSection />
      <ExportSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
      <Chatbot />

    </div>
  );
}

export default App;
