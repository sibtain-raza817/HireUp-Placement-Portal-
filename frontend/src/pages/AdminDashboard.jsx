import { useEffect, useState } from "react";
import {
  getStats,
  getApplications,
  updateStatus,
} from "../services/jobService";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const s = await getStats();
      const a = await getApplications();

      setStats(s);
      setApps(a);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 UPDATE STATUS + AUTO REFRESH
  const handleStatus = async (id, status) => {
    try {
      setLoading(true);
      await updateStatus(id, status);
      await loadData(); // refresh UI
    } catch (err) {
      console.error(err);
      alert("Update Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-8 bg-gray-100 min-h-screen">

        {/* 🔷 HEADER */}
        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard 🧑‍💼
        </h1>

        {/* 🔥 STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Total Jobs</h2>
            <p className="text-2xl font-bold text-blue-600">
              {stats.totalJobs || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Applications</h2>
            <p className="text-2xl font-bold text-green-600">
              {stats.totalApplications || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Status</h2>
            <p className="text-sm text-gray-600">
              Manage hiring process
            </p>
          </div>

        </div>

        {/* 🔥 APPLICATION TABLE */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">

          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Job</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {apps.length > 0 ? (
                apps.map((a) => (
                  <tr key={a._id} className="border-t">

                    <td className="p-4 font-medium">
                      {a.studentName}
                    </td>

                    <td className="p-4">
                      {a.job?.title}
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-1 rounded text-sm bg-gray-200">
                        {a.status}
                      </span>
                    </td>

                    <td className="p-4 space-x-2">

                      <button
                        disabled={loading}
                        onClick={() =>
                          handleStatus(a._id, "Selected")
                        }
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Select
                      </button>

                      <button
                        disabled={loading}
                        onClick={() =>
                          handleStatus(a._id, "Rejected")
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center">
                    No Applications Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;