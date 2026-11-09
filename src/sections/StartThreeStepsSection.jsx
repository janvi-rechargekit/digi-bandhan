const StartThreeStepsSection = () => {
  const steps = [
    {
      id: "register",
      title: "Register",
      image: "/images/step-register.png",
      description:
        "The registration process is quick and simple. Enter your shop details, Aadhaar, PAN, and bank account details on your phone.",
    },
    {
      id: "verify",
      title: "Get verified",
      image: "/images/step-verify.png",
      description:
        "Once you submit your details, we verify your documents and shop. The process is usually completed within 24 hours.",
    },
    {
      id: "earn",
      title: "Start earning",
      image: "/images/step-earn.png",
      description:
        "After verification, log in and activate the services you want to offer. Start serving customers, earn commissions, and receive your payouts on a fixed schedule.",
    },
  ];

  return (
    <section className="w-full bg-white pt-2 pb-14 sm:pt-0 sm:pb-16 lg:pt-0 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Aligned Container */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          {/* Section Heading */}
          <div className="mb-10 lg:mb-14">
            <h2 className="font-['Inter'] text-[32px] font-semibold tracking-tight leading-[1.1] sm:text-[40px] lg:text-[48px]">
              <span className="text-[#0047FF]">Start in Three </span>
              <span className="bg-gradient-to-r from-[#272E9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Simple Steps
              </span>
            </h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col">
                
                {/* Image Card */}
                <div className="w-full overflow-hidden rounded-[16px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="mt-6 flex flex-col">
                  {/* FIX: Reduced title size from lg:text-[24px] to lg:text-[20px] */}
                  <h3 className="font-['Inter'] text-[22px] font-medium text-[#111111] lg:text-[20px]">
                    {step.title}
                  </h3>
                  
                  {/* FIX: Reduced description size from lg:text-[18px] to lg:text-[15px] and adjusted line height */}
                  <p className="mt-3 font-['Inter'] text-[16px] leading-[1.5] text-[#333333] lg:text-[15px] lg:leading-[1.6]">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartThreeStepsSection;