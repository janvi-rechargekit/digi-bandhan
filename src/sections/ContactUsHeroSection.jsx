const ContactUsHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Desktop Right Visual Image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[50%] items-center justify-end overflow-hidden lg:flex xl:w-[52%] 2xl:w-[54%]">
        <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white via-white/80 to-transparent xl:w-44" />
        
        <img
          src="/images/contact-hero-visual.webp"
          alt="DigiBandhan Customer Support Team"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto flex w-full max-w-[1526px] flex-col justify-center px-4 py-10 sm:px-6 md:px-8 lg:h-[580px] lg:py-0 lg:pl-[80px] xl:h-[630px] xl:pl-[112px]">
        
        {/* LEFT CONTENT */}
        {/* 
          FIX: Removed `translate-x-6` from the base class and added `lg:translate-x-6`. 
          This ensures the text doesn't push off the screen on mobile.
        */}
        <div className="relative z-10 -mt-10 flex w-full flex-col justify-center lg:w-[50%] lg:translate-x-6 xl:w-[48%]">
          
          {/* Heading */}
          <h1 className="font-['Inter'] font-medium text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.16] tracking-[-1.5px] lg:tracking-[-2px] xl:tracking-[-2.4px]">
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgb(24, 24, 146) 0%, rgb(57, 54, 150) 38%, rgb(190, 3, 0) 70%, rgb(250, 50, 97) 100%)',
              }}
            >
              We’re Here When You
            </span>
            <span className="block text-[#181892]">Need Us</span>
          </h1>

          {/* Description Paragraph */}
          {/* 
            FIX: Added `<br className="hidden lg:block" />` to force the exact 4-line breaks on desktop, 
            while letting it wrap naturally on mobile. 
          */}
          <p className="mt-7 max-w-[620px] font-['Inter'] font-normal text-[15px] leading-[1.46] tracking-[-0.4px] text-[#111111] sm:text-[17px] lg:mt-8 lg:text-[18px] lg:tracking-[-0.6px] xl:text-[20px]">
            Our team is here to help you with the information <br className="hidden lg:block" />
            and support you need. <br className="hidden lg:block" />
            Whether you’re a retailer, distributor, or individual, <br className="hidden lg:block" />
            reach out to us, and we’ll be happy to assist you.
          </p>

        </div>

        {/* MOBILE VISUAL: Displayed below text on small screens */}
        <div className="relative mt-8 w-full overflow-hidden rounded-xl lg:hidden">
          <img
            src="/images/contact-hero-visual.webp"
            alt="DigiBandhan Customer Support Team"
            className="h-auto w-full max-h-[420px] object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUsHeroSection;