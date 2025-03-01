import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./root.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import ChallengesSection from "./component/ChallengesSection";
import Solutions from "./component/Solutions";
import FeatureSection from "./component/FeatureSection";
import ExportSection from "./component/ExportSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import TestimonialsSection from "./component/TestimonialsSection";
import WhatsAppButton from "./component/WhatsAppButton";
import Chatbot from "./Chatbot";
import ChatPage from "./ChatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;