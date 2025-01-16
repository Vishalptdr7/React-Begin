import React from "react";
import ReactDOM from "react-dom/client"
const Footer = () => {
  return (
    <footer className="footer bg-[#decbcb] text-white py-10 px-5 font-sans">
      <div className="footer-container flex flex-wrap justify-between gap-5 max-w-screen-xl mx-auto">
        {/* Logo and Description */}
        <div className="footer-logo">
          <div>
            <h2 className="text-[#f8b400] mb-2">Vishal </h2>
            <h3 className="text-[#f8b400] mb-2">Food Point</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Your ultimate destination for delicious meals delivered to your
            doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="text-[#f8b400] mb-3">Quick Links</h3>
          <ul>
            <li className="mb-1">
              <a
                className="text-white hover:text-[#f8b400] transition-colors"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mb-1">
              <a
                className="text-white hover:text-[#f8b400] transition-colors"
                href="#"
              >
                Menu
              </a>
            </li>
            <li className="mb-1">
              <a
                className="text-white hover:text-[#f8b400] transition-colors"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a
                className="text-white hover:text-[#f8b400] transition-colors"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li className="mb-1">
              <a
                className="text-white hover:text-[#f8b400] transition-colors"
                href="#"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              className="text-white hover:text-[#f8b400] transition-colors mr-3 text-lg"
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="text-white hover:text-[#f8b400] transition-colors mr-3 text-lg"
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="text-white hover:text-[#f8b400] transition-colors mr-3 text-lg"
              href="#"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="text-white hover:text-[#f8b400] transition-colors mr-3 text-lg"
              href="#"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h3 className="text-[#f8b400] mb-3">Subscribe to Our Newsletter</h3>
          <form className="newsletter-form flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input flex-1 p-2 border-none rounded-md"
            />
            <button
              type="submit"
              className="newsletter-button py-2 px-5 bg-[#f8b400] text-[#222] rounded-md hover:bg-[#ffa500] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-5 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} This Website have All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;