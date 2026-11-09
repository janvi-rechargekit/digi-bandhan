import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '#product', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blogs', href: '#blogs' },
  ];

  const dropdownLinkClass = "font-['Inter'] text-[15px] leading-[1.4] text-[#333333] transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1A1A9C] hover:via-[#A41B55] hover:to-[#EF2042]";

  return (
    <nav className="relative w-full border-b border-[#E5E5E5] bg-white z-50">
      
      {/* Main Navbar Container */}
      <div className="mx-auto flex h-[75px] md:h-[90px] w-full max-w-[1526px] items-center justify-between px-4 sm:px-6 md:grid md:grid-cols-[40px_auto_1fr_auto] md:gap-8 lg:grid-cols-[80px_auto_1fr_auto] lg:px-8">

        {/* Empty div to push the logo to the right on desktop */}
        <div className="hidden md:block"></div>

        {/* Official DigiBandhan Logo */}
        <Link to="/" className="flex w-fit items-center justify-self-start">
          <img
            src="/images/digibandhan-logo.png"
            alt="DigiBandhan - Bharose Ka Atut Bandhan"
            className="h-auto w-[165px] sm:w-[195px] md:w-[260px] object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center justify-self-end gap-6 md:flex lg:gap-[40px] xl:gap-[50px]">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative py-8"
              onMouseEnter={() => link.hasDropdown && setIsProductHovered(true)}
              onMouseLeave={() => link.hasDropdown && setIsProductHovered(false)}
            >
              {link.hasDropdown ? (
                <span className="cursor-pointer whitespace-nowrap font-['Inter'] text-[18px] font-normal text-[#333333] transition-colors duration-300 hover:text-[#EF2042] lg:text-[20px]">
                  {link.name}
                </span>
              ) : (
                <Link
                  to={link.href}
                  className="whitespace-nowrap font-['Inter'] text-[18px] font-normal text-[#333333] transition-colors duration-300 hover:text-[#EF2042] lg:text-[20px]"
                >
                  {link.name}
                </Link>
              )}

              {/* --- DESKTOP MEGA MENU --- */}
              {link.hasDropdown && isProductHovered && (
                <div 
                  className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[850px] rounded-[12px] border border-[#E5E5E5] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50 mt-1"
                  onMouseEnter={() => setIsProductHovered(true)}
                  onMouseLeave={() => setIsProductHovered(false)}
                >
                  <div className="w-full bg-white p-10 grid grid-cols-3 gap-x-12 gap-y-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                      <Link to="/aadhaar-enabled-payment-system" className={dropdownLinkClass}>
                        Aadhaar Enabled Payment System
                      </Link>
                      <a href="#" className={dropdownLinkClass}>Micro ATM</a>
                      <a href="#" className={dropdownLinkClass}>DMT (Domestic Money Transfer)</a>
                      <a href="#" className={dropdownLinkClass}>UPI Cash Withdrawal</a>
                      <a href="#" className={dropdownLinkClass}>Recharge</a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                      <a href="#" className={dropdownLinkClass}>Utility Bill Payments</a>
                      <a href="#" className={dropdownLinkClass}>Credit Card Bill Payment</a>
                      <a href="#" className={dropdownLinkClass}>LIC Premium Payments</a>
                      <a href="#" className={dropdownLinkClass}>CMS (Cash Management Services)</a>
                      <a href="#" className={dropdownLinkClass}>PAN Card Creation</a>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                      <a href="#" className={dropdownLinkClass}>UPI QR</a>
                      <a href="#" className={dropdownLinkClass}>Train Ticket Booking</a>
                      <a href="#" className={dropdownLinkClass}>Bus Ticket Booking</a>
                      <a href="#" className={dropdownLinkClass}>Flight Booking</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden justify-end md:flex md:pr-4 lg:pr-12">
          <a
            href="#login"
            className="flex h-[38px] sm:h-[42px] w-[110px] sm:w-[130px] items-center justify-center rounded-[6px] bg-[#EF2042] font-['Inter'] text-[15px] sm:text-[16px] font-normal text-white transition-colors duration-300 hover:bg-[#D91637] lg:w-[150px] lg:text-[18px]"
          >
            Login
          </a>
        </div>

        {/* --- MOBILE MENU BUTTON (Hamburger) --- */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#333333] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#333333] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-[#333333] transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#E5E5E5] shadow-lg h-[calc(100vh-75px)] overflow-y-auto pb-20">
          <div className="flex flex-col px-4 pt-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col border-b border-gray-100 last:border-0">
                {link.hasDropdown ? (
                  <>
                    <button 
                      className="flex justify-between items-center py-4 font-['Inter'] text-[18px] text-[#333333]"
                      onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                    >
                      {link.name}
                      <svg 
                        className={`w-4 h-4 transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {/* Mobile Product Submenu */}
                    {isMobileProductOpen && (
                      <div className="flex flex-col pl-4 pb-4 gap-4 bg-[#F8F9FA] rounded-md p-4 mb-2">
                        <Link to="/aadhaar-enabled-payment-system" className={dropdownLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                          Aadhaar Enabled Payment System
                        </Link>
                        <a href="#" className={dropdownLinkClass}>Micro ATM</a>
                        <a href="#" className={dropdownLinkClass}>DMT (Domestic Money Transfer)</a>
                        <a href="#" className={dropdownLinkClass}>UPI Cash Withdrawal</a>
                        <a href="#" className={dropdownLinkClass}>Recharge</a>
                        <a href="#" className={dropdownLinkClass}>Utility Bill Payments</a>
                        <a href="#" className={dropdownLinkClass}>Credit Card Bill Payment</a>
                        <a href="#" className={dropdownLinkClass}>LIC Premium Payments</a>
                        <a href="#" className={dropdownLinkClass}>CMS (Cash Management Services)</a>
                        <a href="#" className={dropdownLinkClass}>PAN Card Creation</a>
                        <a href="#" className={dropdownLinkClass}>UPI QR</a>
                        <a href="#" className={dropdownLinkClass}>Train Ticket Booking</a>
                        <a href="#" className={dropdownLinkClass}>Bus Ticket Booking</a>
                        <a href="#" className={dropdownLinkClass}>Flight Booking</a>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="py-4 font-['Inter'] text-[18px] text-[#333333]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Login Button */}
            <div className="mt-6 mb-8">
              <a
                href="#login"
                className="flex h-[48px] w-full items-center justify-center rounded-[6px] bg-[#EF2042] font-['Inter'] text-[16px] font-normal text-white transition-colors duration-300 hover:bg-[#D91637]"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;