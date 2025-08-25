// ReviewSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { reviews } from "../Data";
import { Star } from "lucide-react";

const ReviewSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brandBlueColor">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1 }, // tablet
          1024: { slidesPerView: 1 }, // desktop
        }}
      >
        {/* Group reviews into slides of 3 cards each */}
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.slice(index * 3, index * 3 + 3).map((review) => (
                <div
                  key={review.id}
                  className="border-2 border-brandBlueColor p-10 rounded-2xl text-center transition-transform duration-300"
                >
                  {/* Review Text */}
                  <p className="text-gray-600 italic mb-4 text-sm md:text-base">
                    "{review.text}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-3">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Name */}
                  <h4 className="font-semibold text-lg text-brandBlueColor">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role || "Client"}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
