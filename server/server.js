const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");

//routes
const courseRouter = require("./routes/course_router");
const authRouter = require("./routes/auth_router");

//middleware
const authMiddleware = require("./middleware/auth_middleware");

dotenv.config();
const { PORT } = process.env || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

//middleware
app.use(authMiddleware);

//register routes
app.use("/api", courseRouter);

app.get("/all_courses", (req, res) => {
  let courses = read_file("courses.json");
  res.status(200).json(courses);
  console.log(courses);
});
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
