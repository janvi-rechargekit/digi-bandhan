import { useState } from 'react';

const ProductsTabsSection = () => {
  const [activeTab, setActiveTab] = useState('Sound box');

  const tabs = [
    "Sound box",
    "AePS",
    "DMT",
    "Micro ATM",
    "CMS",
    "Utility Bill Payments",
    "Recharge",
    "UPI QR",
    "Train Ticket Booking",
    "Bus Ticket Booking",
    "Flight Booking",
    "LIC Premium Payments",
    "PAN Creation",
    "More services",
  ];

  const tabContent = {
    "Sound box": {
      title: "Sound box",
      description:
        "Keep your business updated with the Digibandhan Sound Box, designed to give instant audio alerts for every successful payment. Get clear and timely payment notifications without constantly checking your phone or dashboard. It helps reduce confusion at the counter and keeps transaction tracking quick and convenient. Perfect for shops and businesses handling frequent digital payments throughout the day.",
      image: "/images/sound-box-visual.webp",
    },
    "AePS": {
      title: "AEPS (Aadhaar Enabled Payment System)",
      description: "AEPS (Aadhaar Enabled Payment System) lets your users withdraw cash, check balance, and transfer money using just their Aadhaar number and fingerprint. It provides a convenient way to offer essential banking services through your platform, especially in areas with limited access to traditional banking.",
      image: "/images/aeps-tab-visual.webp", 
    },
    "DMT": {
      title: "(DMT)Domestic Money Transfer",
      description: "Enable fast and safe domestic money transfers through your platform and help customers send funds securely to any bank account anytime with a smooth experience. Give your platform the reach to handle everyday payments with reliable processing and convenient fund movement.",
      image: "/images/dmt-tab-visual.webp",
    },
    "Micro ATM": {
      title: "Micro ATM",
      description: "Micro ATM enables businesses to offer convenient cash withdrawal and banking services, even in areas with limited access to traditional banking. With trustworthy transactions and easy operations, it helps expand your service reach and create new revenue opportunities. It also supports essential banking services through a compact, accessible setup, making it easier to serve more users across different locations.",
      image: "/images/micro-atm-tab-visual.webp",
    },
    "CMS": {
      title: "CMS (Cash Management System)",
      description: "Simplify cash management with CMS and manage collections, payments, and fund transfers from one platform. It gives your business greater control, faster transactions, and a more efficient way to manage everyday financial operations. With streamlined processes and better visibility, you can monitor cash flows more effectively and reduce the time spent on manual financial tasks.",
      image: "/images/cms-services.webp", 
    },
    "Utility Bill Payments": {
      title: "Utility Bill Payments",
      description: "Make everyday bill payments simple by offering customers a quick, convenient way to pay for electricity, water, gas, and other essential bills. Provide a smooth payment experience with reliable transactions and live bill updates, helping users stay on top of recurring payments with ease.",
      image: "/images/utility-bill-payments.webp", 
    },
    "Recharge": {
      title: "Recharge",
      description: "Keep up with your customers' everyday needs with quick mobile, DTH, and FASTag recharges. It helps to simplify recharge services and gives a faster and more convenient way to pay. With a seamless recharge experience, customers can easily stay connected and manage their essential payments anytime.",
      image: "/images/recharge-tab-visual.webp",
    },
    "UPI QR": {
      title: "UPI QR",
      description: "Provides quick and convenient collections with UPI QR that allows customers to pay by simply scanning a code. It creates a faster checkout experience and makes online collections easier to manage. Businesses can accept payments instantly without cash or lengthy payment processes, while customers enjoy a simple and safe way to pay.",
      image: "/images/upi-qr-tab-visual.webp",
    },
    "Train Ticket Booking": {
      title: "Train Ticket Booking",
      description: "Gives customers a convenient way to reserve train journeys with a smooth booking experience. This service helps to expand travel offerings with easy access to train reservations, and customers can quickly search for available trains, check schedules, and complete bookings through a simple and reliable process.",
      image: "/images/train-booking-tab-visual.webp", 
    },
    "Bus Ticket Booking": {
      title: "Bus Ticket Booking",
      description: "Provide bus reservations with access to routes, schedules, and fares across multiple destinations. It gives your customers the ability to plan and book their journeys from a single platform. With real-time availability and streamlined booking, customers can quickly find buses and secure their seats easily.",
      image: "/images/bus-booking-tab-visual.webp",
    },
    "Flight Booking": {
      title: "Flight Booking",
      description: "Connect your clients with convenient air travel options across domestic and international routes. Make it easier to compare fares, choose preferred flights, and confirm journeys with minimal effort. Deliver a smooth and reliable booking experience that saves time and makes air travel planning more convenient.",
      image: "/images/flight-booking-tab-visual.webp",
    },
    "LIC Premium Payments": {
      title: "LIC Premium Payments",
      description: "Make LIC premium payments simpler with an easy digital payment service. Ensure that customers stay on top of their policy dues and complete payments without unnecessary delays.",
      image: "/images/lic-premium-tab-visual.webp", 
    },
    "PAN Creation": {
      title: "PAN Creation",
      description: "Simplify PAN creation with a digital process that makes applications easier to manage. Ensure that your customers submit their details efficiently and get their PAN application process moving without unnecessary hassle.",
      image: "/images/pan-creation-tab-visual.webp", 
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <>
      <section className="w-full bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto w-full max-w-[1250px]">
            
            {/* Section Heading */}
            <div className="mb-4 lg:mb-6">
              <h2 className="font-['Inter'] text-[28px] font-semibold leading-[1.2] tracking-tight sm:text-[36px] lg:text-[42px]">
                <span className="text-[#111111]">Aapke Business Ke Liye </span>
                <br />
                <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                  Financial Aur Digital Solutions
                </span>
              </h2>
            </div>

            {/* Scrollable Tabs Navigation */}
            <div className="mb-6 border-b border-[#E5E7EB]">
              {/* 
                FIX: 
                Mobile: `flex-nowrap overflow-x-auto` forces a single horizontal scrollable line.
                Desktop: `lg:flex-wrap lg:overflow-visible` allows the tabs to wrap into two lines.
              */}
              <div className="flex flex-nowrap overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:overflow-visible lg:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap px-4 py-2 font-['Inter'] text-[15px] transition-all sm:px-6 sm:text-[17px] ${
                      activeTab === tab
                        ? "border-b-2 border-[#0047FF] bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text font-medium text-transparent"
                        : "text-[#6B7280] hover:text-[#111111]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Content Area */}
            {activeTab === 'More services' ? (
              // --- SPECIAL COMING SOON LAYOUT ---
              <div className="flex flex-col items-center justify-center rounded-[16px] border border-[#E5E7EB] bg-white py-16 lg:flex-row lg:justify-between lg:py-20 lg:pl-16 lg:pr-8">
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                  <h3 className="bg-gradient-to-r from-[#1A1A9C] to-[#EF2042] bg-clip-text font-['Inter'] text-[36px] font-semibold uppercase tracking-wide text-transparent sm:text-[48px] lg:text-[56px]">
                    Coming Soon
                  </h3>
                </div>
                <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
                  <img
                    src="/images/coming-soon-rocket.png" 
                    alt="Coming Soon Rocket"
                    className="h-auto w-full max-w-[300px] object-contain sm:max-w-[400px]"
                  />
                </div>
              </div>
            ) : (
              // --- STANDARD TAB CONTENT LAYOUT ---
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                
                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[45%]">
                  <h3 className="font-['Inter'] text-[24px] font-medium text-[#111111] sm:text-[28px]">
                    {currentContent?.title}
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[14px] leading-[1.5] text-[#4A4A4A] sm:text-[15px]">
                    {currentContent?.description}
                  </p>
                  
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-[6px] bg-[#5C4DFF] px-8 py-2.5 font-['Inter'] text-[15px] font-medium text-white transition-colors hover:bg-[#4B3FE0]"
                    >
                      See Solutions
                    </a>
                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-[50%]">
                  <div className="flex w-full justify-center lg:justify-end">
                    <img
                      src={currentContent?.image}
                      alt={currentContent?.title}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsTabsSection;