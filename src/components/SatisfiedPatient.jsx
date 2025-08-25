import React, { useState, useEffect } from "react";

const SatisfiedPatient = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10000) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10000) {
          clearInterval(interval);
          return 10000;
        }
        return prev + 100;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex flex-col md:flex-row  gap-4 py-6">
      {/* Avatars */}
      <div className="flex -space-x-4 md:justify-center md:items-center">
        <img
          src="/images/Avatar-1.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full shadow"
        />
        <img
          src="/images/Avatar-2.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full shadow"
        />
        <img
          src="/images/Avatar-3.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full shadow"
        />
        <img
          src="/images/Avatar-4.jpg"
          alt="avatar"
          className="w-14 h-14 rounded-full shadow"
        />
      </div>

      {/* Count */}
      <div className="text-left">
        <h3 className="text-4xl font-bold text-brandBlueColor">
          {count.toLocaleString()}+
        </h3>
        <p className="text-gray-600 font-medium">Satisfied Patients</p>
      </div>
    </div>
  );
};

export default SatisfiedPatient;
