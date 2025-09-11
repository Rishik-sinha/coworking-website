import React, { useState } from 'react';
import contactImage from '../assets/contact-form-image.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your PHP backend.
    // For now, we'll just log it to the console.
    console.log('Form submitted:', formData);
    alert('Thank you! Your form has been submitted. Check the console for the data.');
  };

  // Reusable component for input fields to keep the form clean
  const InputField = ({ label, name, type = 'text', placeholder, value, onChange }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        required
      />
    </div>
  );

  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div>
            <img src={contactImage} alt="People collaborating" className="rounded-lg w-full h-full object-cover" />
          </div>

          {/* Right Column: Form */}
          <div>
            <h2 className="text-4xl font-bold mb-2">Got questions? We've got answers.</h2>
            <p className="text-gray-600 mb-8">Get in touch with us for more information on any of the products or services we offer.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField label="Full name*" name="fullName" value={formData.fullName} onChange={handleChange} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Company name*" name="companyName" value={formData.companyName} onChange={handleChange} />
                <InputField label="Work e-mail address*" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Phone number*" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                 <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                    <select id="city" name="city" value={formData.city} onChange={handleChange} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                        <option value="">Select a city</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By clicking the below button, you agree to our <a href="#" className="underline">Terms of Service</a> and confirm that you have read and understood our <a href="#" className="underline">Privacy Policy</a>.
              </p>

              <div>
                <button type="submit" className="w-full md:w-auto px-8 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-black transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;