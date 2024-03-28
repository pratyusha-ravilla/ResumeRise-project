

// // pages/Home.js
// import React from 'react';
// import { AppBar, Toolbar, Button, Typography} from '@mui/material';
// import { Link } from 'react-router-dom';
// import HomeContent from '../components/Home';

// function Home() {
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             ResumeRise
//           </Typography>
//           <Button component={Link} to="/" color="inherit">Home</Button>
//           <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>
//           <Button component={Link} to="/register" color="inherit">Register</Button>
//           <Button component={Link} to="/login" color="inherit">Login</Button>
//           <Button component={Link} to="/create-resume" color="inherit">Create Your Resume</Button>
//           <Button component={Link} to="/resume-templates" color="inherit">Resume Templates</Button>
//         </Toolbar>
//       </AppBar>
//       <HomeContent />
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeContent from '../components/Home';

function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ResumeRise
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>
          <Button component={Link} to="/register" color="inherit">Register</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
          <Button component={Link} to="/create-resume" color="inherit">Create Your Resume</Button>
          <Button component={Link} to="/resume-templates" color="inherit">Resume Templates</Button>
        </Toolbar>
      </AppBar>
      <HomeContent />
    </div>
  );
}

export default Home;
