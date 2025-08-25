import React from "react";
import { CardContent } from "../Data";

const CardSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {CardContent.map((content, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-brandBlueColor2 rounded-2xl shadow-md p-10 hover:shadow-lg transition"
          >
            {/* Image */}
            
            <div className="rounded-full bg-brandBlueColor">
                <img
                    src={content.img}
                    alt={content.label}
                    className="w-16 h-10 mt-2 object-contain mb-4"
               />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-white mt-3">
              {content.label}
            </h2>

            {/* Subtitle */}
            <span className="text-white mt-2">{content.subLabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
