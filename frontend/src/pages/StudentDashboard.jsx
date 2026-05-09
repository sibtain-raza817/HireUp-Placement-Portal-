import { useEffect, useState } from "react";
import { getAllJobs, uploadResume } from "../services/jobService";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Resume Upload
  const handleUpload = async () => {
    if (!resume) {
      alert("Please select a file ❌");
      return;
    }

    try {
      setLoading(true);
      await uploadResume(resume);
      alert("Resume uploaded successfully ✅");
    } catch (err) {
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        {/* 🔷 HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Welcome, {user?.role === "student" ? "Student 🎓" : ""}
          </h1>
          <p className="text-gray-600">
            Explore jobs and apply easily
          </p>
        </div>

        {/* 🔥 TOP CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Total Jobs</h2>
            <p className="text-2xl font-bold text-blue-600">
              {jobs.length}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Applications</h2>
            <p className="text-2xl font-bold text-green-600">
              Coming Soon
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="text-sm text-gray-500">
              Update your resume
            </p>
          </div>

        </div>

        {/* 🔥 RESUME UPLOAD */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Upload Resume
          </h2>

          <div className="flex gap-4 items-center">
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              className="border p-2 rounded"
            />

            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>

        {/* 🔥 JOB LIST */}
        <h2 className="text-2xl font-semibold mb-4">
          Available Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))
          ) : (
            <p>No Jobs Available</p>
          )}
        </div>

      </div>
    </>
  );
}

export default StudentDashboard;