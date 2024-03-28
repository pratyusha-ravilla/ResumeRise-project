// const express = require('express');
// const router = express.Router();
// const { getAllResumes, getResumeById, createResume, updateResumeById, deleteResumeById } = require('../controllers/resumeController');

// // GET all resumes
// router.get('/all', getAllResumes);

// // GET a single resume by ID
// router.get('/:id', getResumeById);

// // POST create a new resume
// router.post('/', createResume);

// // PUT update a resume by ID
// router.put('/:id', updateResumeById);

// // DELETE delete a resume by ID
// router.delete('/:id', deleteResumeById);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getAllResumes,
  getResumeById,
  createResume,
  updateResumeById,
  deleteResumeById,
} = require("../controllers/resumeController");
// Import the middleware
const { ensureUserId } = require("../middleware/authMiddleWare");
const passport = require('passport')

// Middleware to protect routes requiring authentication
router.use((req, res, next) => {
  // Check if the user is authenticated
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "User authentication failed" });
  }
  next();
});

// GET all resumes associated with the logged-in user's ID
router.get("/all", ensureUserId, getAllResumes);

// GET a single resume by ID associated with the logged-in user's ID
router.get("/:id", ensureUserId, getResumeById);

// POST create a new resume associated with the logged-in user's ID
router.post("/", ensureUserId, createResume);

// PUT update a resume by ID associated with the logged-in user's ID
router.put("/:id", ensureUserId, updateResumeById);

// DELETE delete a resume by ID associated with the logged-in user's ID
router.delete("/:id", ensureUserId, deleteResumeById);



// Example protected route
router.get('/protected', passport.authenticate('local'), (req, res) => {
  // If authentication succeeds, req.user contains the authenticated user
  res.send('Authenticated');
});

module.exports = router;
