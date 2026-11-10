const AepsHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1537px] flex-col lg:h-[650px] lg:flex-row lg:items-start lg:justify-between lg:px-8">
        
        {/* LEFT SIDE: Text Content */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:h-full lg:w-[48%] lg:py-0 lg:pl-[6%] xl:pl-[8%]">
          
          {/* Heading */}
          <h1 className="max-w-[700px] font-['Inter'] text-[36px] font-medium leading-[1.15] text-[#0047FF] sm:text-[46px] lg:text-[52px]">
            One Platform, Many 
            Ways to Earn
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[420px] font-['Inter'] text-[16px] leading-[1.6] text-[#333333] sm:text-[18px]">
            Offer 13+ banking, payment, and travel services to your customers and earn ₹30,000+ per month, even without a financial background.
          </p>

          {/* CTA Button */}
          <div className="mt-8 lg:mt-10">
            <a
              href="#contact"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-[#E31E24] px-8 font-['Inter'] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#EF4444] hover:via-[#8B5CF6] hover:to-[#3730A3] hover:shadow-lg sm:h-[52px] sm:px-10 sm:text-[18px]"
            >
              Get Started
            </a>
          </div>

        </div>

        {/* RIGHT SIDE: Visual Image */}
        <div className="relative w-full lg:w-[55%] lg:self-start">
          <img
            src="/images/aeps-hero-visual.webp" 
            alt="Retailer using DigiBandhan services"
            className="mt-4 h-auto w-full object-contain object-right-top"
          />
        </div>

      </div>
    </section>
  );
};

export default AepsHeroSection;