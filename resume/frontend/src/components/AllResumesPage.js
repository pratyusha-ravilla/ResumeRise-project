// import React, { useState, useEffect } from 'react';
// import { getAllResumes } from '../api/resumeApi';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// const AllResumesPage = () => {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
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
//     <Container maxWidth="md">
//       <Typography variant="h2">All Resumes</Typography>
//       <List>
//         {resumes.map((resume) => (
//           <ListItem key={resume._id}>
//             <ListItemText primary={resume.title} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default AllResumesPage;

// import React, { useState, useEffect } from 'react';
// import { getAllResumes } from '../api/resumeApi';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// const AllResumesPage = () => {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         setResumes(fetchedResumes);
//         console.log(fetchedResumes);
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       }
//     };
//     fetchResumes();
//   }, []);

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h2">All Resumes</Typography>
//       <List>
//         {resumes.map((resume, ) => (
//           <ListItem key={resume._id}>
//             <ListItemText primary={resume.title} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default AllResumesPage;

// import React from 'react';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// const AllResumesPage = ({ resumes }) => {
//   // Check if resumes is undefined or null before mapping over it
//   if (!resumes) {
//     return (
//       <Container maxWidth="md">
//         <Typography variant="h2">Loading...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h2">All Resumes</Typography>
//       <List>
//         {resumes.map((resume) => (
//           <ListItem key={resume._id}>
//             <ListItemText primary={resume.title} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default AllResumesPage;



// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import { getAllResumes } from "../api/resumeApi";

// const AllResumesPage = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const fetchedResumes = await getAllResumes();
//         setResumes(fetchedResumes);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchResumes();
//   }, []);

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h2">All Resumes</Typography>
//       {loading ? (
//         <Typography variant="body1">Loading...</Typography>
//       ) : error ? (
//         <Typography variant="body1">Error: {error}</Typography>
//       ) : resumes.length === 0 ? (
//         <Typography variant="body1">No resumes found.</Typography>
//       ) : (
//         <List>
//           {resumes.map((resume) => (
//             <ListItem key={resume._id}>
//               <ListItemText primary={resume.title} />
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </Container>
//   );
// };

// export default AllResumesPage;



import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { getAllResumes } from "../api/resumeApi";

const AllResumesPage = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        // Assuming you have access to the user's ID
        const userId = "61d566e2f70a8e46a8b1e0c2"; // Replace with actual user ID
        const fetchedResumes = await getAllResumes(userId);
        setResumes(fetchedResumes);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h2">All Resumes</Typography>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : error ? (
        <Typography variant="body1">Error: {error}</Typography>
      ) : resumes.length === 0 ? (
        <Typography variant="body1">No resumes found.</Typography>
      ) : (
        <List>
          {resumes.map((resume) => (
            <ListItem key={resume.id}>
              <ListItemText primary={resume.title} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default AllResumesPage;


