// src/ContactPage.js
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactPage = () => {
  return (
    <>
        <Header />
        <div className="w-full py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
            {/* Contact Section: Text (left) and Form (right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left Section: Contact Information */}
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Contactanos</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Ponte en contacto para resolver tus inquietudes o agendar una cita.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                <strong>Email: </strong> vmcejasypestanas@gmail.com
                </p>
                <p className="text-lg text-gray-600">
                <strong>Teléfono de contacto: </strong> 3208610876
                </p>
            </div>

            {/* Right Section: Contact Form */}
            <div>
                <form className="bg-white p-8 shadow-lg rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    placeholder="Your name"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    placeholder="Your email"
                    required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                    Message
                    </label>
                    <textarea
                    id="message"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    rows={5}
                    placeholder="Your message"
                    required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-80">
            <iframe
                title="Google Map"
                className="w-full h-full border-0 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0831786604735!2d-122.4194154846819!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858147bd6a26c7%3A0xe74da6cb278ed4a4!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1639521346630!5m2!1sen!2sus"
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
            </div>
        </div>
        </div>
        <Footer/>
    </>    
  );
};

export default ContactPage;
