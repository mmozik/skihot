const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

// API Routes
app.use("/api", routes);

// Handle 404 for unknown routes
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
