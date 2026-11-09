const DigitalPaymentsSection = () => {
  return (
    <section className="w-full bg-white pb-12  sm:pb-16 lg:pt-0 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          {/* Top Header Content */}
          <div className="mb-8 lg:mb-10">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Digital Payments
              </span>
            </h2>
            <p className="mt-4 max-w-[700px] font-['Inter'] text-[16px] leading-[1.6] text-[#333333] sm:text-[18px]">
              With Digibandhan, you can accept UPI payments easily while giving customers a familiar and simple way to pay.
            </p>
          </div>

          {/* Main Card Container */}
          {/* FIX: Reduced the min-height and overall vertical padding to make the card shorter */}
          <div className="flex w-full flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-sm lg:flex-row lg:items-stretch lg:min-h-[380px]">
            
            {/* Left Side: Text Content inside the Card */}
            {/* FIX: Reduced vertical padding to pull content tighter */}
            <div className="flex w-full flex-col justify-center p-6 sm:p-8 lg:w-[55%] lg:px-10 lg:py-8 xl:px-12 xl:py-10">
              
              {/* Inner Text Box with Border */}
              {/* FIX: Reduced padding inside the inner box so it doesn't push the height up */}
              <div className="w-full max-w-[550px] rounded-[12px] border border-[#D1D5DB] p-5 sm:p-6 lg:p-6 xl:p-7">
                
                <h3 className="font-['Inter'] text-[22px] font-semibold text-[#0047FF] sm:text-[26px]">
                  UPI QR
                </h3>

                <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 font-['Inter'] text-[14px] leading-[1.5] text-[#333333] sm:text-[15px]">
                  <li>
                    Accept payments directly through a UPI QR code using popular UPI apps.
                  </li>
                  <li>
                    Allow customers to pay digitally without needing cash or a card.
                  </li>
                  <li>
                    Display your QR code at your counter and accept digital payments with ease.
                  </li>
                </ul>

              </div>

            </div>

            {/* Right Side: Visual Image inside the Card */}
            <div className="relative w-full lg:w-[45%]">
              <img
                src="/images/digital-payments-visual.png" 
                alt="Retailer accepting UPI payments"
                className="h-full w-full object-cover object-left-bottom lg:absolute lg:inset-0"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalPaymentsSection;