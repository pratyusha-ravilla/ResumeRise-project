// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes } from '../api/resumeApi';

// function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     // Fetch the user's resumes when the component mounts
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         setResumes(fetchedResumes);
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };
//     fetchResumes();
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Welcome to your dashboard! What would you like to do?</p>
//       <ul>
//         <li><Link to="/create-resume">Create a new resume</Link></li>
//         <li>
//           {resumes.length > 0 ? (
//             <div>
//               <p>Your existing resumes:</p>
//               <ul>
//                 {resumes.map((resume) => (
//                   <li key={resume._id}>
//                     <Link to={`/resume/${resume._id}`}>{resume.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <p>You don't have any resumes yet.</p>
//           )}
//         </li>
//         <li>Edit profile</li>
//         {/* Add more options as needed */}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes } from '../api/resumeApi';
// import { Avatar, Typography } from '@mui/material';
// import '../assets/Dashboard.css' // Import CSS file for styling

// function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     // Fetch the user's resumes when the component mounts
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         setResumes(fetchedResumes);
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };
//     fetchResumes();
//   }, []);

//   // Mock username, you should replace it with actual username
//   const username = "John Doe";

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <Typography variant="h4">Dashboard</Typography>
//         <Avatar className="avatar">{username.charAt(0).toUpperCase()}</Avatar>
//       </div>
//       <div className="dashboard-content">
//         <p>Welcome to your dashboard! What would you like to do?</p>
//         <ul>
//           <li><Link to="/create-resume">Create a new resume</Link></li>
//           <li>
//             {resumes.length > 0 ? (
//               <div>
//                 <p>Your existing resumes:</p>
//                 <ul>
//                   {resumes.map((resume) => (
//                     <li key={resume._id}>
//                       <Link to={`/resume/${resume._id}`}>{resume.title}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <p>You don't have any resumes yet.</p>
//             )}
//           </li>
//           <li>Edit profile</li>
//           {/* Add more options as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// // src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes } from '../api/resumeApi';
// import { Container, Typography, List, ListItem, ListItemText, Button, Grid, Avatar, Box } from '@mui/material';
// import { useAuth } from '../pages/AuthContext';

// function Dashboard() {
//   const { user } = useAuth();
//   const [resumes, setResumes] = useState([]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     // Fetch the user's resumes when the component mounts
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         setResumes(fetchedResumes);
//         setUsername(user ? user.username : "");
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };
//     fetchResumes();
//   }, [user]);

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
//         <Typography variant="h2">Dashboard</Typography>
//         <Avatar>{username && username.charAt(0).toUpperCase()}</Avatar>
//       </Box>
//       <Typography variant="body1" gutterBottom>
//         Welcome to your dashboard, {username}! What would you like to do?
//       </Typography>
//       <List>
//         <ListItem>
//           <Button variant="contained" component={Link} to="/create-resume">Create a new resume</Button>
//         </ListItem>
//         <ListItem>
//           {resumes.length > 0 ? (
//             <div>
//               <Typography variant="subtitle1">Your existing resumes:</Typography>
//               <List>
//                 {resumes.map((resume) => (
//                   <ListItem key={resume._id}>
//                     <ListItemText primary={<Link to={`/resume/${resume._id}`}>{resume.title}</Link>} />
//                   </ListItem>
//                 ))}
//               </List>
//             </div>
//           ) : (
//             <Typography variant="body1">You don't have any resumes yet.</Typography>
//           )}
//         </ListItem>
//         <ListItem>
//           <Typography variant="body1">Edit profile</Typography>
//         </ListItem>
//       </List>
//     </Container>
//   );
// }

// export default Dashboard;

// src/components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes } from '../api/resumeApi';
// import { Container, Typography, List, ListItem, ListItemText, Button, AppBar, Toolbar } from '@mui/material';
// import { useAuth } from '../pages/AuthContext';

// function Dashboard() {
//   const { user } = useAuth();
//   const [resumes, setResumes] = useState([]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     // Fetch the user's resumes when the component mounts
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         setResumes(fetchedResumes);
//         setUsername(user ? user.username : "");
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };
//     fetchResumes();
//   }, [user]);

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button component={Link} to="/create-resume" color="inherit">Create Resume</Button>
//           <Button component={Link} to="/your-resumes" color="inherit">Your Resumes</Button>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         <Typography variant="h2">Dashboard</Typography>
//         <Typography variant="body1" gutterBottom>
//           Welcome to your dashboard, {username}! What would you like to do?
//         </Typography>
//         <List>
//           <ListItem>
//             <Button variant="contained" component={Link} to="/create-resume">Create a new resume</Button>
//           </ListItem>
//           <ListItem>
//             {resumes.length > 0 ? (
//               <div>
//                 <Typography variant="subtitle1">Your existing resumes:</Typography>
//                 <List>
//                   {resumes.map((resume) => (
//                     <ListItem key={resume._id}>
//                       <ListItemText primary={<Link to={`/resume/${resume._id}`}>{resume.title}</Link>} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </div>
//             ) : (
//               <Typography variant="body1">You don't have any resumes yet.</Typography>
//             )}
//           </ListItem>
//           <ListItem>
//            <Typography variant="body1">Edit profile</Typography>
//           </ListItem>

