import API from "./api";

// 🔥 GET ALL JOBS
export const getAllJobs = async () => {
  const res = await API.get("/jobs");
  return res.data; // always clean data
};

// 🔥 APPLY JOB
export const applyJob = async (jobId) => {
  const res = await API.post(`/applications/${jobId}`);
  return res.data;
};

// 🔥 GET ALL APPLICATIONS (ADMIN)
export const getApplications = async () => {
  const res = await API.get("/applications");
  return res.data;
};

// 🔥 UPDATE APPLICATION STATUS (ADMIN)
export const updateStatus = async (id, status) => {
  const res = await API.put(`/applications/${id}`, { status });
  return res.data;
};

// 🔥 ADMIN STATS
export const getStats = async () => {
  const res = await API.get("/admin/stats");
  return res.data;
};

// 🔥 UPLOAD RESUME (NEW 🔥)
export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const res = await API.post("/users/upload-resume", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};