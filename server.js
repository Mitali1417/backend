const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.error("Initial MongoDB connection error:", err));
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err); // Log any connection errors
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

app.use(
  cors({
    origin: ["https://purely.onrender.com"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("Hello");
});

// Routes
app.use("/api/queries", require("./routes/userQueryRoutes"));

// Serve React App for all other routes not handled by above
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
