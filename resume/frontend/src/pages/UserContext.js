import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children, initialId }) => {
  const [user, setUser] = useState({
    id: '61d566e2f70a8e46a8b1e0c2', // Example user ID
    // Other user data...
  });

  // Function to set user ID
  const setUserId = (userId) => {
    setUser(prevUser => ({ ...prevUser, id: userId }));
  };

  return (
    <UserContext.Provider value={{ user,setUserId }}>
      {children}
    </UserContext.Provider>
  );
};




// // userContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { getCurrentUser } from '../api/authApi'; // Assuming getCurrentUser is in this module

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     id: null,
//     // Other user data...
//   });

//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         if (currentUser) {
//           setUser(prevUser => ({ ...prevUser, id: currentUser.id })); // Assuming "id" property
//         } else {
//           // Handle the case where there's no current user (e.g., log, display message)
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       }
//     };
  
//     fetchUserId();
//   }, []); // Run on component mount and subsequent re-renders
  

//   const setUserId = (userId) => {
//         setUser(prevUser => ({ ...prevUser, id: userId }));
//       };
    
//       return (
//         <UserContext.Provider value={{ user }}>
//           {children}
//         </UserContext.Provider>
//       );
//     };

    



// import React, { createContext, useState, useEffect } from 'react';
// import { getCurrentUser } from '../api/authApi';

// // Import the shared Axios instance from authApi.js (assuming it's exported)
// import axiosInstance from '../api/authApi';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api'; // Use environment variable or default URL

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     id: null,
//     // Other user data...
//   });

//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const currentUser = await getCurrentUser();
//         if (currentUser) {
//           setUser(prevUser => ({ ...prevUser, id: currentUser.id })); // Assuming "id" property
//         } else {
//           // Handle the case where there's no current user (e.g., log, display message)
//         }
//       } catch (error) {
//         console.error('Error fetching user:', error);

//         // Handle errors gracefully (e.g., redirect to login, clear token)
//         if (error.response?.status === 401) {
//           localStorage.removeItem('authToken');
//           // Consider redirecting to login or handling unauthorized state
//         }
//       }
//     };

//     fetchUserId();
//   }, []); // Run on component mount and subsequent re-renders

//   // const setUserId = (userId) => {
//   //   setUser(prevUser => ({ ...prevUser, id: userId }));
//   // };

//   return (
//     <UserContext.Provider value={{ user }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;