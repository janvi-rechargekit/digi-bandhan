const GrowthOpportunitiesSection = () => {
  const topCards = [
    {
      title: "Kirana and general store ",
      description: "owners looking to add a new revenue stream",
      image: "/images/growth-kirana-store.png",
      textWidth: "max-w-[62%] sm:max-w-[60%] lg:max-w-[58%]",
    },
    {
      title: "Mobile recharge and DTH shops ",
      description: "ready to offer more than recharges",
      image: "/images/growth-mobile-recharge.png",
      textWidth: "max-w-[52%] sm:max-w-[49%] lg:max-w-[47%]",
    },
  ];

  const bottomCards = [
    {
      title: "CSC and Jan Seva Kendra ",
      description: "operators expanding their service list",
      image: "/images/growth-csc-kendra.png",
      bgColor: "bg-[#0052C8]",
      textWidth: "max-w-[92%]",
    },
    {
      title: "Independent agents ",
      description: "and distributors building a customer base from scratch",
      image: "/images/growth-independent-agents.png",
      bgColor: "bg-[#006A3B]",
      textWidth: "max-w-[95%]",
    },
    {
      title: "Small finance and banking correspondents ",
      description: "wanting a wider service portfolio",
      image: "/images/growth-banking-correspondents.png",
      bgColor: "bg-[#261078]",
      textWidth: "max-w-[95%]",
    },
  ];

  return (
    <section className="w-full bg-white pt-0 pb-4 sm:pt-0 sm:pb-8 lg:pt-0 lg:pb-4">
      {/* Outer wrapper matching section above */}
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        {/* Inner wrapper matching TrustRetailersSection */}
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Header */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="max-w-[520px] font-['Inter'] text-[28px] font-medium leading-[1.2] tracking-[-0.7px] text-[#111111] sm:text-[34px] lg:text-[36px]">
              Growth Opportunities
              <br />
              for Everyone
            </h2>
            <p className="max-w-[360px] font-['Inter'] text-[12px] font-normal leading-[1.4] text-[#111111] sm:text-[14px] lg:pt-1">
              You don't need a finance background to get started.
              Whether you're a retailer, distributor, or individual, all
              you need is a desire to serve your local customers better.
            </p>
          </div>

          {/* Top Row - 2 cards with text overlaid directly on the image */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-9 lg:gap-6">
            {topCards.map((item) => (
              <article
                key={item.image}
                className="relative overflow-hidden rounded-[24px]"
              >
                {/* Image fills card without zoom or letterbox */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="block h-auto w-full"
                />

                {/* Text overlaid directly on top-left of image */}
                <div
                  className={`absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 lg:top-6 lg:left-7 xl:top-7 xl:left-8 z-10 ${item.textWidth}`}
                >
                  <p className="font-['Inter'] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-normal leading-[1.18] text-white">
                    <span className="font-semibold">{item.title}</span>
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Row - 3 cards with text header and image below */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
            {bottomCards.map((item) => (
              <article
                key={item.image}
                className={`flex flex-col justify-between overflow-hidden rounded-[24px] ${item.bgColor}`}
              >
                <div className="p-5 sm:p-5 lg:p-5 xl:p-6">
                  <p className={`font-['Inter'] text-[16px] sm:text-[18px] lg:text-[18px] xl:text-[21px] font-normal leading-[1.2] text-white ${item.textWidth}`}>
                    <span className="font-semibold">{item.title}</span>
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="block h-auto w-full"
                  />
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowthOpportunitiesSection;
