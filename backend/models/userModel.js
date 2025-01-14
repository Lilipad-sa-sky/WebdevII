import mongoose from "mongoose"; //IMPORT MONGOOSE

const userSchema = new mongoose.Schema({
  //NAME
  name: {
    type: String,
    required: true,
  },
  //EMAIL ADD
  emailadd: {
    type: String,
    required: true,
    unique: true,
  },
  //PASS
  pass: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema); //EXPORT
//DONE KHALAS 