import React from "react";
import { useState } from "react";

// Simulated useNavigator hook
const useNavigator = () => {
  const navigate = (url) => {
    window.location.href = url;
  };
  return { navigate };
};

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigator();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ email, username, password })
  //     .then(() => {
  //       // If registration is successful, redirect to the login page
  //       navigate('/login'); // Redirect to login page
  //     })
  //     .catch((error) => {
  //       // Handle registration error
  //       console.error('Registration failed:', error);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ email, username, password });
      // If registration is successful, redirect to the login page
      navigate('/login'); // Redirect to login page
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
