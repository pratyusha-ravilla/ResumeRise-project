// import React from "react";
// import LoginForm from "../components/LoginForm";
// import { loginUser } from "../api/authApi";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const handleLogin = async (userData) => {
//     try {
//       await loginUser(userData);
//       // Handle successful login, such as redirecting to another page
//       console.log("Login successful:", response);
//       navigate('/dashboard')
//     } catch (error) {
//       // Handle login error
//       console.error("Login error:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <LoginForm onSubmit={handleLogin} />
//     </div>
//   );
// };

// export default Login;



// import React from "react";
// import LoginForm from "../components/LoginForm";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const handleLogin = async (userData) => {
//     try {
//       // Simulated login logic
//       console.log("Login successful:", userData);
//       // Redirect to dashboard
//       navigate("/dashboard");
//     } catch (error) {
//       // Handle login error
//       console.error("Login error:", error.message);
//     }
//   };

//   return (
//     <div className="login-container">
    
//       <LoginForm onSubmit={handleLogin} />
//     </div>
//   );
// };

// export default Login;




// //pages/login.js
// import React from "react";
// import { Box, Typography, Paper, Grid } from "@mui/material";
// import LoginForm from "../components/LoginForm";
// import { loginUser } from "../api/authApi";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (userData) => {
//     try {
//       await loginUser(userData);
//       // Handle successful login, such as redirecting to another page
//       console.log("Login successful");
//       navigate('/dashboard');
//     } catch (error) {
//       // Handle login error
//       console.error("Login error:", error.message);
//     }
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
//           Welcome to ResumeRise
//         </Typography>
//         <Typography variant="subtitle1" gutterBottom>
//           Join us and discover amazing opportunities!
//         </Typography>
//         <LoginForm onSubmit={handleLogin} />
//         <Grid container justifyContent="center" sx={{ mt: 2 }}>
//           <Grid item>
            
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;




import React from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      await loginUser(userData);
      console.log("Login successful");
      navigate('/dashboard');
    } catch (error) {
      alert(error.message); // Display error message
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
        <Typography variant="subtitle1" gutterBottom>
          Join us and discover amazing opportunities!
        </Typography>
        <LoginForm onSubmit={handleLogin} />
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            {/* Optionally add a link to password reset */}
          </Grid>
        </Grid>
        <Button
          variant="text"
          color="primary"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
