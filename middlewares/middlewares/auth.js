// middlewares/auth.js
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Format: Bearer mysecrettoken

  if (token !== "mysecrettoken") {
    return res.status(403).json({ message: "Invalid or missing token" });
  }

  next(); // proceed if token is correct
};

module.exports = auth;
