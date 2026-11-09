
const travelServices = [
  {
    id: "train",
    title: "Train Ticket Booking",
    points: [
      "Help customers book train tickets for their preferred routes and travel dates.",
      "Provide support for regular and Tatkal ticket bookings.",
      "Make train booking easier for customers who may find online booking platforms difficult to use.",
    ],
    image: "/images/train-booking.png",
    alt: "Retailer assisting customers with train ticket bookings",
    imagePosition: "right",
  },
  {
    id: "bus",
    title: "Bus Ticket Booking",
    points: [
      "Offer bus ticket bookings across multiple routes and operators.",
      "Give customers a convenient option for daily travel and long-distance journeys.",
      "Make bus reservations simple with an easy and accessible booking experience.",
    ],
    image: "/images/bus-booking.png",
    alt: "Retailer assisting customers with bus ticket bookings",
    imagePosition: "left",
  },
  {
    id: "flight",
    title: "Flight Booking",
    points: [
      "Help customers book domestic flight tickets for their preferred destinations.",
      "Provide convenient flight search and booking options for different travel plans.",
      "Make air travel booking easier through a simple and accessible experience.",
    ],
    image: "/images/flight-booking.png",
    alt: "Retailer assisting customers with flight bookings",
    imagePosition: "right",
  },
];

const TravelBookingServicesSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:pt-0 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1250px]">

          {/* Section Heading */}
          <div className="mb-10 lg:mb-14">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                Travel Booking Services
              </span>
            </h2>

            <p className="mt-4 max-w-[780px] font-['Inter'] text-[15px] leading-[1.6] text-[#333333] sm:text-[16px]">
              Offer convenient travel booking services for customers planning
              journeys by train, bus, or flight. Help them easily find and book
              tickets from one convenient place while adding a valuable and
              in-demand service to your business.
            </p>
          </div>

          {/* Scroll Stacking Cards - Same Structure as Bill Payments */}
          <div className="flex flex-col gap-12 lg:block">

            {travelServices.map((service, index) => (
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

export default TravelBookingServicesSection;
