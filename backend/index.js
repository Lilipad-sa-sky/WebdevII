//IMPORTS
import express from "express"; 
import mongoose from "mongoose"; 
import dotenv from "dotenv"; 
import cors from "cors"; 
import userRoutes from "./routes/userRoutes.js";//MY ROUTES

dotenv.config(); 

//CREATE INST EXPRESS
const app = express();
const port = 5000;
app.use(cors());

//JSON DATA
app.use(express.json());
app.use("/api/user", userRoutes);

//CONNECT TO ATLAS
const dbURI = process.env.DB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

connectDB();

//STARTS THE SREVER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//END