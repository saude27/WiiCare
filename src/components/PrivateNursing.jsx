import React from 'react'
import { Calendar, Stethoscope, UserCheck, Home } from "lucide-react"; // Example icons

const PrivateNursing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Easy Steps to Get Private Nursing
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor aenean massa cum.
        </p>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
            <Calendar size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Make An Appointment</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa cum.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
            <Stethoscope size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Consultation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa cum.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-4">
            <UserCheck size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Meet Our Nurse</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa cum.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
            <Home size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Enjoy Our Home Care</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa cum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivateNursing
