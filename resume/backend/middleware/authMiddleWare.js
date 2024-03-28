// authMiddleware.js

// Middleware to ensure user ID is available in the request object after authentication
const ensureUserId = (req, res, next) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Set the user ID in the request object
    req.userId = req.user.id;
  }
  // Continue to the next middleware or route handler
  next();
};

module.exports = { ensureUserId };
