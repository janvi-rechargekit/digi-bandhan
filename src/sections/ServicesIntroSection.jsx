/**
 * ServicesIntroSection component
 *
 * @param {Object} props
 * @param {string} [props.title] - Custom section heading or title
 * @param {string} [props.description] - Custom section description
 * @param {boolean} [props.animate=true] - Flag to enable fade/slide on scroll animations
 * @param {'default' | 'stacked' | 'cards' | 'grid'} [props.variant='default'] - Visual layout variant
 * @param {string} [props.className=''] - Additional CSS classes
 */
const ServicesIntroSection = ({
  title,
  description,
  animate = true,
  variant = 'default',
  className = '',
}) => {
  const animationClass = animate ? 'animate-fade-in motion-safe:animate-slide-up' : ''
  

  return (
    <div className={`relative isolate w-full overflow-x-clip overflow-y-visible bg-[#F8F9FA] pb-4 sm:pb-8 lg:pb-24 ${animationClass} ${className}`}>

      {/* ==========================================
          CARD 1 - ALL IN ONE PLACE
      ========================================== */}
      {/* Heading scrolls normally */}
      <section
        id="product"
        className="relative z-0 w-full pt-12 lg:pt-20"
      >
        <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center text-center sm:mb-12">
            <h2 className="mt-4 font-['Inter'] text-[28px] font-medium leading-[1.3] text-[#111111] sm:mt-0 sm:text-[36px] lg:text-[48px] lg:leading-[1.2]">
              {title ? (
                title
              ) : (
                <>
                  Everything You Need to Grow, <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-[#272E9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                    All in One Place
                  </span>
                </>
              )}
            </h2>
          </div>
        </div>
      </section>

      {/* Card 1 - Sticky ONLY on desktop (lg) */}
      <section
        className="relative z-10 h-fit w-full self-start py-4 lg:sticky lg:top-[8vh] lg:py-8 lg:mb-[10vh]"
      >
        <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[1250px] flex-col overflow-hidden rounded-[16px] bg-[#C9D9FF] shadow-2xl lg:grid lg:grid-cols-[48%_52%]">
            <div className="flex w-full items-end justify-center bg-[#C9D9FF]">
              <img
                src="/images/services-left-visual.png"
                alt="DigiBandhan digital services"
                className="block h-auto w-full object-contain object-left-bottom lg:h-full"
              />
            </div>
            <div className="flex w-full flex-col items-center p-4 py-8 sm:p-8 lg:px-10 lg:py-8">
              <div className="w-full max-w-[540px] rounded-[12px] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h3 className="font-['Inter'] text-[24px] font-medium leading-tight tracking-[-0.5px] text-[#0753D8] sm:text-[26px] lg:text-[30px]">
                  More Services to Offer
                </h3>
                <p className="mt-4 font-['Inter'] text-[15px] font-normal leading-[1.6] text-[#707070] sm:text-[17px] lg:text-[18px]">
                  {description || (
                    <>
                      Offer a complete suite of{' '}
                      <span className="font-semibold text-[#111111]">
                        banking, payments, travel, recharge,
                      </span>{' '}
                      and everyday digital services through one unified platform.
                      Simplify access, streamline transactions, and deliver
                      seamless experiences by bringing multiple essential
                      services together under a single, secure, and scalable
                      ecosystem.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          CARD 2 - RELIABLE SERVICES
      ========================================== */}
      {/* 
        FIX: Changed `sticky top-...` to `relative lg:sticky lg:top-...`. 
        This disables the scroll animation on mobile.
      */}
      <section
        id="reliable-services"
        className="relative z-20 h-fit w-full self-start py-4 lg:sticky lg:top-[10vh] lg:py-8 lg:mb-[10vh]"
      >
        <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[16px] bg-[#790000] shadow-2xl">
            
            <div className="relative hidden aspect-[1250/430] w-full lg:block">
              <img
                src="/images/reliable-services-visual.png"
                alt="Reliable Services"
                className="absolute inset-0 h-full w-full object-cover object-right-top"
              />
              <div className="absolute left-[6.3%] top-1/2 flex w-[44.6%] -translate-y-1/2 flex-col justify-center rounded-[12px] bg-white px-6 pb-10 pt-6 shadow-xl xl:px-8 xl:pb-12 xl:pt-7">
                <h3 className="font-['Inter'] text-[24px] font-medium leading-tight tracking-[-0.5px] text-[#900000] xl:text-[28px]">
                  Reliable Services
                </h3>
                <p className="mt-3 font-['Inter'] text-[15px] font-normal leading-[1.5] text-[#707070] xl:text-[17px]">
                  Keep your services running seamlessly, ensuring
                  uninterrupted access and reliable experiences so your
                  customers can get the services they need, whenever
                  they need them.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col lg:hidden">
              <div className="w-full">
                <img
                  src="/images/reliable-services-visual.png"
                  alt="Reliable Services"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="relative z-10 w-full bg-[#790000] p-4 pt-6 sm:p-6 sm:pt-8">
                <div className="mx-auto w-full rounded-[12px] bg-white p-5 shadow-lg sm:p-7">
                  <h3 className="font-['Inter'] text-[22px] font-medium leading-tight text-[#900000] sm:text-[24px]">
                    Reliable Services
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[14px] leading-[1.5] text-[#707070] sm:text-[16px]">
                    Keep your services running seamlessly, ensuring
                    uninterrupted access and reliable experiences so your
                    customers can get the services they need, whenever
                    they need them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CARD 3 - 100 MILLION+ TRANSACTIONS
      ========================================== */}
      <section
        id="transactions"
        className="relative z-30 h-fit w-full self-start py-4 lg:sticky lg:top-[12vh] lg:py-8 lg:mb-[10vh]"
      >
        <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[16px] bg-[#0047FF] shadow-2xl">
            
            <div className="relative hidden aspect-[1250/430] w-full lg:block">
              <img
                src="/images/transactions-visual.png"
                alt="100 Million+ Transactions"
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
              <div className="absolute right-[6.3%] top-1/2 flex w-[44.6%] -translate-y-1/2 flex-col justify-center rounded-[12px] bg-white px-8 pb-12 pt-8 shadow-xl xl:px-10 xl:pb-16 xl:pt-10">
                <h3 className="font-['Inter'] text-[26px] font-medium leading-tight tracking-[-0.5px] text-[#0753D8] xl:text-[32px]">
                  100 Million+ Transactions
                </h3>
                <p className="mt-4 font-['Inter'] text-[16px] font-normal leading-[1.5] text-[#707070] xl:text-[18px]">
                  Handle everyday financial transactions smoothly
                  and serve your customers with assurance.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col lg:hidden">
              <div className="w-full">
                <img
                  src="/images/transactions-visual.png"
                  alt="100 Million+ Transactions"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="relative z-10 w-full bg-[#0047FF] p-4 pt-6 sm:p-6 sm:pt-8">
                <div className="mx-auto w-full rounded-[12px] bg-white p-6 shadow-lg sm:p-8">
                  <h3 className="font-['Inter'] text-[22px] font-medium leading-tight text-[#0753D8] sm:text-[26px]">
                    100 Million+ Transactions
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[14px] leading-[1.5] text-[#707070] sm:text-[16px]">
                    Handle everyday financial transactions smoothly
                    and serve your customers with assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CARD 4 - 5 THOUSAND+ NETWORK
      ========================================== */}
      <section
        id="network"
        className="relative z-40 h-fit w-full self-start py-4 lg:sticky lg:top-[14vh] lg:py-8"
      >
        <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto w-full max-w-[1250px] overflow-hidden rounded-[16px] bg-[#4C0B8B] shadow-2xl">
            
            <div className="relative hidden aspect-[1250/430] w-full lg:block">
              <img
                src="/images/network-visual.png"
                alt="5 Thousand + Network"
                className="absolute inset-0 h-full w-full object-cover object-right-top"
              />
              
              <div className="absolute left-[6.3%] top-1/2 flex w-[44.6%] -translate-y-1/2 flex-col justify-center rounded-[12px] bg-white px-8 pb-12 pt-8 shadow-xl xl:px-10 xl:pb-14 xl:pt-10">
                <h3 className="font-['Inter'] text-[26px] font-medium leading-tight tracking-[-0.5px] text-[#6B21A8] xl:text-[32px]">
                  5 Thousand + Network
                </h3>
                <p className="mt-4 font-['Inter'] text-[16px] font-normal leading-[1.5] text-[#707070] xl:text-[18px]">
                  Join a growing network of businesses leveraging
                  digital services to serve customers more efficiently,
                  expand their service offerings, and unlock new
                  revenue opportunities.
                </p>
              </div>

              <div className="absolute right-6 top-6 flex items-center gap-3 rounded-[12px] bg-white px-4 py-3 shadow-lg xl:right-8 xl:top-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3E8FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6B21A8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="font-['Inter'] text-[11px] leading-[1.2] text-[#111111] xl:text-[12px]">
                  <span className="font-semibold">Join 10,000+</span> <br />
                  Businesses <br />
                  growing together
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col lg:hidden">
              <div className="w-full">
                <img
                  src="/images/network-visual.png"
                  alt="5 Thousand + Network"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="relative z-10 w-full bg-[#4C0B8B] p-4 pt-6 sm:p-6 sm:pt-8">
                <div className="mx-auto w-full rounded-[12px] bg-white p-6 shadow-lg sm:p-8">
                  <h3 className="font-['Inter'] text-[22px] font-medium leading-tight text-[#6B21A8] sm:text-[26px]">
                    5 Thousand + Network
                  </h3>
                  <p className="mt-3 font-['Inter'] text-[14px] leading-[1.5] text-[#707070] sm:text-[16px]">
                    Join a growing network of businesses leveraging
                    digital services to serve customers more efficiently,
                    expand their service offerings, and unlock new
                    revenue opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SCROLL SPACE */}
      <div className="w-full bg-white"></div>

    </div>
  )
}

export default ServicesIntroSection