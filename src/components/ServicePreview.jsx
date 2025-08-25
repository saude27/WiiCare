import React from "react";
import { SerVicePreviewContent } from "../Data";

const ServicePreview = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-brandBlueColor mb-12 w-2xl m-auto">
        Exceptional Care for You and Your Loved Ones
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {SerVicePreviewContent.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 bg-brandBlueColor2"
          >
            {/* Icon / Image */}
            <div className="flex justify-center items-center w-16 h-16 mb-4 rounded-full bg-brandBlueColor p-3">
              <img
                src={service.img}
                alt={service.label}
                className="w-14 h-14 object-contain "
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              {service.label}
            </h3>

            {/* Subtitle */}
            <p className="text-white mt-2 text-sm leading-relaxed">
              {service.subLabel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePreview;
