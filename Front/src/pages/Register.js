// import React from 'react';
// import RegisterForm from '../components/RegisterForm';
// import { registerUser } from '../api/authApi';

// const Register = () => {
//   const handleRegister = async (userData) => {
//     try {
//       const response = await registerUser(userData);
//       console.log('Registration successful:', response);
//       // Handle successful registration, such as redirecting to another page
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


import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { registerUser } from '../api/authApi';

// Define custom hook useNavigator
const useNavigator = () => {
  const navigate = (url) => {
    window.location.href = url;
  };
  return { navigate };
};

const Register = () => {
  const { navigate } = useNavigator(); // Initialize useNavigator hook

  const handleRegister = async (userData) => {
    try {
      const response = await registerUser(userData);
      console.log('Registration successful:', response);
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.message);
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
