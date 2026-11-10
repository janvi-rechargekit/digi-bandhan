const OurStorySection = () => {
  return (
    <section className="w-full bg-white pb-12 pt-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Container aligned with other sections */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          
          {/* LEFT SIDE: Text Content */}
          <div className="w-full lg:w-[50%]">
            
            {/* Exported Heading Image */}
            <div className="w-full max-w-[160px] sm:max-w-[200px] lg:max-w-[220px]">
              <img
                src="/images/our-story-heading.png" 
                alt="Our Story"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Manually Written Description */}
            <div className="mt-8 max-w-[600px] font-['Inter'] text-[16px] leading-[1.3] text-[#333333] sm:text-[18px]">
              <p>
                India's financial ecosystem has grown rapidly, but access is still uneven. Many people in smaller towns and villages still travel long distances to complete simple banking tasks like cash withdrawals, bill payments, or money transfers.
              </p>
              
              <p className="mt-6">
                Digibandhan was created to close this gap. We saw an opportunity to turn local shops and service points into mini financial hubs, where people could walk in and get things done without the wait, distance, and confusion.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: Visual Image */}
          <div className="w-full lg:w-[50%]">
            <div className="w-full overflow-hidden rounded-[12px] lg:rounded-[16px]">
              <img
                src="/images/our-story-visual.webp"
                alt="Local shopkeeper serving a customer"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStorySection;