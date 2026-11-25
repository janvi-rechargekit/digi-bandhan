import AboutUsHeroSection from './sections/AboutUsHeroSection';
import FooterSection from './sections/FooterSection';
import JoinNetworkSection from './sections/JoinNetworkSection';
import OurFoundersSection from './sections/OurFoundersSection';
import OurMissionSection from './sections/OurMissionSection';
import OurNetworkSection from './sections/OurNetworkSection';
import OurStorySection from './sections/OurStorySection';
import OurVisionSection from './sections/OurVisionSection';
import WhyPartnersChooseSection from './sections/WhyPartnersChooseSection';


const AboutPage = () => {
  return (
    <>
      <AboutUsHeroSection />
      <OurStorySection />
      <OurNetworkSection />
      <OurMissionSection />
      <OurFoundersSection />
      <WhyPartnersChooseSection />
      <OurVisionSection />
      <JoinNetworkSection />
      <FooterSection />
    </>
  );
};

export default AboutPage;