const WhatYouCanEarnSection = () => {
  const cards = [
    {
      image: "/images/earn-card-1.png",
      text: "You earn a commission on every transaction, whether it’s a cash withdrawal, money transfer, bill payment, recharge, or ticket booking.",
    },
    {
      image: "/images/earn-card-2.png",
      text: "Many partners start with two or three services and build their monthly earnings over time. Offering more services can help you create more earning opportunities.",
    },
    {
      image: "/images/earn-card-3.png",
      text: "Your commission is added to your wallet, and payouts are made on a fixed schedule, so you know when to expect your earnings.",
    },
    {
      image: "/images/earn-card-4.png",
      text: "There’s no stock to buy or store at your shop, so you don’t have to block your own money in inventory.",
    },
  ];

  return (
    <section className="w-full bg-white pt-4 pb-2 sm:pt-8 sm:pb-4 lg:pt-8 lg:pb-8">
      {/* Outer container aligned with all other sections */}
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        {/* Inner container aligned edge-to-edge */}
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Heading with Figma Gradient */}
          <h2 className="font-['Inter'] text-[28px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#111111] sm:text-[34px] lg:text-[36px]">
            What{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(67.48deg, rgb(255, 195, 194) 6.86%, rgb(255, 127, 125) 17.93%, rgb(249, 65, 62) 29.56%, rgb(124, 118, 227) 66.8%, rgb(27, 33, 183) 80.3%, rgb(24, 25, 108) 92.9%)",
              }}
            >
              You Can Earn
            </span>
          </h2>

          {/* 4 Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
            {cards.map((card, index) => (
              <article
                key={index}
                className="flex flex-col h-full overflow-hidden rounded-[16px] bg-[#003dae]"
              >
                {/* Fixed aspect-ratio image container (362x365 from Figma) with bottom alignment */}
                <div className="relative w-full aspect-[362/365] bg-[#003dae] flex items-end justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-auto block object-contain object-bottom"
                  />
                </div>

                {/* Text below the image aligned across cards */}
                <div className="flex flex-1 items-start p-5 sm:p-5 lg:p-6">
                  <p className="font-['Inter'] text-[11px] font-normal leading-[1.3] text-white/95 sm:text-[13px]">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatYouCanEarnSection;
