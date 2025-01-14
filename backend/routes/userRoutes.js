//IMPORTS
import express from "express"; 
import User from "../models/userModel.js"; 

const router = express.Router(); // THE ROUTER

//HANDLE POST REQUEST (CREATE USER)
router.post("/", async (req, res) => {
  const { name, emailadd, pass } = req.body;
  try {
    const user = new User({ name, emailadd, pass });
    await user.save(); 
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//HANDLE POST REQ (LOGIN)
router.post("/login", async (req, res) => {
  const { emailadd, pass } = req.body;

  try {
    const user = await User.findOne({ emailadd });
    if (user.pass !== pass) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; //EXPORT
//END