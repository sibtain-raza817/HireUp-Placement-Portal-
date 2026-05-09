import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // ✅ find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // ✅ check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // ✅ generate token
    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1d" }
    );

    // ✅ IMPORTANT RESPONSE
    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};