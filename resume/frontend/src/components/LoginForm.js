// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../api/authApi';
// import '../assets/LoginForm.css'; // Import the CSS file

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userData = { email, password };
//       const response = await loginUser(userData);

//       // Handle successful login
//       console.log('Login successful');
      
//       // Redirect to the dashboard page
//       navigate('/dashboard');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <div className="input-field">
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       </div>
//       <div className="input-field">
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       </div>
//       <button type="submit">Login</button>
//       {error && <p className="error-message">{error}</p>}
//     </form>
//   );
// };

// export default LoginForm;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/LoginForm.css"; // Import the CSS file

// const LoginForm = ({ onSubmit }) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Simulated login logic
//       const userData = { email, password };
//       await onSubmit(userData);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <div className="input-field">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//       </div>
//       <div className="input-field">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//       {error && <p className="error-message">{error}</p>}
//       <p>
//         Don't have an account?{" "}
//         <span onClick={() => navigate("/register")} className="register-link">
//           Register here
//         </span>
//       </p>
//     </form>
//   );
// };

// export default LoginForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/LoginForm.css"; // Import the CSS file
import { loginUser } from "../api/authApi"; // Import loginUser function from authApi

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      console.log("Login successful");
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-field">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="input-field">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Login</button>
      {error && <p className="error-message">{error}</p>}
      {/* <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/register")} className="register-link">
          Register here
        </span>
      </p> */}
    </form>
  );
};

export default LoginForm;

