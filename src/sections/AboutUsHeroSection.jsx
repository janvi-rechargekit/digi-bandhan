const AboutUsHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Container aligned with navbar */}
      <div className="mx-auto flex w-full max-w-[1537px] flex-col px-4 py-12 sm:px-6 lg:h-[580px] lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-0">
        
        {/* LEFT SIDE: Text Content */}
        <div className="relative z-10 flex w-full flex-col justify-center lg:h-full lg:w-[50%] lg:pl-[5%] xl:pl-[8%]">
          
          {/* Exported Heading Image */}
          <div className="w-full max-w-[580px]">
            <img
              src="/images/about-hero-heading.png"
              alt="Helping Businesses Grow With Digital Solution"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Manually Written Description */}
          <p className="mt-6 max-w-[540px] font-['Inter'] text-[15px] leading-[1.6] text-[#333333] sm:text-[16px] lg:mt-8 lg:text-[18px]">
            We bridge the gap between local businesses and financial services, empowering retailers, distributors, and local entrepreneurs with the technology and support they need to serve their communities with greater ease, trust, and accessibility.
          </p>

          {/* CTA Button */}
          <div className="mt-8 lg:mt-10">
            <a
              href="#contact"
              className="inline-flex h-[48px] items-center justify-center rounded-[8px] bg-[#E31E24] px-8 font-['Inter'] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#181892] hover:via-[#393696] hover:to-[#BE0300] sm:h-[52px] sm:px-10 sm:text-[18px]"
            >
              Get Started
            </a>
          </div>

        </div>

        {/* RIGHT SIDE: Visual Image */}
        <div className="relative mt-10 w-full lg:mt-0 lg:h-full lg:w-[50%]">
          <img
            src="/images/about-hero-visual.webp"
            alt="Retailer using laptop in a store"
            className="h-auto w-full object-contain object-bottom lg:absolute lg:inset-0 lg:h-full lg:object-cover lg:object-left"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUsHeroSection;