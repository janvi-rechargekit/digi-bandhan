
const bankingServices = [
  {
    id: "aeps",
    title: "AePS (Aadhaar Enabled Payment System)",
    points: [
      "Allows customers to withdraw cash using their Aadhaar number and fingerprint.",
      "No debit card or passbook is required for the transaction.",
      "A convenient option for pensioners, DBT beneficiaries, and customers in areas with limited bank branches.",
    ],
    image: "/images/aeps-banking-services.png",
    alt: "Retailer helping a customer with an Aadhaar-enabled transaction",
    imagePosition: "right",
  },
  {
    id: "micro-atm",
    title: "Micro ATM",
    points: [
      "Enables customers to withdraw cash using their debit cards.",
      "Supports withdrawals, balance inquiries, and mini statements.",
      "Serves customers from multiple banks through a single device.",
    ],
    image: "/images/micro-atm-banking-services.png",
    alt: "Retailer providing banking services using a Micro ATM",
    imagePosition: "left",
  },
  {
    id: "dmt",
    title: "DMT (Domestic Money Transfer)",
    points: [
      "Helps customers transfer money directly to any bank account across India.",
      "Allows customers to send money conveniently without visiting a bank branch.",
      "Useful for migrant workers, families, and customers who regularly send money to other locations.",
    ],
    image: "/images/dmt-banking-services.png",
    alt: "Customer using a smartphone for domestic money transfer",
    imagePosition: "right",
  },
  {
    id: "upi-cash",
    title: "UPI Cash Withdrawal",
    points: [
      "Lets customers withdraw cash from their UPI-linked bank accounts without using a physical debit card.",
      "Offers a quick and convenient cash withdrawal option using UPI.",
      "Gives customers another easy way to access their money when they need it.",
    ],
    image: "/images/upi-cash-withdrawal-banking.png",
    alt: "Retailer helping a customer withdraw cash using UPI",
    imagePosition: "left",
  },
];

const BankingServicesSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 lg:-mt-22">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Heading */}
          <div className="mb-8 lg:mb-10">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Banking Services
              </span>
            </h2>

            <p className="mt-4 max-w-[750px] font-['Inter'] text-[15px] leading-[1.6] text-[#333333] sm:text-[16px]">
              Banking services make everyday financial services simpler for
              your customers, right from your location. They help them withdraw
              cash, transfer money, and access essential banking services
              without the need to visit a bank branch.
            </p>
          </div>

          {/* Stacking Banking Service Cards */}
          <div className="flex flex-col gap-12 lg:block">
            {bankingServices.map((service, index) => (
              <div
                key={service.id}
                className="relative lg:sticky lg:top-[110px] lg:mb-16"
                style={{ zIndex: index + 1 }}
              >
                <div
                  className={`flex w-full flex-col overflow-hidden rounded-[12px] border border-[#D1D5DB] bg-white shadow-sm lg:h-[390px] lg:flex-row ${
                    service.imagePosition === "left"
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="h-[230px] w-full overflow-hidden bg-[#F8FAFF] sm:h-[280px] lg:h-full lg:w-[50%]">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex w-full items-center justify-center p-5 sm:p-7 lg:w-[50%] lg:p-8 xl:p-10">
                    <div className="w-full max-w-[500px] rounded-[4px] border border-[#D1D5DB] p-5 sm:p-6">
                      <h3 className="font-['Inter'] text-[20px] font-semibold leading-[1.35] text-[#0047FF] sm:text-[23px]">
                        {service.title}
                      </h3>

                      <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 font-['Inter'] text-[13px] leading-[1.5] text-[#333333] sm:text-[14px]">
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

export default BankingServicesSection;