//         </List>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes } from '../api/resumeApi';
// import { Container, Typography, List, ListItem, ListItemText, Button, AppBar, Toolbar } from '@mui/material';
// import { useAuth } from '../pages/AuthContext';

// function Dashboard() {
//   const { user } = useAuth();
//   const [resumes, setResumes] = useState([]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     // Fetch the user's resumes when the component mounts
//     const fetchResumes = async () => {
//       try {
//          // Check if the user object exists and has an id property
//       if (user && user.id) {
//         // Fetch resumes for the logged-in user
//         const fetchedResumes = await getAllResumes(user.id); // Assuming the API takes user id as a parameter
//         setResumes(fetchedResumes);
//         setUsername(user ? user.username : "");
//       }
//      } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };
//     fetchResumes();
//   }, [user]);

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button component={Link} to="/create-resume" color="inherit">Create Resume</Button>
//           <Button component={Link} to="/your-resumes" color="inherit">Your Resumes</Button>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         <Typography variant="h2">Dashboard</Typography>
//         <Typography variant="body1" gutterBottom>
//           Welcome to your dashboard, {username}! What would you like to do?
//         </Typography>
//         <List>
//           <ListItem>
//             <Button variant="contained" component={Link} to="/create-resume">Create a new resume</Button>
//           </ListItem>
//           <ListItem>
//             {resumes.length > 0 ? (
//               <div>
//                 <Typography variant="subtitle1">Your existing resumes:</Typography>
//                 <List>
//                   {resumes.map((resume) => (
//                     <ListItem key={resume._id}>
//                       <ListItemText primary={<Link to={`/resume/${resume._id}`}>{resume.title}</Link>} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </div>
//             ) : (
//               <Typography variant="body1">You don't have any resumes yet.</Typography>
//             )}
//           </ListItem>
//         </List>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

// // components/Dashboard.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllResumes} from "../api/resumeApi";
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   AppBar,
//   Toolbar,
// } from "@mui/material";
// import { useAuth } from "../pages/AuthContext";

// function Dashboard() {
//   const { user } = useAuth();
//   const [resumes, setResumes] = useState([]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     // Fetch the user's resumes when the component mounts
//     const fetchResumes = async () => {
//       try {
//         // Check if the user object exists and has an id property
//         if (user && user.id) {
//           // Fetch resumes for the logged-in user
//           const fetchedResumes = await getAllResumes(user.id); // Assuming the API takes user id as a parameter
//           setResumes(fetchedResumes);
//           setUsername(user ? user.username : "");
//         }
//       } catch (error) {
//         console.error("Error fetching resumes:", error);
//       }
//     };
//     fetchResumes();
//   }, [user]);

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button component={Link} to="/create-resume" color="inherit">
//             Create Resume
//           </Button>
//           <Button component={Link} to="/all" color="inherit">
//             Your Resumes
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         <Typography variant="h2">Dashboard</Typography>
//         <Typography variant="body1" gutterBottom>
//           Welcome to your dashboard, {username}! What would you like to do?
//         </Typography>
//         <List>
//           <ListItem>
//             <Button variant="contained" component={Link} to="/create-resume">
//               Create a new resume
//             </Button>
//           </ListItem>
//           <ListItem>
//             {resumes.length > 0 ? (
//               <div>
//                 <Typography variant="subtitle1">
//                   Your existing resumes:
//                 </Typography>
//                 <List>
//                   {resumes.map((resume) => (
//                     <ListItem key={resume._id}>
//                       <ListItemText
//                         primary={
//                           <Link to={`/resume/${resume._id}`}>
//                             {resume.title}
//                           </Link>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </div>
//             ) : (
//               <Typography variant="body1">
//                 You don't have any resumes yet.
//               </Typography>
//             )}
//           </ListItem>
//         </List>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllResumes } from "../api/resumeApi"; // Import getAllResumes correctly
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   AppBar,
//   Toolbar,
// } from "@mui/material";
// import { useAuth } from "../pages/AuthContext";

