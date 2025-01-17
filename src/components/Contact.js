import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Feel free to reach out to us at any time. We’re here to help!
        </p>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
