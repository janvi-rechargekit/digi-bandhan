import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesIntroSection from './sections/ServicesIntroSection';
import TrustRetailersSection from './sections/TrustRetailersSection';
import GrowthOpportunitiesSection from './sections/GrowthOpportunitiesSection';
import WhatYouCanEarnSection from './sections/WhatYouCanEarnSection';
import StartThreeStepsSection from './sections/StartThreeStepsSection';
import JoinNowSection from './sections/JoinNowSection';
import FaqSection from './sections/FaqSection';
import FooterSection from './sections/FooterSection';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage'; 
import AepsPage from './AepsPage';
import ProductsTabsSection from './sections/ProductsTabsSection';

const HomePage = () => (
  <>
    <HeroSection />
    <ServicesIntroSection />
    <ProductsTabsSection />
    <TrustRetailersSection />
    <GrowthOpportunitiesSection />
    <WhatYouCanEarnSection />
    <StartThreeStepsSection />
    <JoinNowSection />
    <FaqSection />
    <FooterSection />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Contact Route */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/aadhaar-enabled-payment-system" element={<AepsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;