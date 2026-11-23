import ContactUsHeroSection from './sections/ContactUsHeroSection';
import FooterSection from './sections/FooterSection';
import ContactFormSection from './sections/ContactFormSection';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ContactUsPage() {
    const location = useLocation()
  useEffect(() => {
    if (location.hash === "#talk-to-our-team") {
      setTimeout(() => {
        const element = document.getElementById("talk-to-our-team");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location]);
  return (
    <>
      
      <ContactUsHeroSection />
      <ContactFormSection />
      <FooterSection />
      
    </>
  );
};

