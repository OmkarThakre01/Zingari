import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[#5D4037] mb-8 text-center">Contact Us</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5D4037] mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">Address</h3>
              <p className="text-gray-700">
                123 Spice Street<br />
                Mumbai, Maharashtra<br />
                India
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">Phone</h3>
              <p className="text-gray-700">+91 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">Email</h3>
              <p className="text-gray-700">hello@zingari.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#5D4037] mb-2">Business Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5D4037] mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF360C]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF360C]"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF360C]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF360C]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#BF360C] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#a32e09] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
