import { useState } from 'react';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [keepMeLogin, setKeepMeLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { mobileNumber, keepMeLogin });
  };

  return (
    <div className="flex h-[calc(100vh-120px)] min-h-[600px] w-full flex-col bg-white lg:flex-row">
      
      {/* =========================================
          LEFT SIDE: Visual and Text
          ========================================= */}
      <div className="relative hidden w-full overflow-hidden lg:flex lg:w-1/2">
        {/* Background Image */}
        <img
          src="/images/digibandhan-login-visual.png" 
          alt="Shopkeeper at a counter"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        
        {/* Subtle White Overlay at bottom to ensure text is readable without washing out the image */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent" />

        {/* Text Content over the image */}
        <div className="relative z-10 mt-auto p-8 xl:p-12">
          <h1 className="font-['Inter'] text-[32px] font-medium leading-tight text-[#E42440] xl:text-[38px]">
            Become a DigiBandhan Partner
          </h1>
          <p className="mt-2 font-['Inter'] text-[18px] text-[#333333] xl:text-[20px]">
            Grow your network. Offer more services. Earn more.
          </p>
        </div>
      </div>

      {/* =========================================
          RIGHT SIDE: Login Form
          ========================================= */}
      <div className="flex w-full flex-col justify-center px-6 py-6 sm:px-12 lg:w-1/2 lg:px-16 xl:px-24">
        
        <div className="mx-auto w-full max-w-[400px]">
          
          {/* Logo Area */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <img 
              src="/images/digibandhan-logo.png" 
              alt="DigiBandhan Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Form Headings */}
          <h2 className="font-['Inter'] text-[24px] font-semibold text-[#111111]">
            Sign Up
          </h2>
          <p className="mt-1 font-['Inter'] text-[14px] text-[#666666]">
            To Get access to your DigiBandhan Partner account.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            
            {/* Mobile Number Input */}
            <div className="relative">
              <label 
                htmlFor="mobile" 
                className="absolute -top-2.5 left-3 bg-white px-1 text-[12px] text-[#666666]"
              >
                Enter Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="+91 8292240923"
                className="h-[46px] w-full rounded-[8px] border border-[#D1D5DB] px-4 font-['Inter'] text-[15px] text-[#111111] outline-none transition-colors focus:border-[#E42440] focus:ring-1 focus:ring-[#E42440]"
              />
            </div>

            {/* Keep Me Login Checkbox */}
            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="keep-login"
                checked={keepMeLogin}
                onChange={(e) => setKeepMeLogin(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#E42440] focus:ring-[#E42440]"
              />
              <label htmlFor="keep-login" className="font-['Inter'] text-[14px] text-[#333333]">
                Keep Me login
              </label>
            </div>

            {/* Get OTP Button */}
            <button
              type="submit"
              className="mt-5 h-[46px] w-full rounded-[8px] bg-[#E42440] font-['Inter'] text-[16px] font-medium text-white transition-colors duration-300 hover:bg-[#C51D35]"
            >
              Get OTP
            </button>
          </form>

          {/* Divider "Or" */}
          <div className="relative mt-5 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]"></div>
            </div>
            <div className="relative bg-white px-4 font-['Inter'] text-[14px] text-[#888888]">
              Or
            </div>
          </div>

          {/* Continue with Gmail Button */}
          <button
            type="button"
            className="mt-5 flex h-[46px] w-full items-center justify-center gap-3 rounded-[8px] border border-[#D1D5DB] bg-white font-['Inter'] text-[15px] font-medium text-[#333333] transition-colors hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Gmail
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;