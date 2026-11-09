const OurVisionSection = () => {
  return (
    <section className="w-full bg-white pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            
            {/* LEFT SIDE: Text Content */}
            <div className="w-full lg:-mt-20 lg:w-[50%]">
              
              {/* Heading */}
              <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
                <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h2>

              {/* Description */}
              {/* FIX 3: Added specific max-width and <br> tags to force the exact 6-line break structure from the Figma. */}
              <p className="mt-6 max-w-[640px] font-['Inter'] text-[16px] leading-[1.3] text-[#333333] sm:text-[18px] lg:text-[20px]">
                We see a future where financial services are available within <br className="hidden lg:block" />
                walking distance for every Indian, regardless of where they <br className="hidden lg:block" />
                live. A future where small business owners are empowered as <br className="hidden lg:block" />
                financial access points, and where technology quietly does <br className="hidden lg:block" />
                the heavy lifting behind the scenes.
              </p>


            </div>

            {/* RIGHT SIDE: Visual Image */}
            <div className="w-full lg:w-[50%]">
              <div className="w-full overflow-hidden rounded-[16px] lg:rounded-[24px]">
                <img
                  src="/images/our-vision-visual.png" 
                  alt="Shopkeeper using digital services on a computer"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;