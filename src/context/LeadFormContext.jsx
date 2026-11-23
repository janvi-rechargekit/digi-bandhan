import { createContext, useCallback, useContext, useState } from 'react';
import LeadFormModal from '../components/LeadFormModal';

const LeadFormContext = createContext(null);

// Wrap the app once. Any button can then open the same popup form.
export const LeadFormProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('');

  const openLeadForm = useCallback((src = '') => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const closeLeadForm = useCallback(() => setIsOpen(false), []);

  return (
    <LeadFormContext.Provider value={{ openLeadForm, closeLeadForm }}>
      {children}
      {isOpen && <LeadFormModal onClose={closeLeadForm} source={source} />}
    </LeadFormContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLeadForm = () => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error('useLeadForm must be used inside <LeadFormProvider>');
  return ctx;
};
