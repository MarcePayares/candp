import React from 'react';
import Image from "next/image";

import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => {
  return (
    <>
        <Header/>
        <div className="bg-gray-50 text-gray-700">

        {/* Header Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
                We are a team of passionate individuals dedicated to making a difference. Our goal is to innovate and provide the best services to help our customers succeed.
            </p>
            </div>
        </section>

        {/* Company Description Section */}
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600">
                Our company was founded with the belief that we could make a real impact. Through years of dedication and hard work, we have grown into a trusted name in the industry. Our commitment to innovation, integrity, and customer satisfaction drives everything we do.
            </p>
            </div>
        </section>

        {/* Mission and Values Section */}
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-600 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600">
                We strive to bring value to our customers by delivering top-notch products and services that exceed expectations. Our mission is to create solutions that empower people and improve their lives.
                </p>
            </div>
            {/* Values */}
            <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-600 mb-4">Our Values</h3>
                <ul className="text-lg text-gray-600 space-y-2">
                <li>Customer-first Approach</li>
                <li>Innovation at the Core</li>
                <li>Integrity in Every Step</li>
                <li>Building Trust through Collaboration</li>
                </ul>
            </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 bg-gray-100">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Team Member 1 */}
                <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                <Image width={100} height={100} src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                <p className="text-indigo-600">CEO & Founder</p>
                <p className="mt-3 text-gray-500">
                    With over 20 years of experience, John leads our team with a passion for excellence.
                </p>
                </div>
                {/* Team Member 2 */}
                <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                <Image width={100} height={100} src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
                <p className="text-indigo-600">Chief Operating Officer</p>
                <p className="mt-3 text-gray-500">
                    Jane ensures our daily operations run smoothly, focusing on strategy and growth.
                </p>
                </div>
                {/* Team Member 3 */}
                <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                <Image width={100} height={100} src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Michael Brown</h3>
                <p className="text-indigo-600">Chief Technology Officer</p>
                <p className="mt-3 text-gray-500">
                    Michael leads our technology and product development teams with a focus on innovation.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Want to Join Us?</h2>
            <p className="text-lg mb-6">We&apos;re always looking for passionate people to join our team and help make an impact.</p>
            <a href="/contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
                Contact Us
            </a>
            </div>
        </section>

        </div>
        <Footer/>
    </>    
  );
};

export default AboutPage;
