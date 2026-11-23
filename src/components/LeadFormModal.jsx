import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

// Google Apps Script Web App URL. Can be overridden with VITE_GOOGLE_SHEET_URL in .env
const SHEET_URL =
  import.meta.env.VITE_GOOGLE_SHEET_URL ||
  'https://script.google.com/macros/s/AKfycbzTvmAJcUi4pqRtLsM8s4KGFElqNMbBxevLz5oNhZ_hfkhWsCSUzfyGonVMayiGzMoz/exec';

const EMPTY = { name: '', mobile: '', pincode: '', email: '' };

const validate = (v) => {
  const e = {};
  if (!v.name.trim() || v.name.trim().length < 2) e.name = 'Please enter your full name';
  if (!/^[6-9]\d{9}$/.test(v.mobile)) e.mobile = 'Enter a valid 10-digit mobile number';
  if (!/^[1-9]\d{5}$/.test(v.pincode)) e.pincode = 'Enter a valid 6-digit pin code';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address';
  return e;
};

const inputClass = (hasError) =>
  `w-full rounded-[10px] border px-4 py-3 font-['Inter'] text-[15px] text-[#111111] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#1A1A9C] focus:ring-2 focus:ring-[#1A1A9C]/15 ${
    hasError ? 'border-[#E42440]' : 'border-[#D1D5DB]'
  }`;

const LeadFormModal = ({ onClose, source }) => {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const firstInputRef = useRef(null);

  // Lock page scroll and close on Escape while open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    setTimeout(() => firstInputRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const clean = name === 'mobile' || name === 'pincode' ? value.replace(/\D/g, '') : value;
    setValues((v) => ({ ...v, [name]: clean }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!SHEET_URL) {
      console.error('Google Sheet URL is not set');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const body = new URLSearchParams({
        name: values.name.trim(),
        mobile: values.mobile,
        pincode: values.pincode,
        email: values.email.trim(),
        source: source || 'Website',
        page: window.location.pathname,
      });
      // no-cors: Apps Script doesn't send CORS headers; the row is still saved.
      await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', body });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
    >
      <div className="relative w-full max-w-[460px] rounded-[18px] bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-[#6B7280] transition-colors hover:bg-gray-100 hover:text-[#111111]"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 size={56} className="text-green-600" />
            <h2 className="mt-4 font-['Inter'] text-[22px] font-semibold text-[#111111]">Thank you!</h2>
            <p className="mt-2 font-['Inter'] text-[15px] text-[#4B5563]">
              We've received your details. Our team will contact you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-[10px] bg-[#E42440] px-8 py-3 font-['Inter'] text-[16px] font-medium text-white transition-colors hover:bg-[#c91d37]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="lead-form-title" className="font-['Inter'] text-[22px] font-semibold text-[#111111] sm:text-[24px]">
              Get Started with{' '}
              <span className="bg-gradient-to-r from-[#1A1A9C] via-[#A41B55] to-[#EF2042] bg-clip-text text-transparent">
                DigiBandhan
              </span>
            </h2>
            <p className="mt-1.5 font-['Inter'] text-[14px] text-[#6B7280]">
              Share your details and our team will get in touch.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label htmlFor="lf-name" className="mb-1.5 block font-['Inter'] text-[14px] font-medium text-[#374151]">Name</label>
                <input ref={firstInputRef} id="lf-name" name="name" type="text" autoComplete="name"
                  value={values.name} onChange={handleChange} placeholder="Your full name"
                  className={inputClass(errors.name)} />
                {errors.name && <p className="mt-1 text-[13px] text-[#E42440]">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="lf-mobile" className="mb-1.5 block font-['Inter'] text-[14px] font-medium text-[#374151]">Mobile Number</label>
                <input id="lf-mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10}
                  value={values.mobile} onChange={handleChange} placeholder="10-digit mobile number"
                  className={inputClass(errors.mobile)} />
                {errors.mobile && <p className="mt-1 text-[13px] text-[#E42440]">{errors.mobile}</p>}
              </div>

              <div>
                <label htmlFor="lf-pincode" className="mb-1.5 block font-['Inter'] text-[14px] font-medium text-[#374151]">Pin Code</label>
                <input id="lf-pincode" name="pincode" type="text" inputMode="numeric" autoComplete="postal-code" maxLength={6}
                  value={values.pincode} onChange={handleChange} placeholder="6-digit pin code"
                  className={inputClass(errors.pincode)} />
                {errors.pincode && <p className="mt-1 text-[13px] text-[#E42440]">{errors.pincode}</p>}
              </div>

              <div>
                <label htmlFor="lf-email" className="mb-1.5 block font-['Inter'] text-[14px] font-medium text-[#374151]">Business Email</label>
                <input id="lf-email" name="email" type="email" autoComplete="email"
                  value={values.email} onChange={handleChange} placeholder="you@business.com"
                  className={inputClass(errors.email)} />
                {errors.email && <p className="mt-1 text-[13px] text-[#E42440]">{errors.email}</p>}
              </div>

              {status === 'error' && (
                <p className="rounded-[8px] bg-red-50 px-3 py-2 text-[14px] text-[#B91C1C]">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#E42440] py-3.5 font-['Inter'] text-[17px] font-medium text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#EF4444] hover:via-[#8B5CF6] hover:to-[#3730A3] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (<><Loader2 size={18} className="animate-spin" /> Submitting...</>) : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadFormModal;
