import React from "react";
import SatisfiedPatient from "../components/SatisfiedPatient";
import CardSection from "../components/CardSection";
import AboutPreview from "../components/AboutPreview";

const Home = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-brandBlueColor leading-tight">
            Caring for Your Health, Every Step of the Way.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Your trusted partner in wellness, providing compassionate care,
            advanced treatment, and personalized support for a healthier
            tomorrow.
          </p>
          <button className="px-6 py-3 bg-brandBlueColor text-white rounded-full shadow-md transition">
            Book Appointment
          </button>
          <SatisfiedPatient />
        </div>

        {/* Right Image */}

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/header-doctor.jpg"
            alt="Doctor with patient"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
      <CardSection />
      <AboutPreview />
    </div>
  );
};

export default Home;
