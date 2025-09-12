import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable component for social login buttons
const SocialButton = ({ icon, text }) => (
  <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-700 rounded-lg hover:bg-[#2A2A2A] transition-colors">
    {icon}
    <span className="ml-3 font-medium">{text}</span>
  </button>
);

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = isLoginView ? { email, password } : { fullName, email, password };
    console.log(data);
    alert('Form submitted! Check the console.');
    onClose();
  };

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
            // Updated styles for semi-transparent background
            className="bg-[#1C1C1C]/90 backdrop-blur-sm text-white rounded-lg shadow-xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold">{isLoginView ? 'Welcome Back' : 'Create Account'}</h2>
              <p className="text-gray-400 mt-2">{isLoginView ? 'Log in to access your space.' : 'Get started with us today.'}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLoginView && (
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="block w-full px-3 py-3 bg-[#2A2A2A] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"/>
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full px-3 py-3 bg-[#2A2A2A] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full px-3 py-3 bg-[#2A2A2A] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400" required />
              </div>
              <button type="submit" className="w-full bg-lime-400 text-black font-bold py-3 rounded-lg hover:bg-lime-500 transition-colors text-lg">
                {isLoginView ? 'Log In' : 'Sign Up'}
              </button>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-700" />
              <span className="mx-4 text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-700" />
            </div>
            
            <div className="space-y-4">
              <SocialButton icon={<svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.344-11.244-7.916l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.574l6.19 5.238C42.012 35.846 44 30.134 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>} text="Continue with Google" />
              {/* Add Apple and Facebook buttons here if needed */}
            </div>

            <p className="text-center mt-8 text-sm text-gray-400">
              {isLoginView ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLoginView(!isLoginView)} className="font-semibold text-lime-400 hover:underline ml-1">
                {isLoginView ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;

