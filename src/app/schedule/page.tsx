'use client'
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ScheduleForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: '',
  });

  // Handle form input changes
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can handle form submission logic here, e.g., send the data to an API
    alert(`Thank you, ${formData.name}. Your appointment for ${formData.service} on ${formData.date} has been scheduled!`);
  };

  return (
    <>
        <Header/>
        {/* {JSON.stringify(formData)} */}
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Schedule an Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                    </label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Phone Number"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Email"
                    />
                </div>

                {/* Date */}
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                    </label>
                    <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Service */}
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service
                    </label>
                    <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    <option value="">Select a service</option>
                    <option value="Cejas">Cejas</option>
                    <option value="Pestañas">Pestañas</option>
                    <option value="Laminado de cejas">Laminado de cejas</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Schedule Appointment
                    </button>
                </div>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default ScheduleForm;
