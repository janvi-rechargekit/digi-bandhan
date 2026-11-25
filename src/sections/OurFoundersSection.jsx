const founders = [
  {
    id: "jitendra",
    name: "Jitendra Kumar",
    designation: "Co-Founder & CEO",
    image: "/images/co-founder & Ceo.jpeg",
    description:
      "Jitendra Kumar leads DigiBandhan’s corporate strategy and national distribution. With 32+ years of experience across FMCG, telecom, and fintech, he has held leadership roles at Payworld and RNFI Services, helping build sales teams and scale a retailer network from 10,000 to over 350,000.",
  },
  {
    id: "pawan",
    name: "Pawan Kumar",
    designation: "Co-Founder & COO",
    image:"/images/co-founder & coo.jpeg",
    description:
      "Pawan Kumar leads DigiBandhan’s banking and technology alliances, enterprise business, and operations. With 11+ years in fintech and operations, he has contributed to growing monthly transaction volumes from ₹90 crore to ₹1,500 crore at Eko India Financial Services and establishing 45+ strategic partnerships at PaySprint.",
  },
];

const OurFoundersSection = () => {
  return (
    <section className="w-full bg-white pt-6 pb-12 sm:pt-6 sm:pb-14 lg:pt-6 lg:pb-18">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Heading */}
          <div className="mb-9 max-w-[850px] sm:mb-12">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Meet Our Founders
              </span>
            </h2>

            <p className="mt-4 max-w-[780px] font-['Inter'] text-[15px] leading-[1.6] text-[#333333] sm:text-[16px]">
              DigiBandhan is guided by leaders with strong experience in
              fintech, business strategy, banking partnerships, and national
              distribution.
            </p>
          </div>

          {/* Founder Cards */}
          <div className="grid w-full min-w-0 grid-cols-1 gap-7 md:grid-cols-2 lg:gap-9">
            {founders.map((founder) => (
              <article
                key={founder.id}
                className="group  w-full min-w-0 max-w-full overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.09)]"
              >
                {/* Founder Image Placeholder */}
                <div className="flex h-[260px] w-full items-center justify-center overflow-hidden rounded-t-[16px] bg-[#F5F7FC]  sm:h-[290px] lg:h-[320px]">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="block h-full w-full object-contain object-center"
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
      }}
                     />
                  ) : (
                    // <div className="flex h-full w-full items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-[#9CA3AF]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          className="h-10 w-10"
                          aria-hidden="true"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>
                        <span className="font-['Inter'] text-[13px]">
                          Founder Image
                        </span>
                      </div>
                    // </div>
                  )}
                </div>

                {/* Founder Information */}
                <div className="p-6 sm:p-8 lg:p-9">
                  <h3 className="font-['Inter'] text-[23px] font-semibold leading-[1.3] text-[#111827] sm:text-[26px]">
                    {founder.name}
                  </h3>

                  <p className="mt-2 font-['Inter'] text-[15px] font-semibold leading-[1.5] text-[#0047FF] sm:text-[16px]">
                    {founder.designation}
                  </p>

                  <div className="mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#1A1A9C] to-[#EF2042]" />

                  <p className="mt-5 font-['Inter'] text-[14px] leading-[1.75] text-[#4B5563] sm:text-[15px]">
                    {founder.description}
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

export default OurFoundersSection;
