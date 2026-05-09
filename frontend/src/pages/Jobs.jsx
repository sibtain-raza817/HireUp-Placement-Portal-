import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs(); // ✅ correct function
      setJobs(data); // ✅ correct data handling
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="p-6 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          💼 Available Jobs
        </h1>

        {/* LOADING */}
        {loading ? (
          <p className="text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-600">No jobs available</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Jobs;