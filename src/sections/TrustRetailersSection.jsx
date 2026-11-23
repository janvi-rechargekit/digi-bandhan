import { useEffect, useState } from "react";

const TrustRetailersSection = () => {
  const cards = [
    { image: "/images/trusted-retailers-card-1.png", alt: "Earn on every transaction" },
    { image: "/images/trusted-retailers-card-2.png", alt: "Created for real financial transactions" },
    { image: "/images/trusted-retailers-card-3.png", alt: "Instant settlements" },
    { image: "/images/trusted-retailers-card-4.png", alt: "Instant everything in one dashboard" },
    { image: "/images/trusted-retailers-card-5.png", alt: "24/7 dedicated support" },
    {
      image: "/images/trusted-retailers-card-6.jpeg",
      alt: "A growing partner network",
      title: "A growing partner network",
      description: "Join businesses already using our platform across both urban and rural India.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      const nextCount = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
      setVisibleCount(nextCount);
      setCurrentIndex(cards.length - nextCount);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((index) => {
        const lastStart = cards.length - visibleCount;
        return index <= 0 ? cards.length - visibleCount : Math.max(index - visibleCount, 0);
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [visibleCount]);

  const trackWidth = `${(cards.length / visibleCount) * 100}%`;
  const cardWidth = `${100 / cards.length}%`;
  const translateX = `${(currentIndex * 100) / cards.length}%`;

  return (
    <section className="w-full overflow-hidden bg-white pt-0 pb-12 sm:pt-4 sm:pb-16 lg:pt-10 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1250px]">
          <h2 className="max-w-[650px] font-['Inter'] text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-black sm:text-[36px] lg:text-[36px]">
            Trusted by Retailers &amp;
            <br />
            <span className="bg-gradient-to-r from-[#272E9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
              Distributors Across India
            </span>
          </h2>

          <div className="mt-8 overflow-hidden sm:mt-9 lg:mt-10">
            <div
              className="flex will-change-transform"
              style={{
                width: trackWidth,
                transform: `translateX(-${translateX})`,
                transition: "transform 750ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.image}
                  className="shrink-0 px-2 sm:px-2.5 lg:px-3"
                  style={{ flex: `0 0 ${cardWidth}` }}
                >
                  {card.title ? (
                    <div className="relative flex w-full aspect-[473/651] flex-col justify-between overflow-hidden rounded-[16px] bg-[#21066c]">
                      <div className="z-10 px-[7.5%] pt-[12.5%]">
                        <h3 className="font-['Inter'] text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[23px] lg:text-[26px]">
                          {card.title}
                        </h3>
                        <p className="mt-5 sm:mt-6 lg:mt-7 max-w-[92%] sm:max-w-[88%] font-['Inter'] text-[15px] sm:text-[17px] lg:text-[19px] font-normal leading-[1.45] sm:leading-[1.5] tracking-[-0.01em] text-white">
                          {card.description}
                        </p>
                      </div>
                      <div className="mt-auto w-full overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="block h-auto w-full object-cover object-bottom"
                          draggable="false"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full overflow-hidden rounded-[16px]">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="block h-auto w-full"
                        draggable="false"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustRetailersSection;
