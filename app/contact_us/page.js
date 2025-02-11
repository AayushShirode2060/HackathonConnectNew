'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaPaperPlane, FaGlobe, FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-8 md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-2 text-sm">Fill up the form and our team will get back to you within 24 hours.</p>
            <ul className="mt-6 space-y-3">
              <li className="flex  items-center gap-3"><FaPhoneAlt className=" bg-pink-500 p-1 text-2xl rounded-2xl" /> <span className="font-semibold">Phone:</span><a href="tel:+123456789">123456789</a></li>
              <li className="flex items-center gap-3"><FaPaperPlane className="bg-pink-500 p-1 text-2xl rounded-2xl" /><span className="font-semibold">Mail:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
              <li className="flex items-center gap-3"><FaGlobe className="bg-pink-500 p-1 text-2xl rounded-2xl" /><span className="font-semibold">Webiste:</span> <a href="https://yoursite.com">yoursite.com</a></li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-pink-500 rounded-xl hover:bg-white hover:text-black"><FaFacebook /></a>
            <a href="#" className="p-3 bg-pink-500 rounded-xl hover:bg-white hover:text-black"><FaTwitter /></a>
            <a href="#" className="p-3 bg-pink-500 rounded-xl hover:bg-white hover:text-black"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="p-8 md:w-2/3 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input type="text" name="firstName" placeholder="First Name" className="p-3 rounded-xl border w-full shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff]" onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" className="p-3 rounded-xl border w-full shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff]" onChange={handleChange} />
            </div>
            <input type="email" name="email" placeholder="Mail" className="p-3 rounded-xl border w-full shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff]" onChange={handleChange} />
            <input type="number" name="phone" placeholder="Phone" className="p-3 rounded-xl border  w-full shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff]" onChange={handleChange} />
            <textarea name="message" placeholder="Write your message" className="p-3 rounded-xl border  w-full h-32 shadow-[inset_8px_8px_8px_#cbced1,inset_-8px_-8px_8px_#ffffff]" onChange={handleChange}></textarea>
            <button type="submit" className="w-full p-3 bg-pink-500 text-white rounded-xl font-bold shadow-md hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
