const express = require("express");
const logger = require("./middlewares/logger");
const auth = require("./middlewares/auth");

const app = express();
const PORT = 3000;

// Apply logging middleware globally
app.use(logger);

// Public route (no auth needed)
app.get("/public", (req, res) => {
  res.json({ message: "Welcome to the public route!" });
});

// Protected route (auth required)
app.get("/protected", auth, (req, res) => {
  res.json({ message: "Access granted to protected route!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
