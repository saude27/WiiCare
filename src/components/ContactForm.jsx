import React from 'react'

const ContactForm = () => {
  return (
    <section className="py-20 bg-gray-50 mt-10">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brandBlueColor">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below and our team will respond as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:brandBlueColor"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:brandBlueColor"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:brandBlueColor"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:brandBlueColor"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-brandBlueColor text-white px-8 py-3 rounded-lg font-medium shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
