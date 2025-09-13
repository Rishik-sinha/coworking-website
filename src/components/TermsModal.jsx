import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-2xl font-bold">Terms & Conditions</h2>
              <p className="text-sm text-gray-500">Last updated: September 13, 2025</p>
            </div>
            
            {/* CHANGE: Added 'min-h-0'. This is the key fix for enabling scroll in a flex container. */}
            <div className="p-6 overflow-y-auto space-y-4 flex-grow min-h-0">
              <h3 className="font-bold text-lg">1. Introduction</h3>
              <p className="text-gray-600">
                Welcome to Lazy. These Terms and Conditions govern your use of our co-working spaces, services, and website. By booking a space or using our services, you agree to be bound by these terms.
              </p>

              <h3 className="font-bold text-lg">2. Use of Services</h3>
              <p className="text-gray-600">
                You agree to use our facilities and services for professional purposes only and in a manner that is respectful to other members. Any illegal activities, harassment, or disruptive behavior will result in immediate termination of your membership without a refund.
              </p>

              <h3 className="font-bold text-lg">3. Membership and Payment</h3>
              <p className="text-gray-600">
                Membership fees are billed on a recurring monthly basis as per the selected plan. All payments are non-refundable. We reserve the right to change membership fees with 30 days prior notice.
              </p>
              
              <h3 className="font-bold text-lg">4. Limitation of Liability</h3>
              <p className="text-gray-600">
                Lazy Developer is not responsible for any lost, stolen, or damaged personal property. We provide a secure environment, but you are responsible for your own belongings. Our liability is limited to the extent permitted by law.
              </p>

               <h3 className="font-bold text-lg">5. Confidentiality</h3>
              <p className="text-gray-600">
                You acknowledge that you may be exposed to confidential information of other members. You agree to respect the privacy and confidentiality of others and not to disclose or use such information without permission.
              </p>
               <h3 className="font-bold text-lg">6. Governing Law</h3>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            <div className="p-6 border-t border-gray-200 text-right flex-shrink-0">
              <button 
                onClick={onClose}
                className="bg-black text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;