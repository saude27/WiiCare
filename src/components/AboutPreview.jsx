import React from "react";
import { CheckCircle } from "lucide-react";

const AboutPreview = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/images/doctor-with-child.jpg"
          alt="Doctor with child"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>

      {/* Right Content */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Dedicated to Your Home Care Experience
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        {/* Checkpoints */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-brandBlueColor" />
            <span className="text-gray-800 font-medium">
              Excellent Protection
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-brandBlueColor" />
            <span className="text-gray-800 font-medium">
              High Saving Potential
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-brandBlueColor" />
            <span className="text-gray-800 font-medium">
              Maximum Time Savings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
