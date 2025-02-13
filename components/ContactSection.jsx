"use client";

import { useState } from "react";
import Image from "next/image";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-me" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <p className="text-gray-900 dark:text-white mb-4 text-2xl font-semibold glow">
              Contact Me!
            </p>

            <style jsx>{`
              .glow {
                text-shadow: 0 0 10px rgba(0, 255, 255, 0.8),
                  0 0 20px rgba(0, 255, 255, 0.6),
                  0 0 30px rgba(0, 255, 255, 0.4);
              }
              .dark .glow {
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.7),
                  0 0 10px rgba(255, 255, 255, 0.5),
                  0 0 15px rgba(255, 255, 255, 0.3);
              }
            `}</style>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              "Commitment to Quality and Punctuality"
              <br />
              Contact me to learn more about your project.
            </h1>
            <p className="text-gray-600 mb-12 dark:text-gray-300">
              "I provide high-quality services, ensuring constant communication,
              timely delivery and ongoing support. I would be delighted to learn
              more about your project. Please feel free to contact me."
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="bg-[#a6a4a495] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Effective Communication and Support.
                </h3>
                <ul className="text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Clear Communication:</strong>"I am committed to
                    maintaining clear and transparent communication, ensuring
                    that your needs and expectations are adequately met."
                  </li>
                  <li>
                    <strong>24/7 Support:</strong> I am available to provide
                    assistance and resolve any concerns, ensuring constant and
                    timely attention.
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#a6a4a495] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Commitment to Quality and Punctuality
                </h3>
                <ul className="text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Reliability:</strong> As a freelance professional, I
                    am committed to providing high-quality services and
                    maintaining clear and consistent communication with my
                    clients.
                  </li>
                  <li>
                    <strong>Punctuality:</strong> I value my clients' time and
                    strive to meet established deadlines, ensuring timely and
                    efficient deliveries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 pt-6 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center mb-6">
              <Image src="/logo.svg" alt="logo" width={54} height={64} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your First Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your Last Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="youremail@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Company Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your Subject"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Write Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Write Your Message Here"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 disabled:bg-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center dark:text-green-400">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center dark:text-red-400">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
