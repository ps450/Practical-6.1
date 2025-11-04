// middlewares/logger.js
const logger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next(); // move to next middleware or route
};

module.exports = logger;
