
const billPaymentServices = [
  {
    id: "utility-bills",
    title: "Utility Bill Payments",
    points: [
      "Enable customers to pay electricity, water, gas, and DTH bills from one convenient location.",
      "Make everyday bill payments simple with a quick and easy payment process.",
      "Expand your services with multiple utility payment options for your customers.",
    ],
    image: "/images/utility-bill-payments.png",
    alt: "Retailer offering utility bill payment services",
    imagePosition: "left",
  },
  {
    id: "credit-card",
    title: "Credit Card Bill Payment",
    points: [
      "Help customers pay their credit card bills conveniently through your platform.",
      "Provide a simple payment experience without requiring customers to visit a bank.",
      "Offer an additional digital payment service at your retail outlet.",
    ],
    image: "/images/credit-card-bill-payment.png",
    alt: "Credit card bill payment interface",
    imagePosition: "right",
  },
  {
    id: "lic-premium",
    title: "LIC Premium Payments",
    points: [
      "Help policyholders pay their LIC insurance premiums conveniently.",
      "Make recurring premium payments easier through a simple digital process.",
      "Give customers an accessible way to manage their premium payments.",
    ],
    image: "/images/lic-premium-payments.png",
    alt: "LIC premium payment interface at a retail outlet",
    imagePosition: "left",
  },
  {
    id: "cms",
    title: "CMS (Cash Management Services)",
    points: [
      "Simplify cash collection and payment management for businesses.",
      "Help manage collection transactions through a convenient digital platform.",
      "Get better visibility into collections and transaction activity.",
    ],
    image: "/images/cms-services.png",
    alt: "Cash management services dashboard",
    imagePosition: "right",
  },
  {
    id: "recharge",
    title: "Recharge Services",
    points: [
      "Offer mobile, DTH, and FASTag recharge services through one platform.",
      "Allow customers to complete their regular recharges quickly and conveniently.",
      "Expand your retail offerings with frequently used recharge services.",
    ],
    image: "/images/recharge-services.png",
    alt: "Retailer offering mobile, DTH, and FASTag recharge services",
    imagePosition: "left",
  },
];

const BillPaymentsCollectionsSection = () => {
  return (
    <section className=" w-full bg-white pb-12 sm:pb-16 lg:pt-0 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Heading */}
          <div className="mb-10 lg:mb-14">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Bill Payments & Collections
              </span>
            </h2>

            <p className="mt-4 max-w-[750px] font-['Inter'] text-[15px] leading-[1.6] text-[#333333] sm:text-[16px]">
              Expand your business with everyday payment and collection
              services. Help customers pay bills, manage premiums, complete
              recharges, and access convenient payment solutions from one place.
            </p>
          </div>

          {/* Scroll Stacking Cards */}
          <div className="flex flex-col gap-12 lg:block">
            {billPaymentServices.map((service, index) => (
              <div
                key={service.id}
                className="relative lg:sticky lg:top-[110px] lg:mb-[108px]"
                style={{ zIndex: index + 1 }}
              >
                <div
                  className={`flex min-h-[340px] w-full flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:min-h-[400px] lg:h-[390px] lg:flex-row ${
                    service.imagePosition === "left"
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="h-[240px] w-full overflow-hidden bg-[#F8FAFF] sm:h-[300px] lg:h-full lg:w-[50%]">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex w-full items-center justify-center p-5 sm:p-8 lg:w-[50%] lg:p-10 xl:p-12">
                    <div className="w-full max-w-[510px] rounded-[8px] border border-[#D1D5DB] p-5 sm:p-6 lg:p-7">
                      <h3 className="font-['Inter'] text-[21px] font-semibold leading-[1.35] text-[#0047FF] sm:text-[24px] lg:text-[26px]">
                        {service.title}
                      </h3>

                      <ul className="mt-4 flex list-disc flex-col gap-3 pl-5 font-['Inter'] text-[13px] leading-[1.6] text-[#333333] sm:text-[14px]">
                        {service.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BillPaymentsCollectionsSection;
