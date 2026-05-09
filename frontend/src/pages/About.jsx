import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <div className="py-20 px-6 md:px-12 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="about"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              About Placement Portal
            </h1>

            <p className="text-gray-700 mb-5 leading-relaxed">
              Placement Portal is a modern web platform designed to connect
              students with top companies. It simplifies the recruitment
              process and helps students find opportunities faster and more efficiently.
            </p>

            <p className="text-gray-700 mb-5 leading-relaxed">
              Students can explore job listings, apply in one click, and track
              their application status in real-time.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Companies and administrators can manage job postings, review
              applications, and hire the best talent seamlessly through a
              centralized dashboard.
            </p>

            {/* EXTRA SECTION */}
            <div className="mt-6 flex gap-4">
              <div className="bg-white px-4 py-3 rounded-lg shadow text-center">
                <p className="font-bold text-blue-600 text-xl">100+</p>
                <p className="text-sm text-gray-500">Jobs Posted</p>
              </div>

              <div className="bg-white px-4 py-3 rounded-lg shadow text-center">
                <p className="font-bold text-green-600 text-xl">500+</p>
                <p className="text-sm text-gray-500">Applications</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default About;