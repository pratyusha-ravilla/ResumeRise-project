// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';
// import DashboardPage from './pages/DashboardPage';

// import { UserProvider } from './pages/UserContext';

// import CreateResumePage from './pages/CreateResumePage';
// import { AuthProvider } from './pages/AuthContext';

// const App = () => {
//   const initialId = 'login-user-id';
//   return (

//     <Router>
//       <UserProvider initialId={initialId}>

      
//      <AuthProvider>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />}/>

//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/create-resume" element={<CreateResumePage />} /> 
        
       
//         {/* Add more routes as needed */}
//       </Routes>
      
//       </AuthProvider>
//       </UserProvider>
 
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/DashboardPage';
import CreateResumePage from './pages/CreateResumePage';
import AllResumesPage from './components/AllResumesPage'; // Import the new page component
import { AuthProvider } from './pages/AuthContext';
import { UserProvider } from './pages/UserContext';

const App = () => {
  const initialId = 'login-user-id';

  return (
    <Router>
      <UserProvider initialId={initialId}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create-resume" element={<CreateResumePage />} />
            <Route path="/all" element={<AllResumesPage />} /> {/* Update the route */}
          </Routes>
        </AuthProvider>
      </UserProvider>
    </Router>
  );
};

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';
// import DashboardPage from './pages/Dashboard';
// import CreateResumePage from './pages/CreateResumePage';

// import { UserProvider } from './pages/UserContext'; // Import UserProvider

// const App = () => {
//   return (
//     <Router>
//       <UserProvider> {/* Wrap the entire Router with UserProvider */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
          
//           <Route path="/create-resume" element={<CreateResumePage/>} /> 
//           {/* Add more routes as needed */}
//         </Routes>
//       </UserProvider>
//     </Router>
//   );
// };

// export default App;



