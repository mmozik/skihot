const app = require("./app");

// Set the port
const PORT = process.env.PORT || 80;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
