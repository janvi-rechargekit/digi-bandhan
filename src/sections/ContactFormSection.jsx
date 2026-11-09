const ContactFormSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1537px] px-4 sm:px-6 lg:px-8">
        
        {/* Inner Container aligned with other sections */}
        <div className="mx-auto w-full max-w-[1250px] flex flex-col gap-16 lg:flex-row lg:justify-between">
          
          {/* =========================================
              LEFT COLUMN: Contact Form
          ========================================= */}
          <div className="w-full lg:w-[45%]">
            <h2 className="font-['Inter'] text-[32px] font-semibold text-[#111111] sm:text-[36px]">
              Talk to Our Team
            </h2>
            <p className="mt-4 font-['Inter'] text-[15px] leading-[1.6] text-[#6B7280] sm:text-[16px]">
              Have questions about registration, services, transactions, commissions, or anything else? Send us a message and our team will get back to you.
            </p>

            <form className="mt-8 flex flex-col gap-5">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1.5 font-['Inter'] text-[13px] font-medium text-[#374151]">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-[44px] rounded-[6px] border border-[#D1D5DB] px-3 font-['Inter'] text-[14px] text-[#111111] placeholder-[#9CA3AF] outline-none transition-colors focus:border-[#4D3ECA]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1.5 font-['Inter'] text-[13px] font-medium text-[#374151]">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-[44px] rounded-[6px] border border-[#D1D5DB] px-3 font-['Inter'] text-[14px] text-[#111111] placeholder-[#9CA3AF] outline-none transition-colors focus:border-[#4D3ECA]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-1.5 font-['Inter'] text-[13px] font-medium text-[#374151]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="h-[44px] rounded-[6px] border border-[#D1D5DB] px-3 font-['Inter'] text-[14px] text-[#111111] placeholder-[#9CA3AF] outline-none transition-colors focus:border-[#4D3ECA]"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="mb-1.5 font-['Inter'] text-[13px] font-medium text-[#374151]">
                  Phone number
                </label>
                <div className="flex h-[44px] overflow-hidden rounded-[6px] border border-[#D1D5DB] transition-colors focus-within:border-[#4D3ECA]">
                  <div className="flex items-center gap-1 border-r border-[#D1D5DB] bg-[#F9FAFB] px-3 text-[14px] text-[#111111]">
                    US <span className="text-[10px]">▼</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 font-['Inter'] text-[14px] text-[#111111] placeholder-[#9CA3AF] outline-none"
                  />
                </div>
              </div>

              {/* I am a */}
              <div className="flex flex-col">
                <label className="mb-1.5 font-['Inter'] text-[13px] font-medium text-[#374151]">
                  I am a
                </label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="h-[44px] w-full appearance-none rounded-[6px] border border-[#D1D5DB] px-3 font-['Inter'] text-[14px] text-[#111111] outline-none transition-colors focus:border-[#4D3ECA]"
                  >
                    {/* FIX: Added a default placeholder option that is disabled and selected */}
                    <option value="" disabled hidden>Select an option</option>
                    
                    <option value="retailer">Retailer</option>
                    <option value="distributor">Distributor</option>
                    <option value="mega">Mega Distributor</option>
                    <option value="individual">Individual</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] text-[#6B7280]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="mb-1.5 font-['Inter'] text-[13px] font-medium text-[#374151]">
                  Message
                </label>
                <textarea
                  placeholder="Leave us a message..."
                  rows="4"
                  className="rounded-[6px] border border-[#D1D5DB] p-3 font-['Inter'] text-[14px] text-[#111111] placeholder-[#9CA3AF] outline-none transition-colors focus:border-[#4D3ECA] resize-none"
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="h-4 w-4 rounded border-[#D1D5DB] text-[#4D3ECA] focus:ring-[#4D3ECA]"
                />
                <label htmlFor="privacy-policy" className="font-['Inter'] text-[13px] text-[#6B7280]">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 h-[48px] w-full rounded-[6px] bg-gradient-to-r from-[#261078] to-[#EF2042] font-['Inter'] text-[15px] font-medium text-white transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* =========================================
              RIGHT COLUMN: Contact Details
          ========================================= */}
          <div className="w-full lg:w-[45%] lg:pt-2">
            <h2 className="font-['Inter'] text-[32px] font-semibold leading-[1.2] text-[#111111] sm:text-[36px]">
              Connect With Us and Get <br className="hidden lg:block" /> Started
            </h2>
            <p className="mt-4 font-['Inter'] text-[15px] leading-[1.6] text-[#6B7280] sm:text-[16px]">
              From getting started to managing your digital services, our team is here to make your journey easier.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              
              {/* Email Block */}
              <div className="flex flex-col">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#FDE6E6] bg-[#FFF8F8]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mt-4 font-['Inter'] text-[18px] font-semibold text-[#111111]">Email</h3>
                <p className="mt-2 font-['Inter'] text-[14px] leading-[1.5] text-[#6B7280]">
                  Our friendly team is here to help.
                </p>
                <a href="mailto:hi@agency.com" className="mt-1 font-['Inter'] text-[15px] font-medium text-[#5C4DFF] hover:underline">
                  hi@agency.com
                </a>
              </div>

              {/* Phone Block */}
              <div className="flex flex-col">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#F0E6FF] bg-[#F8F4FF]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0025 20.3981 21.9165 20.8717 21.7472 21.3131C21.578 21.7544 21.3293 22.1541 21.0169 22.4879C20.7045 22.8216 20.3347 23.0825 19.9297 23.2552C19.5247 23.428 19.0926 23.5088 18.6593 23.4928C15.5485 23.2734 12.5707 22.1034 10.0676 20.1181C7.56449 18.1328 5.63595 15.4084 4.46114 12.2401C4.22255 11.6471 4.13275 11.0023 4.19949 10.3645C4.26623 9.72678 4.48716 9.11591 4.84297 8.58625C5.19879 8.05658 5.67842 7.62462 6.24064 7.32872C6.80287 7.03282 7.43003 6.88242 8.06519 6.89001H11.0652C12.1973 6.89001 12.9687 7.99001 12.6653 9.09001L11.6653 12.59C11.5698 12.9421 11.5917 13.3163 11.7279 13.6551C11.864 13.9939 12.1074 14.2801 12.4229 14.4744C14.3306 15.6637 16.5532 16.2901 18.8229 16.2801C19.3957 16.2774 19.9569 16.1152 20.4427 15.8119C20.9286 15.5085 21.3195 15.0761 21.5729 14.5637L22.2653 13.1562C22.4585 12.7705 22.7792 12.4693 23.1741 12.3013C23.569 12.1333 24.0113 12.1092 24.4229 12.2331C24.8345 12.357 25.1894 12.621 25.423 12.9792C25.6566 13.3374 25.7538 13.7665 25.6979 14.1901" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mt-4 font-['Inter'] text-[18px] font-semibold text-[#111111]">Phone</h3>
                <p className="mt-2 font-['Inter'] text-[14px] leading-[1.5] text-[#6B7280]">
                  Mon-Fri from 8am to 5pm.
                </p>
                <a href="tel:+15550000000" className="mt-1 font-['Inter'] text-[15px] font-medium text-[#5C4DFF] hover:underline">
                  +1 (555) 000-0000
                </a>
              </div>

              {/* Office Block */}
              <div className="flex flex-col sm:col-span-2">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#E6F8EF] bg-[#F4FCF8]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mt-4 font-['Inter'] text-[18px] font-semibold text-[#111111]">Office</h3>
                <p className="mt-2 font-['Inter'] text-[14px] leading-[1.5] text-[#6B7280]">
                  Come say hello at our office HQ.
                </p>
                <div className="mt-1 flex flex-col font-['Inter'] text-[15px] font-medium text-[#5C4DFF]">
                  <a href="#" className="hover:underline">100 Smith Street</a>
                  <a href="#" className="hover:underline">Collingwood VIC 3066 AU</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;