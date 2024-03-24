import React from "react";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (userData) => {
    try {
      await loginUser(userData);
      // Handle successful login, such as redirecting to another page
      console.log("Login successful:");
      navigate('/dashboard')
    } catch (error) {
      // Handle login error
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
