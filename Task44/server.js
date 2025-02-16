const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const path = require("path");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use("/", authRoutes);
app.use("/tasks", taskRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
