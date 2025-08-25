import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Your appointment request has been submitted!");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-brandBlueColor">
          Book an Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brandBlueColor"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brandBlueColor"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brandBlueColor"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Preferred Date</label>
            <DatePicker
              selected={formData.date}
              onChange={(date) => setFormData({ ...formData, date })}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Select a date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brandBlueColor"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brandBlueColor"
            >
              <option value="">Choose a service</option>
              <option value="Home Care">Home Care</option>
              <option value="Medical Consultation">Medical Consultation</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-brandBlueColor"
              placeholder="Any special request?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-brandBlueColor text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Make Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
