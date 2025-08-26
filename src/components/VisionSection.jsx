import React from 'react'

const VisionSection = () => {
  return (
    <section className="py-16 bg-white mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/Doctor-For-About.jpg"
            alt="Doctor"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brandBlueColor mb-4">
              Trusted Home Care and Private Nursing Services for Over Two Decades
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="flex flex-col items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <img src="/images/vision-icon.png" alt="Vision Icon" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-BrandBlueColor mb-2">Vision</h3>
              <span className="text-gray-600 text-sm leading-relaxed">
                Phasellus viverra nulla ut metus varius laoreet quisque rutrum. Aenean imperdiet.
              </span>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-start bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <img src="/images/mission-icon.png" alt="Mission Icon" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-BrandBlueColor  mb-2">Mission</h3>
              <span className="text-gray-600 text-sm leading-relaxed">
                Phasellus viverra nulla ut metus varius laoreet quisque rutrum. Aenean imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
