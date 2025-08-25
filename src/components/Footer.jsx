import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brandBlueColor text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <img
                src="/images/WiiCare-White-Logo.png"
                alt="WIICARE LOGO"
                width={150}
                className="transition-all duration-300"
              />
          <p className="text-white text-sm leading-relaxed mt-5">
            Providing compassionate healthcare and home care services you can
            trust for you and your loved ones.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home Care</a></li>
            <li><a href="#" className="hover:text-white">Medical Consultation</a></li>
            <li><a href="#" className="hover:text-white">Physiotherapy</a></li>
            <li><a href="#" className="hover:text-white">Emergency Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              +234 800 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              info@healthcareplus.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white" />
              123 Healthcare St, Lagos, Nigeria
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} WiiCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
