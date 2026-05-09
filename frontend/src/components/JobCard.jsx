import { useState } from "react";
import { applyJob } from "../services/jobService";

function JobCard({ job }) {
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleApply = async () => {
    const token = localStorage.getItem("token");

    // 🔒 Prevent unauthenticated access
    if (!token) {
      alert("Please login first ❌");
      return;
    }

    try {
      setLoading(true);

      await applyJob(job._id);

      setApplied(true);
      alert("Applied Successfully ✅");

    } catch (err) {
      console.error(err);
      alert("Apply Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border">

      {/* 🔷 JOB TITLE */}
      <h3 className="text-xl font-bold text-gray-800">
        {job.title}
      </h3>

      {/* 🔷 COMPANY */}
      <p className="text-blue-600 font-medium mt-1">
        {job.company}
      </p>

      {/* 🔷 DESCRIPTION */}
      <p className="text-sm text-gray-500 mt-3 line-clamp-3">
        {job.description}
      </p>

      {/* 🔷 APPLY BUTTON */}
      <button
        onClick={handleApply}
        disabled={loading || applied}
        className={`mt-5 w-full py-2 rounded-lg text-white font-medium transition 
        ${
          applied
            ? "bg-green-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Applying..." : applied ? "Applied ✅" : "Apply Now"}
      </button>

    </div>
  );
}

export default JobCard;