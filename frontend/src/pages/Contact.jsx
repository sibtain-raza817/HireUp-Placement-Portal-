import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="py-16 px-10 bg-gray-100 min-h-screen">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Contact Us
          </h1>

          <input
            className="w-full p-3 mb-4 border rounded"
            placeholder="Your Name"
          />

          <input
            className="w-full p-3 mb-4 border rounded"
            placeholder="Email"
          />

          <textarea
            className="w-full p-3 mb-4 border rounded"
            placeholder="Your Message"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700">
            Send Message
          </button>

        </div>
      </div>
    </div>
  );
}

export default Contact;