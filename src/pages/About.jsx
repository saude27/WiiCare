import React from 'react'
import VisionSection from '../components/VisionSection'
import PrivateNursing from '../components/PrivateNursing'
import Footer from '../components/Footer'

const About = () => {
  return (
    <section className="">
      <div className="container mx-auto px-6 py-15 grid md:grid-cols-2 gap-12 items-center  bg-gray-50">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/smiling-nurse.jpg"
            alt="Smiling Nurse"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brandBlueColor">
            Discovering the Field of Private Nursing
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mt-10">
            Step into the world of personalized healthcare with our top-quality
            private nursing services. At <span className="font-bold text-brandBlue-Color ">WiiCare</span>, we are devoted to transforming the care
            experience by combining professionalism with genuine compassion.
          </p>
        </div>
      </div>
      <VisionSection />
      <PrivateNursing />
      <Footer />
    </section>
  )
}

export default About
