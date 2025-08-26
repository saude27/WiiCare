import React from 'react'
import { MapPin, Phone } from "lucide-react"
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get Better Information
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula.
          </p>

          <div className="space-y-6">
            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600">123 Healthcare Street, City, Country</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Map */}
        <div className="w-full h-64 sm:h-80 md:h-[400px] mt-10 md:mt-0 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61927464.52572209!2d86.85667731886406!3d-18.675100325156592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sng!4v1756217758792!5m2!1sen!2sng"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <ContactForm />
      <Footer />
    </section>
  )
}

export default Contact
