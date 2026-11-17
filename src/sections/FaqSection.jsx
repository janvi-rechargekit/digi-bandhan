import { useState } from "react";

const FaqSection = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-8 lg:pb-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container to align with other sections */}
        <div className="mx-auto w-full max-w-[1250px] flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          
          {/* Left Side: Heading */}
          <div className="w-full lg:w-[35%]">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] tracking-tight sm:text-[40px] lg:text-[48px]">
              <span className="text-[#111111]">Frequently </span>
              <span className="text-[#5C4DFF]">Asked</span>
              <br />
              <span className="text-[#5C4DFF]">Questions</span>
            </h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="flex w-full flex-col gap-3 lg:w-[60%]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[8px] border ${
                    isOpen ? "border-[#5C4DFF]/30 bg-[#F8F9FA]" : "border-[#E5E7EB] bg-white"
                  } transition-colors duration-300`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-['Inter'] text-[15px] font-medium text-[#111111] sm:text-[16px]">
                      {faq.question}
                    </span>
                    
                    {/* Triangle Icon */}
                    <svg
                      className={`h-3 w-3 shrink-0 text-[#8E9BAE] transition-transform duration-300 ${
                        isOpen ? "-rotate-180" : ""
                      }`}
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10L0 0H12L6 10Z" fill="currentColor" />
                    </svg>
                  </button>

                  {/* Answer Dropdown */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 font-['Inter'] text-[14px] leading-[1.6] text-[#555555] sm:px-6 sm:pb-6 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;