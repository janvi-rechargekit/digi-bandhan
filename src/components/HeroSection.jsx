import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [previousWordIndex, setPreviousWordIndex] = useState(null)
  const [animationPhase, setAnimationPhase] = useState('settled')

  const ROTATING_WORDS = [
    <span key="retailer">
      <span className="text-[#1A1A9C]">Ret</span>
      <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">ailer</span>
    </span>,
    <span key="distributor">
      <span className="text-[#1A1A9C]">Distrib</span>
      <span className="bg-gradient-to-r from-[#A41B55] to-[#DA0E4C] bg-clip-text text-transparent">utor</span>
    </span>,
    <span key="mega">
      <span className="text-[#1A1A9C]">Mega </span>
      <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">Distributor</span>
    </span>
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousWordIndex(currentWordIndex)
      setCurrentWordIndex((currentWordIndex + 1) % ROTATING_WORDS.length)
      setAnimationPhase('prepare')

      const animationTimeout = setTimeout(() => {
        setAnimationPhase('animate')
      }, 40)

      const cleanupTimeout = setTimeout(() => {
        setAnimationPhase('settled')
        setPreviousWordIndex(null)
      }, 500)

      timeouts.push(animationTimeout, cleanupTimeout)
    }, 2200)

    const timeouts = []

    return () => {
      clearInterval(interval)
      timeouts.forEach(clearTimeout)
    }
  }, [currentWordIndex])

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white lg:h-[calc(100vh-146px)] lg:min-h-[560px] lg:max-h-[817px]"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-auto items-end justify-end select-none lg:flex">
        <img
          src="/images/digibandhan-hero.png"
          alt="DigiBandhan retailer showing a successful digital payment"
          className="h-full w-auto object-contain object-right-bottom"
        />
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-[1537px] flex-col justify-center px-4 py-8 sm:px-6 md:px-8 lg:py-0 lg:pl-[80px] xl:pl-[120px] 2xl:pl-[140px] lg:pr-8">

        <div className="relative z-10 flex w-full flex-col items-start pt-4 sm:pt-6 lg:w-[52%] xl:w-[48%] lg:pt-0">

          <h1 className="w-full font-['Inter'] text-[20px] min-[360px]:text-[21px] min-[390px]:text-[23px] min-[430px]:text-[25px] sm:text-[38px] md:text-[46px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] font-medium leading-[1.25] lg:leading-[1.16] tracking-tight text-[#0047FF] sm:tracking-[-1px] lg:tracking-[-1.5px] 2xl:tracking-[-2px]">

            <span className="block">Bharose ka atoot</span>

            <span className="block whitespace-nowrap">
              Bandhan, Har{' '}

              <span className="inline-grid align-baseline overflow-visible">
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
                  Mega Distributor
                </span>

                {previousWordIndex !== null && (
                  <span
                    aria-hidden="true"
                    className={`col-start-1 row-start-1 whitespace-nowrap transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      animationPhase === 'prepare'
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-8 opacity-0'
                    }`}
                  >
                    {ROTATING_WORDS[previousWordIndex]}
                  </span>
                )}

                <span
                  aria-live="polite"
                  className={`col-start-1 row-start-1 whitespace-nowrap transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    animationPhase === 'prepare'
                      ? 'translate-x-8 opacity-0'
                      : 'translate-x-0 opacity-100'
                  }`}
                >
                  {ROTATING_WORDS[currentWordIndex]}
                </span>
              </span>
            </span>

            <span className="block">ke liye Digibandhan</span>
          </h1>

          <p className="mt-4 lg:mt-5 w-full max-w-[480px] xl:max-w-[520px] font-['Inter'] text-[15px] sm:text-[16px] lg:text-[16px] xl:text-[18px] font-normal leading-[1.48] text-[#111111] tracking-[-0.3px] lg:tracking-[-0.4px]">
            Become part of a growing network of 1Lakhs+ shop owners across
            India who already trust Digibandhan to serve their customers. Offer
            banking, payments, recharge, and travel services from one platform
            while earning on every transaction.
          </p>

          <div className="mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-0">
            <a
              href="#contact"
              className="inline-flex w-[180px] sm:w-[200px] lg:w-[230px] xl:w-[260px] items-center justify-center rounded-[12px] lg:rounded-[14px] bg-[#E42440] py-[10px] sm:py-[12px] lg:py-[14px] xl:py-[16px] font-['Inter'] text-[15px] sm:text-[17px] lg:text-[18px] xl:text-[20px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-[#EF4444] hover:via-[#8B5CF6] hover:to-[#3730A3] hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

        </div>

        <div className="mt-4 sm:mt-6 flex w-full items-center justify-center lg:hidden">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px]">
            <img
              src="/images/digibandhan-hero-mobile.png"
              alt="DigiBandhan retailer showing digital payment services"
              className="mx-auto h-auto max-h-[380px] w-full object-contain"
              onError={(e) => {
                e.currentTarget.src = '/images/digibandhan-hero.png'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection