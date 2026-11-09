const OurMissionSection = () => {
  const missionCards = [
    {
      id: "access",
      image: "/images/mission-access.png",
      title: "Access",
      description: (
        <>
          Bring essential financial services <br className="hidden md:inline" />
          to places where banks and ATMs <br className="hidden md:inline" />
          are hard to reach
        </>
      ),
    },
    {
      id: "opportunity",
      image: "/images/mission-opportunity.png",
      title: "Opportunity",
      description: (
        <>
          Give retailers and distributors <br className="hidden md:inline" />
          a reliable way to earn, using <br className="hidden md:inline" />
          methods they already trust
        </>
      ),
    },
    {
      id: "trust",
      image: "/images/mission-trust.png",
      title: "Trust",
      description: (
        <>
          Build a platform that is safe, truthful, <br className="hidden md:inline" />
          and easy to use every single day
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-6 pb-16 sm:pt-3 sm:pb-20 lg:pt-2 lg:pb-24">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">

        {/* 
          FIX: Changed the inner container to shift left.
          - Removed `mx-auto` (which forced it to center).
          - Added `mr-auto` to push it to the left.
          - Changed `max-w` to `w-full max-w-[1250px]` so it spans properly on large screens.
        */}
         <div className="mx-auto w-full max-w-[1140px] lg:-translate-x-4 xl:max-w-[1180px] xl:-translate-x-6">
          {/* Section Heading */}
          <div className="mb-7 sm:mb-8 lg:mb-10">
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              <img
                src="/images/our-mission-heading.png"
                alt="Our mission is built on three ideas:"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12 xl:gap-16">
            {missionCards.map((card) => (
              <div key={card.id} className="flex flex-col">

                {/* Card Image */}
                <div className="w-full overflow-hidden rounded-[16px] lg:rounded-[20px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-auto w-full object-cover aspect-[321/269]"
                  />
                </div>

                {/* Card Text Content */}
                <div className="mt-5 flex flex-col sm:mt-6">
                  <h3 className="font-['Inter'] text-[18px] font-medium text-[#111111] sm:text-[19px] lg:text-[20px]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 font-['Inter'] text-[14px] leading-[1.48] text-[#333333] sm:text-[15px]">
                    {card.description}
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

export default OurMissionSection;