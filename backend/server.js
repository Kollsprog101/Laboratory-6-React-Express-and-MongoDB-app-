import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Student from "./models/Student.js";
import Teacher from "./models/Teacher.js";

const app = express();

app.use(cors());          // allows React (port 5173) to call this server
app.use(express.json());  // lets the server read JSON sent from forms

// connect to MongoDB (studentDB is the database name)
mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// test route from the lab
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// get all students (like SELECT * FROM students)
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// get all teachers
app.get("/api/teachers", async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

// add a new teacher (used by the Add Teacher page)
app.post("/api/teachers", async (req, res) => {
  const newTeacher = await Teacher.create(req.body);
  res.json(newTeacher);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});