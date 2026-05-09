import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Build Your Career 🚀
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Connect with top companies and unlock your future opportunities
        </p>

        <Link
          to="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="about"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-5">
              About Our Platform
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our placement portal connects students with top recruiters,
              making the hiring process simple, transparent, and efficient.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Apply for jobs, track your applications, and build your
              career while companies find the best talent effortlessly.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-3">🎯 Easy Apply</h3>
            <p className="text-gray-600">
              Apply to jobs quickly with just one click.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-3">📊 Track Status</h3>
            <p className="text-gray-600">
              Monitor your application progress in real-time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-3">🏢 Company Access</h3>
            <p className="text-gray-600">
              Companies can post jobs and hire easily.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />

          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
          />

          <textarea
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Message"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-2">Placement Portal</h3>
            <p className="text-gray-400">
              Connecting students and companies for better career opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <p className="text-gray-400 hover:text-white cursor-pointer">Home</p>
            <p className="text-gray-400 hover:text-white cursor-pointer">About</p>
            <p className="text-gray-400 hover:text-white cursor-pointer">Contact</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p className="text-gray-400">Mon - Fri: 9 AM - 6 PM</p>
            <p className="text-gray-400">Sat: 10 AM - 4 PM</p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-8">
          © 2026 Placement Portal
        </p>
      </footer>

    </div>
  );
}

export default Home;