const AdditionalServicesSection = () => {
  return (
    <section className="w-full bg-white pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          {/* Top Header Content */}
          <div className="mb-8 lg:mb-10">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="mt-4 max-w-[750px] font-['Inter'] text-[16px] leading-[1.6] text-[#333333] sm:text-[18px]">
              Provide convenient digital services that help customers manage their everyday and official needs from your location.
            </p>
          </div>

          {/* Main Card Container */}
          {/* Uses a border and rounded corners to match the outer container in the Figma */}
          <div className="flex w-full flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-sm lg:flex-row lg:items-stretch lg:min-h-[400px]">
            
            {/* Left Side: Visual Image */}
            <div className="relative w-full lg:w-[48%]">
              <img
                src="/images/additional-services-visual.png" 
                className="h-full w-full object-cover object-left-bottom lg:absolute lg:inset-0"
              />
            </div>

            {/* Right Side: Text Content inside the Card */}
            <div className="flex w-full flex-col justify-center p-6 sm:p-10 lg:w-[52%] lg:px-12 lg:py-10">
              
              {/* Inner Text Box with Border */}
              <div className="w-full max-w-[580px] rounded-[12px] border border-[#D1D5DB] p-6 sm:p-8 lg:p-10">
                
                <h3 className="font-['Inter'] text-[24px] font-semibold text-[#0047FF] sm:text-[28px]">
                  PAN Card Creation
                </h3>

                <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 font-['Inter'] text-[15px] leading-[1.6] text-[#333333] sm:text-[16px]">
                  <li>
                    It helps customers apply for a new PAN card from your location.
                  </li>
                  <li>
                    Assist with the PAN application process and required details.
                  </li>
                  <li>
                    Offer a convenient local option for customers who need a PAN for banking, financial, or official purposes.
                  </li>
                </ul>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;