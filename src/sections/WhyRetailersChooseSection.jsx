const WhyRetailersChooseSection = () => {
  const features = [
    {
      id: "investment",
      icon: "/images/icon-wallet.png", 
      title: "No heavy investment",
      description: "or technical expertise required.",
    },
    {
      id: "services",
      icon: "/images/icon-growth.png", 
      title: "Offer multiple services",
      description: "and create more income opportunities.",
    },
    {
      id: "technology",
      icon: "/images/icon-security.png", 
      title: "Use reliable and secure technology",
      description: "for everyday transactions.",
    },
    {
      id: "support",
      icon: "/images/icon-gear.png", 
      title: "Get dedicated support",
      description: "whenever you need help.",
    },
    {
      id: "trusted",
      icon: "/images/icon-store.png", 
      title: "Become a trusted digital",
      description: "and financial service point in your area.",
    },
  ];

  return (
    // FIX 1: Removed top padding (`pt-0`) to pull the section up and close the white gap.
    <section className="w-full bg-white pt-0 pb-12 sm:pt-0 sm:pb-16 lg:pt-0 lg:pb-16">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            
            {/* LEFT SIDE: Text & List */}
            <div className="w-full lg:w-[50%]">
              
              {/* Heading */}
              <h2 className="font-['Inter'] text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px] lg:text-[42px]">
                <span className="text-[#1A1A9C]">Why Retailers </span>
                <span className="bg-gradient-to-r from-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                  Choose
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#1A1A9C] to-[#A41B55] bg-clip-text text-transparent">
                  Digibandhan
                </span>
              </h2>

              {/* Features List */}
              {/* FIX 2: Reduced top margin (mt-6) and gap between items to fit the screen */}
              <div className="mt-6 flex flex-col lg:mt-8">
                {features.map((feature, index) => (
                  <div key={feature.id} className="flex flex-col">
                    
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="mt-0.5 shrink-0">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col">
                        {/* FIX 3: Slightly reduced text size and line height to save vertical space */}
                        <h3 className="font-['Inter'] text-[16px] font-medium leading-[1.3] text-[#1A1A9C] sm:text-[18px]">
                          {feature.title}
                        </h3>
                        <p className="mt-0.5 font-['Inter'] text-[14px] leading-[1.3] text-[#555555] sm:text-[16px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider Line (Don't show on last item) */}
                    {/* FIX 4: Reduced vertical margin (my-3) to make the list more compact */}
                    {index !== features.length - 1 && (
                      <div className="my-3 h-[1px] w-full max-w-[400px] bg-[#E5E7EB]" />
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT SIDE: Visual Image */}
            <div className="w-full lg:w-[48%]">
              <div className="w-full overflow-hidden rounded-[16px]">
                <img
                  src="/images/why-retailers-visual.webp" 
                  alt="Retailer showing services on his phone"
                  // FIX 5: Set a max-height on large screens so the image doesn't stretch the section too tall
                  className="h-auto w-full object-cover lg:max-h-[500px] lg:object-contain lg:object-right"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyRetailersChooseSection;