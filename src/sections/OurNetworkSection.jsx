const OurNetworkSection = () => {
  const networkCards = [
    {
      id: "kirana",
      image: "/images/network-kirana.png",
      alt: "Kirana store owner",
    },
    {
      id: "csc",
      image: "/images/network-csc.jpeg",
      alt: "CSC operator at Jan Seva Kendra",
    },
    {
      id: "banking",
      image: "/images/network-banking.png",
      alt: "Banking correspondent",
    },
    {
      id: "multi-store",
      image: "/images/network-multistore.png",
      alt: "Multi-store operator",
    },
  ];

  return (
    <section className="w-full bg-white pt-3 pb-12 sm:pt-3 sm:pb-16 lg:pt-4 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px]">
          
          {/* Section Heading */}
          <div className="mb-8 lg:mb-12">
            <div className="w-full max-w-[500px]">
              <img
                src="/images/today-network-heading.png" 
                alt="Today, our network includes"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {networkCards.map((card) => (
              <div
                key={card.id}
                className="group relative w-full overflow-hidden rounded-[16px]"
              >
                {/* The images have the text baked into them. */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ aspectRatio: "600 / 400" }} 
                />
                 {/* Manually Added CSC Text */}
                {card.id === "csc" && (
                  <div className="absolute left-5 top-11 z-10 sm:left-6 sm:top-11 lg:left-7 lg:top-[43px]">
                    <p className="max-w-[480px] font-['Inter'] text-[24px] font-normal leading-[26px] tracking-[0px] text-[#FFFFFF]">
                      CSC operators expanding 
                      <br />
                      their  service offerings
                    </p>
              </div>
            )}
          </div>
            ))}
        </div>
       </div>
      </div>
    </section>
  );
};

export default OurNetworkSection;