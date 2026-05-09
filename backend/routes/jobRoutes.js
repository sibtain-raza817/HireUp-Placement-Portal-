const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

//  CREATE JOB
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET ALL JOBS
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;