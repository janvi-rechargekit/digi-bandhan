import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const productFaqs = [
  {
    question: "What banking services can I offer through DigiBandhan?",
    answer: "With DigiBandhan, you can provide multiple banking services from your shop, including AEPS, Micro ATM, Domestic Money Transfer, and UPI Cash Withdrawal. These services allow customers to withdraw cash, check account balances, transfer money, and access essential banking facilities without visiting a bank branch."
  },
  {
    question: "How does AEPS help retailers generate additional income?",
    answer: "AEPS lets retailers offer Aadhaar-based cash withdrawal and balance enquiry services using a customer's Aadhaar number and fingerprint authentication. Retailers can earn commissions on eligible AEPS transactions while helping customers, including pensioners and DBT beneficiaries, access their bank accounts conveniently."
  },
  {
    question: "What types of bill payments can I accept through DigiBandhan?",
    answer: "You can offer multiple bill payment services, including electricity, water, gas, broadband, DTH, credit card bill payments, and LIC premium payments. Through these utility bill payment services, retailers can help customers manage recurring payments while earning commissions on eligible transactions."
  },
  {
    question: "What travel booking services are available on the DigiBandhan platform?",
    answer: "DigiBandhan lets retailers expand their business with train ticket booking, bus ticket booking, and domestic flight booking. You can help customers check travel options and book tickets for their preferred destinations, including regular and Tatkal train bookings, while creating additional earning opportunities."
  },
  {
    question: "Do I need to have technical knowledge or a huge investment to start using DigiBandhan?",
    answer: "You don't need deep technical knowledge or a big infrastructure investment to begin. DigiBandhan is a platform to avail multiple digital banking, payment, recharge, and travel booking services."
  },
  {
    question: "What support is available if a customer's transaction is pending or unsuccessful?",
    answer: "DigiBandhan provides dedicated support to help retailers resolve transaction-related queries, including pending transactions, failed payments, and other service-related issues. Retailers can seek assistance to track transaction status and get guidance on resolving customer concerns, ensuring a smoother service experience."
  },
];

const AepsPage = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToTarget = () => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -150;
          const parent = element.parentElement;
          const isStickyChild = parent && parent.classList.contains('lg:block');

          let y;
          if (isStickyChild && window.innerWidth >= 1024) {
            const containerTop = parent.getBoundingClientRect().top + window.scrollY;
            y = containerTop + element.offsetTop + yOffset;
          } else {
            y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          }

          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      };

      scrollToTarget();
      const timer = setTimeout(scrollToTarget, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);
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
      <FaqSection faqs={productFaqs} />
      <FooterSection />
    </>
  );
};

export default AepsPage;