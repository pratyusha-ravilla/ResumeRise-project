// import React from "react";
// import RegisterForm from "../components/RegisterForm";
// import { registerUser } from "../api/authApi";

// const Register = () => {
//   const handleRegister = async (userData) => {
//     try {
//       const response = await registerUser(userData);
//       console.log("Registration successful:", response);
//       // Handle successful registration, such as redirecting to another page
//     } catch (error) {
//       console.error("Registration error:", error.message);
//       // Handle registration error
//     }
//   };

//   return (
//     <div>
//       <h2>Register Page</h2>
//       <RegisterForm onSubmit={handleRegister} />
//     </div>
//   );
// };

// export default Register;

// import React from 'react';
// import RegisterForm from '../components/RegisterForm';
// import { registerUser } from '../api/authApi';

// // Define custom hook useNavigator
// const useNavigator = () => {
//   const navigate = (url) => {
//     window.location.href = url;
//   };
//   return { navigate };
// };

// const Register = () => {
//   const { navigate } = useNavigator(); // Initialize useNavigator hook

//   const handleRegister = async (userData) => {
//     try {
//       const response = await registerUser(userData);
//       console.log('Registration successful:', response);
//       // Redirect to login page after successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error.message);
//       // Handle registration error
//     }
//   };

//   return (
//     <div>
//       <h2>Register Page</h2>
//       <RegisterForm onSubmit={handleRegister} />
//     </div>
//   );
// };

// export default Register;

// import React from "react";
// import { Box, Typography, Button, Paper, Grid } from "@mui/material";
// import RegisterForm from "../components/RegisterForm";
// import { registerUser } from "../api/authApi";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const handleRegister = async (userData) => {
//     try {
//       const response = await registerUser(userData);
//       console.log("Registration successful:", response);
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration error:", error.message);
//     }
//   };

//   const handleGoogleRegister = () => {
//     // Implement Google registration logic
//     console.log("Registering with Google");
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           padding: 6,
//           textAlign: "center",
//           maxWidth: 400,
//           width: "100%",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Welcome to Our Platform
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mb: 3, color: "gray" }}>
//           Join us and discover amazing opportunities!
//         </Typography>
//         <RegisterForm onSubmit={handleRegister} />
//         <Grid container justifyContent="center" sx={{ mt: 2 }}>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={handleGoogleRegister}
//             >
//               Register with Google
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// };

// export default Register;

// import React from "react";
// import { Box, Typography, Button, Paper, Grid } from "@mui/material";
// import RegisterForm from "../components/RegisterForm";
// import { registerUser } from "../api/authApi";
// import { useNavigate } from "react-router-dom";
// import "../assets/registerForm.css"; // Import CSS file for styling

// const Register = () => {
//   const navigate = useNavigate();

//   const handleRegister = async (userData) => {
//     try {
//       const response = await registerUser(userData);
//       console.log("Registration successful:", response);
//       navigate("/login");
//     } catch (error) {
//       // console.error("Registration error:", error.message);
//       alert('user already exist')
//     }
//   };

//   // const handleGoogleRegister = () => {
//   //   // Implement Google registration logic
//   //   console.log("Registering with Google");
//   // };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           padding: 6,
//           textAlign: "center",
//           maxWidth: 400,
//           width: "100%",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Welcome to ResumeRise
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mb: 3, color: "gray" }}>
//           Join us and discover amazing opportunities!
//         </Typography>
//         <RegisterForm onSubmit={handleRegister} />
//         <Grid container justifyContent="center" sx={{ mt: 2 }}>
//           <Grid item>
//             {/* <Button
//               variant="contained"
//               color="secondary"
//               onClick={handleGoogleRegister}
//             >
//               Register with Google
//             </Button> */}
//           </Grid>
//         </Grid>
//         <Button
//           variant="text"
//           color="primary"
//           onClick={() => navigate("/login")}
//         >
//           Already have an account? Login
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default Register;



import React from "react";
import { Box, Typography, Paper, Button, Grid } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";
import "../assets/registerForm.css"; // Import CSS file for styling

const Register = () => {
  const navigate = useNavigate();

  // const handleRegister = async (userData) => {
  //   try {
  //     await registerUser(userData);
  //     console.log("Registration successful");
  //     navigate("/login");
  //   } catch (error) {
  //     alert(error.message); // Display error message
  //   }
  // };

  const handleRegister = async (userData) => {
    try {
      const response = await registerUser(userData);
      console.log("Registration successful:", response);
      // Navigate to the login page after successful registration
      navigate("/login");
    } catch (error) {
      alert('User already exists');
    }
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 6,
          textAlign: "center",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to ResumeRise
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: "gray" }}>
          Join us and discover amazing opportunities!
        </Typography>
        <RegisterForm onSubmit={handleRegister} />
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            {/* Optionally add registration with Google button */}
          </Grid>
        </Grid>
        <Button
          variant="text"
          color="primary"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Register;
