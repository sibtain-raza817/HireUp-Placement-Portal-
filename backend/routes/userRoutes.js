const express = require("express");
const router = express.Router();
const upload = require("../utils/fileUpload");
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");


// ✅ Upload Resume
router.post("/upload", auth, upload.single("resume"), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { resume: req.file.filename },
      { new: true }
    ).select("-password");

    res.json({
      message: "Resume uploaded",
      file: req.file.filename,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;