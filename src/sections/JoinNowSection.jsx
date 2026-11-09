const JoinNowSection = () => {
  return (
    // FIX: Changed top padding to lg:pt-0 and sm:pt-0 to pull the card up.
    <section className="w-full bg-white pt-0 pb-12 sm:pt-0 sm:pb-16 lg:pt-0 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container */}
        <div className="relative mx-auto flex w-full max-w-[1250px] flex-col overflow-hidden rounded-[16px] bg-[#B0003A] lg:flex-row lg:items-stretch lg:justify-between">
          
          {/* --- BACKGROUND IMAGE (Right Side) --- */}
          <div className="absolute bottom-0 right-0 top-0 hidden w-[65%] lg:block">
            <img
              src="/images/join-now-visual.png" 
              alt="Retailer using DigiBandhan"
              className="h-full w-full object-cover object-left"
            />
            {/* Gradient overlay to blend the image edge */}
            <div className="absolute inset-0 w-24 bg-gradient-to-r from-[#B0003A] via-transparent to-transparent" />
          </div>

          {/* --- LEFT CONTENT (Text & Button) --- */}
          <div className="relative z-10 w-full p-8 sm:p-10 lg:w-[50%] lg:p-14 xl:p-16">
            
            <h2 className="max-w-[450px] font-['Inter'] text-[32px] font-medium leading-[1.15] text-white sm:text-[40px] lg:text-[48px]">
              Give Your Business More Ways to Grow With Digibandhan
            </h2>

            <p className="mt-5 max-w-[400px] font-['Inter'] text-[15px] leading-[1.6] text-white/90 sm:text-[16px] lg:text-[18px]">
              Thousands of retailers and agents already use Digibandhan to serve customers better and earn more every day.
            </p>

            {/* Join Now Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex h-[48px] items-center justify-center rounded-[6px] bg-white px-8 font-['Inter'] text-[16px] font-medium text-[#B0003A] transition-colors duration-300 hover:bg-gray-100 sm:h-[52px] sm:px-10 sm:text-[18px]"
              >
                Join Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinNowSection;