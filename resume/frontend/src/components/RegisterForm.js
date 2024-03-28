// import React from "react";
// import { useState } from "react";

// // Simulated useNavigator hook
// const useNavigator = () => {
//   const navigate = (url) => {
//     window.location.href = url;
//   };
//   return { navigate };
// };

// const RegisterForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const { navigate } = useNavigator();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   onSubmit({ email, username, password })
//   //     .then(() => {
//   //       // If registration is successful, redirect to the login page
//   //       navigate('/login'); // Redirect to login page
//   //     })
//   //     .catch((error) => {
//   //       // Handle registration error
//   //       console.error('Registration failed:', error);
//   //     });
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSubmit({ email, username, password });
//       // If registration is successful, redirect to the login page
//       navigate('/login'); // Redirect to login page
//     } catch (error) {
//       // Handle registration error
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;

// // RegisterForm.js
// import React, { useState } from "react";
// import { Button, TextField, Typography, Box } from "@mui/material";

// const RegisterForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSubmit({ email, username, password });
//     } catch (error) {
//       console.error("Registration failed:", error);
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
//       <Typography variant="h6" gutterBottom>
//         Register
//       </Typography>
//       <TextField
//         label="Username"
//         variant="outlined"
//         fullWidth
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         margin="normal"
//         required
//       />
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         margin="normal"
//         required
//       />
//       <TextField
//         label="Password"
//         variant="outlined"
//         fullWidth
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         margin="normal"
//         required
//       />
//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//         Register
//       </Button>
//     </Box>
//   );
// };

// export default RegisterForm;

// import React from "react";
// import { useState } from "react";
// import { TextField, Button, Grid, Typography } from "@mui/material";

// const RegisterForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSubmit({ email, username, password });
//     } catch (error) {
//       console.error("Registration failed:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Username"
//             variant="outlined"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Register
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body2" align="center">
//             Or register with
//           </Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             type="button"
//             variant="outlined"
//             color="secondary"
//             fullWidth
//             onClick={() => console.log("Registering with Google")}
//           >
//             Google
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default RegisterForm;



// import React, { useState } from "react";
// import "../assets/registerForm.css"; // Import CSS file for styling

// const RegisterForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ email, username, password });
//   };

//   return (
//     <form className="register-form" onSubmit={handleSubmit}>
//       <div className="form-group">

//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="password"
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;



// //components/registerform.js
// import React, { useState } from "react";
// import "../assets/registerForm.css"; // Import CSS file for styling

// const RegisterForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ email, username, password });
//   };

//   return (
//     <form className="register-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//       </div>
//       <button type="submit">Register</button>

//     </form>
//   );
// };

// export default RegisterForm;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../assets/registerForm.css"; // Import CSS file for styling
import { registerUser } from "../api/authApi"; // Import registerUser function from authApi

const RegisterForm = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, username, password });
      console.log("Registration successful");
      // Navigate to the login page after successful registration
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Register</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default RegisterForm;

