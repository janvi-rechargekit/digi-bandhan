const WhyPartnersChooseSection = () => {
  const features = [
    {
      id: "low-barriers",
      icon: "/images/icon-low-barriers.png",
      title: "Low barriers to entry",
      description: "Getting started doesn't require heavy investment or technical expertise",
    },
    {
      id: "multiple-streams",
      icon: "/images/icon-multiple-streams.png",
      title: "Multiple income streams",
      description: "One platform, many services, more ways to earn",
    },
    {
      id: "simple-onboarding",
      icon: "/images/icon-simple-onboarding.png",
      title: "Simple onboarding",
      description: "A straightforward sign-up process",
    },
    {
      id: "reliable-support",
      icon: "/images/icon-reliable-support.png",
      title: "Reliable support",
      description: "A team that helps partners troubleshoot and grow.",
    },
    {
      id: "secure-tech",
      icon: "/images/icon-secure-tech.png",
      title: "Secure technology",
      description: "Systems built to protect every transaction and every customer's data",
    },
  ];

  return (
    <section className="w-full bg-white pt-2 pb-12 sm:pt-2 sm:pb-16 lg:pt-2 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          {/* Section Heading & Intro */}
          <div className="mb-10 lg:mb-14">
            <div className="w-full max-w-[500px] -ml-2 sm:ml-0">
              <img
                src="/images/why-partners-heading.png" 
                alt="Why Partners Choose Digibandhan"
                className="translate-x-4 h-auto w-full object-contain"
              />
            </div>
            <p className="translate-x-4 mt-6 max-w-[600px] font-['Inter'] text-[16px] leading-[1.6] text-[#333333] sm:text-[18px]">
              Thousands of businesses trust Digibandhan because we focus on what actually matters to our partners:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="translate-x-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col rounded-[12px] border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 h-[32px] w-[32px]">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-['Inter'] text-[16px] font-semibold leading-tight text-[#111111]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-['Inter'] text-[14px] leading-[1.5] text-[#555555]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPartnersChooseSection;