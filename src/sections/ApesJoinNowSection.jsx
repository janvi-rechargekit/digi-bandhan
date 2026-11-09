const AepsJoinNowSection = () => {
  return (
    <section className="w-full bg-white pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          {/* Main Banner Container */}
          <div className="relative flex w-full flex-col overflow-hidden rounded-[16px] bg-[#B50038] lg:flex-row lg:items-stretch lg:justify-between lg:min-h-[420px]">
            
            {/* --- RIGHT SIDE VISUAL (Desktop Only) --- */}
            <div className="absolute bottom-0 right-0 top-0 hidden w-[55%] lg:block">
              <img
                src="/images/aeps-join-visual.png" 
                alt="Retailer using DigiBandhan services"
                className="h-full w-full object-cover object-left-bottom"
              />
              {/* Subtle gradient to blend the image into the red background */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#B50038] to-transparent" />
            </div>

            {/* --- LEFT SIDE CONTENT --- */}
            <div className="relative z-10 flex w-full flex-col justify-center p-8 sm:p-12 lg:w-[50%] lg:p-14 xl:p-16">
              
              <h2 className="max-w-[450px] font-['Inter'] text-[32px] font-medium leading-[1.15] text-white sm:text-[40px] lg:text-[46px]">
                Give Your Business More Ways to Grow With Digibandhan
              </h2>

              <p className="mt-5 max-w-[420px] font-['Inter'] text-[15px] leading-[1.6] text-white/90 sm:text-[16px] lg:text-[18px]">
                Thousands of retailers and agents already use Digibandhan to serve customers better and earn more every day.
              </p>

              {/* Join Now Button */}
              <div className="mt-8 lg:mt-10">
                <a
                  href="#contact"
                  className="inline-flex h-[48px] items-center justify-center rounded-[6px] bg-white px-8 font-['Inter'] text-[16px] font-medium text-[#B50038] transition-colors duration-300 hover:bg-gray-100 sm:h-[52px] sm:px-10 sm:text-[18px]"
                >
                  Join Now
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AepsJoinNowSection;