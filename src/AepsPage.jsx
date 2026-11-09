import AdditionalServicesSection from './sections/AdditionalServicesSection';
import AepsHeroSection from './sections/AepsHeroSection';
import AepsJoinNowSection from './sections/ApesJoinNowSection';
import BankingServicesSection from './sections/BankingServicesSection';
import BillPaymentsCollectionsSection from './sections/BillPaymentsCollectionsSection';
import DigitalPaymentsSection from './sections/DigitalPaymentsSection';
import FaqSection from './sections/FaqSection';
import FooterSection from './sections/FooterSection';
import TravelBookingServicesSection from './sections/TravelBookingServicesSection';
import WhyRetailersChooseSection from './sections/WhyRetailersChooseSection';

const AepsPage = () => {
  return (
    <>
      <AepsHeroSection />
      <BankingServicesSection />
      <BillPaymentsCollectionsSection />
      <DigitalPaymentsSection />
      <TravelBookingServicesSection />
      <AdditionalServicesSection />
      <WhyRetailersChooseSection />
      <AepsJoinNowSection />
      <FaqSection />
      <FooterSection />
    </>
  );
};

export default AepsPage;