// function Dashboard() {
//   const { user } = useAuth();
//   const [resumes, setResumes] = useState([]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         if (user && user.id) {
//           const fetchedResumes = await getAllResumes(user.id); // Fetch resumes for the logged-in user
//           setResumes(fetchedResumes);
//           setUsername(user ? user.username : "");
//         }
//       } catch (error) {
//         console.error("Error fetching resumes:", error);
//       }
//     };
//     fetchResumes();
//   }, [user]);

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button component={Link} to="/create-resume" color="inherit">
//             Create Resume
//           </Button>
//           <Button component={Link} to="/all" color="inherit">
//             Your Resumes
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         <Typography variant="h2">Dashboard</Typography>
//         <Typography variant="body1" gutterBottom>
//           Welcome to your dashboard, {username}! What would you like to do?
//         </Typography>
//         <List>
//           <ListItem>
//             <Button variant="contained" component={Link} to="/create-resume">
//               Create a new resume
//             </Button>
//           </ListItem>
//           <ListItem>
//             {resumes.length > 0 ? (
//               <div>
//                 <Typography variant="subtitle1">
//                   Your existing resumes:
//                 </Typography>
//                 <List>
//                   {resumes.map((resume) => (
//                     <ListItem key={resume._id}>
//                       <ListItemText
//                         primary={
//                           <Link to={`/resume/${resume._id}`}> {/* Update the route */}
//                             {resume.title}
//                           </Link>
//                         }
//                       />
//                     </ListItem>
//                   ))}
//                 </List>
//               </div>
//             ) : (
//               <Typography variant="body1">
//                 You don't have any resumes yet.
//               </Typography>
//             )}
//           </ListItem>
//         </List>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllResumes } from '../api/resumeApi';
// import { Container, Typography, List, ListItem, ListItemText, Button, AppBar, Toolbar } from '@mui/material';
// import { useAuth } from '../pages/AuthContext';

// function Dashboard() {
//   const { user } = useAuth();
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         console.log('Fetched Resumes:', fetchedResumes);
//         setResumes(fetchedResumes);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   // Provide a default value for the user object if it is null or undefined
//   const username = user ? user.username : '';

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button component={Link} to="/create-resume" color="inherit">
//             Create Resume
//           </Button>
//           <Button component={Link} to="/all" color="inherit">
//             Your Resumes
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="md">
//         <Typography variant="h2">Dashboard</Typography>
//         <Typography variant="body1" gutterBottom>
//           Welcome to your dashboard, {username}! What would you like to do?
//         </Typography>
//         <List>
//           <ListItem>
//             <Button variant="contained" component={Link} to="/create-resume">
//               Create a new resume
//             </Button>
//           </ListItem>
//           <ListItem>
//             {loading ? (
//               <Typography variant="body1">Loading...</Typography>
//             ) : error ? (
//               <Typography variant="body1">Error: {error}</Typography>
//             ) : (
//               <div>
//                 <Typography variant="subtitle1">Your existing resumes:</Typography>
//                 <List>
//                   {resumes.map((resume) => (
//                     <ListItem key={resume._id}>
//                       <ListItemText primary={resume.title} />
//                     </ListItem>
//                   ))}
//                 </List>
//               </div>
//             )}
//           </ListItem>
//         </List>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllResumes } from "../api/resumeApi";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useAuth } from "../pages/AuthContext";

function DashboardPage() {
  const { user } = useAuth();
  const [resumes, setResumes] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        if (user && user.id) {
          const fetchedResumes = await getAllResumes(user.id);
          setResumes(fetchedResumes);
          setUsername(user ? user.username : "");
        }
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };
    fetchResumes();
  }, [user]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ResumeRise
          </Typography>
          <Button component={Link} to="/create-resume" color="inherit">
            Create Resume
          </Button>
          <Button component={Link} to="/all" color="inherit">
            Your Resumes
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to your dashboard, {username}! What would you like to do?
        </Typography>
        <List>
          <ListItem>
            <Button variant="contained" component={Link} to="/create-resume">
              Create a new resume
            </Button>
          </ListItem>
          <ListItem>
            {resumes.length > 0 ? (
              <div>
                <Typography variant="subtitle1">
                  Your existing resumes:
                </Typography>
                <List>
                  {resumes.map((resume) => (
                    <ListItem key={resume._id}>
                      <ListItemText
                        primary={
                          <Link to={`/resume/${resume._id}`}>
                            {resume.title}
                          </Link>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : (
              <Typography variant="body1">
                You don't have any resumes yet.
              </Typography>
            )}
          </ListItem>
        </List>
      </Container>
    </div>
  );
}

export default DashboardPage;

