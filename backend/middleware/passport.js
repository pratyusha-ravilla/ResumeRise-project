// // Configure Passport.js
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./models/userModel'); // Assuming you have a User model

// passport.use(new LocalStrategy(
//   async (username, password, done) => {
//     try {
//       // Find the user by username
//       const user = await User.findOne({ username });

//       // If user not found or password does not match, return false
//       if (!user || !(await user.isValidPassword(password))) {
//         return done(null, false, { message: 'Invalid username or password' });
//       }

//       // If user is found and password is correct, return user
//       return done(null, user);
//     } catch (error) {
//       return done(error);
//     }
//   }
// ));

// passport.serializeUser((user, done) => {
//   // Serialize user id to session
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     // Deserialize user from id
//     const user = await User.findById(id);
//     if (!user) {
//       return done(null, false);
//     }
//     return done(null, user);
//   } catch (error) {
//     return done(error);
//   }
// });

// module.exports = passport;
