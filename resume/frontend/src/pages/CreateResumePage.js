// import axios from "axios";
// import React, { useState, useEffect, useContext } from "react";
// import {useNavigate} from 'react-router-dom';
// import "../assets/CreateResumePage.css";
// import { UserContext } from "./UserContext";

// const API_URL = "http://localhost:8000/api/resumes";

// function CreateResumePage() {
//   const { user } = useContext(UserContext);
//   const userId = user && user.id ? user.id : "";
//   const navigate = useNavigate();

//   const [resumeData, setResumeData] = useState({
//     userId: userId,
//     personalInfo: {
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//     },
//     education: [
//       {
//         institute: "",
//         degree: "",
//         startDate: "",
//         endDate: "",
//       },
//     ],
//     workExperience: [
//       {
//         company: "",
//         position: "",
//         startDate: "",
//         endDate: "",
//       },
//     ],
//     skills: [],
//     projects: [
//       {
//         title: "",
//         description: "",
//       },
//     ],
//     certifications: [
//       {
//         title: "",
//         authority: "",
//       },
//     ],
//     languages: [],
//     hobbies: [],
//     references: [
//       {
//         name: "",
//         details: "",
//       },
//     ],
//   });

//   useEffect(() => {
//     setResumeData((prevData) => ({ ...prevData, skills: [] }));
//   }, []);

//   const handleChange = (e, section, index, fieldName) => {
//     const { name, value } = e.target;
//     if (section === 'education' || section === 'workExperience' || section === 'projects' || section === 'certifications') {
//       setResumeData(prevData => ({
//         ...prevData,
//         [section]: prevData[section].map((item, i) => (i === index ? { ...item, [fieldName]: value } : item))
//       }));
//     } else if (section === 'skills' || section === 'languages' || section === 'hobbies') {
//       setResumeData(prevData => ({
//         ...prevData,
//         [section]: prevData[section].map((item, i) => (i === index ? value : item))
//       }));
//     } else if (section === 'references') {
//       setResumeData(prevData => ({
//         ...prevData,
//         references: prevData.references.map((item, i) => (i === index ? { ...item, [fieldName]: value } : item))
//       }));
//     } else {
//       setResumeData(prevData => ({
//         ...prevData,
//         [section]: {
//           ...prevData[section],
//           [name]: value
//         }
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Submitting resume data:", resumeData);

//     const isDataValid = validateData(resumeData);
//     if (!isDataValid) {
//       console.error("Error: Some required fields are missing.");
//       return;
//     }

//     try {
//       const response = await axios.post(API_URL, resumeData);
//       console.log("Resume created successfully:", response.data);
//       navigate('/dashboard')
//     } catch (error) {
//       console.error("Error creating resume:", error);
//     }
//   };

//   const validateData = (data) => {
//     console.log("Validating resume data:", data);
//     if (!data.userId) return false;

//     const requiredFields = {
//       education: ["institute", "degree", "startDate", "endDate"],
//       workExperience: ["company", "position", "startDate", "endDate"],
//       projects: ["title", "description"],
//       certifications: ["title", "authority"],
//     };

//     for (const section in requiredFields) {
//       for (const item of data[section]) {
//         for (const field of requiredFields[section]) {
//           if (!item[field]) {
//             console.error(`Error: Field '${field}' is missing in ${section}.`);
//             return false;
//           }
//         }
//       }
//     }

//     return true;
//   };

// return (
//   <div className="container">

//     <h2>Create New Resume</h2>
//     <form onSubmit={handleSubmit}>

//       {/* Personal Information */}
//       <div className="section">
//         <h3>Personal Information</h3>
//         <div>
//           <label htmlFor="fullName">Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={resumeData.personalInfo.fullName}
//             onChange={(e) => handleChange(e, "personalInfo")}
//             placeholder="Enter your full name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={resumeData.personalInfo.email}
//             onChange={(e) => handleChange(e, "personalInfo")}
//             placeholder="Enter your email address"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="text"
//             name="phone"
//             value={resumeData.personalInfo.phone}
//             onChange={(e) => handleChange(e, "personalInfo")}
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div>
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={resumeData.personalInfo.address}
//             onChange={(e) => handleChange(e, "personalInfo")}
//             placeholder="Enter your address"
//           />
//         </div>
//       </div>

//       {/* Education */}
//       <div className="section">
//         <h3>Education</h3>
//         {resumeData.education.map((edu, index) => (
//           <div key={index}>
//             <div>
//               <label htmlFor={`institute${index}`}>Institute:</label>
//               <input
//                 type="text"
//                 name={`institute${index}`}
//                 value={edu.institute}
//                 onChange={(e) =>
//                   handleChange(e, "education", index, "institute")
//                 }
//                 placeholder="Enter institute name"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor={`degree${index}`}>Degree:</label>
//               <input
//                 type="text"
//                 name={`degree${index}`}
//                 value={edu.degree}
//                 onChange={(e) =>
//                   handleChange(e, "education", index, "degree")
//                 }
//                 placeholder="Enter degree"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor={`startDate${index}`}>Start Date:</label>
//               <input
//                 type="date"
//                 name={`startDate${index}`}
//                 value={edu.startDate}
//                 onChange={(e) =>
//                   handleChange(e, "education", index, "startDate")
//                 }
//               />
//             </div>
//             <div>
//               <label htmlFor={`endDate${index}`}>End Date:</label>
//               <input
//                 type="date"
//                 name={`endDate${index}`}
//                 value={edu.endDate}
//                 onChange={(e) =>
//                   handleChange(e, "education", index, "endDate")
//                 }
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               education: [
//                 ...prevData.education,
//                 { institute: "", degree: "", startDate: "", endDate: "" },
//               ],
//             }))
//           }
//         >
//           Add Education
//         </button>
//       </div>

//       {/* Work Experience */}
//       <div className="section">
//         <h3>Work Experience</h3>

//         {resumeData.workExperience.map((exp, index) => (
//           <div key={index}>
//             <div>
//               <label htmlFor={`company${index}`}>Company:</label>
//               <input
//                 type="text"
//                 name={`company${index}`}
//                 value={exp.company} // Access company using exp.company
//                 onChange={(e) =>
//                   handleChange(e, "workExperience", index, "company")
//                 } // Pass field name as the fourth argument
//                 placeholder="Enter company name"

//               />
//             </div>
//             <div>
//               <label htmlFor={`position${index}`}>Position:</label>
//               <input
//                 type="text"
//                 name={`position${index}`}
//                 value={exp.position} // Access position using exp.position
//                 onChange={(e) =>
//                   handleChange(e, "workExperience", index, "position")
//                 } // Pass field name as the fourth argument
//                 placeholder="Enter position"

//               />
//             </div>
//             <div>
//               <label htmlFor={`startDateExp${index}`}>Start Date:</label>
//               <input
//                 type="date"
//                 name={`startDateExp${index}`}
//                 value={exp.startDate}
//                 onChange={(e) =>
//                   handleChange(e, "workExperience", index, "startDate")
//                 } // Pass field name as the fourth argument
//               />
//             </div>
//             <div>
//               <label htmlFor={`endDateExp${index}`}>End Date:</label>
//               <input
//                 type="date"
//                 name={`endDateExp${index}`}
//                 value={exp.endDate}
//                 onChange={(e) =>
//                   handleChange(e, "workExperience", index, "endDate")
//                 } // Pass field name as the fourth argument
//               />
//             </div>
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               workExperience: [
//                 ...prevData.workExperience,
//                 { company: "", position: "", startDate: "", endDate: "" },
//               ],
//             }))
//           }
//         >
//           Add Work Experience
//         </button>
//       </div>

//       {/* Skills */}
//       <div className="section">
//         <h3>Skills</h3>
//         {resumeData.skills.map((skill, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={skill}
//               onChange={(e) => handleChange(e, "skills", index)}
//               placeholder="Enter skill"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               skills: [...prevData.skills, ""],
//             }))
//           }
//         >
//           Add Skill
//         </button>
//       </div>

//       {/* Projects */}
//       <div className="section">
//         <h3>Projects</h3>
//         {resumeData.projects.map((project, index) => (
//           <div key={index}>
//             <div>
//               <label htmlFor={`projectTitle${index}`}>Title:</label>
//               <input
//                 type="text"
//                 name={`projectTitle${index}`}
//                 value={project.title} // Access title using project.title
//                 onChange={(e) => handleChange(e, "projects", index, "title")} // Pass field name as the fourth argument
//                 placeholder="Enter project title"
//               />
//             </div>
//             <div>
//               <label htmlFor={`projectDescription${index}`}>
//                 Description:
//               </label>
//               <input
//                 type="text"
//                 name={`projectDescription${index}`}
//                 value={project.description} // Access description using project.description
//                 onChange={(e) =>
//                   handleChange(e, "projects", index, "description")
//                 } // Pass field name as the fourth argument
//                 placeholder="Enter project description"
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               projects: [
//                 ...prevData.projects,
//                 { title: "", description: "" },
//               ],
//             }))
//           }
//         >
//           Add Project
//         </button>
//       </div>

//       {/* Certifications */}
//       <div className="section">
//         <h3>Certifications</h3>
//         {resumeData.certifications.map((certification, index) => (
//           <div key={index}>
//             <div>
//               <label htmlFor={`certificationTitle${index}`}>Title:</label>
//               <input
//                 type="text"
//                 name={`certificationTitle${index}`}
//                 value={certification.title}
//                 /* Changed from resumeData.certifications.title to certification.title */
//                 onChange={(e) =>
//                   handleChange(e, "certifications", index, "title")
//                 } /* Pass "title" as fieldName */
//                 placeholder="Enter certification title"
//               />
//             </div>
//             <div>
//               <label htmlFor={`certificationAuthority${index}`}>
//                 Authority:
//               </label>
//               <input
//                 type="text"
//                 name={`certificationAuthority${index}`}
//                 value={
//                   certification.authority
//                 } /* Changed from resumeData.certifications.authority to certification.authority */
//                 onChange={(e) =>
//                   handleChange(e, "certifications", index, "authority")
//                 } /* Pass "authority" as fieldName */
//                 placeholder="Enter certification authority"
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               certifications: [
//                 ...prevData.certifications,
//                 { title: "", authority: "" },
//               ],
//             }))
//           }
//         >
//           Add Certification
//         </button>
//       </div>

//       {/* Languages */}
//       <div className="section">
//         <h3>Languages</h3>
//         {resumeData.languages.map((language, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={language}
//               onChange={(e) => handleChange(e, "languages", index)}
//               placeholder="Enter language"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               languages: [...prevData.languages, ""],
//             }))
//           }
//         >
//           Add Language
//         </button>
//       </div>

//       {/* Hobbies */}
//       <div className="section">
//         <h3>Hobbies</h3>
//         {resumeData.hobbies.map((hobby, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               value={hobby}
//               onChange={(e) => handleChange(e, "hobbies", index)}
//               placeholder="Enter hobby"
//             />
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               hobbies: [...prevData.hobbies, ""],
//             }))
//           }
//         >
//           Add Hobby
//         </button>
//       </div>

//       {/* References */}
//       <div className="section">
//         <h3>References</h3>
//         {resumeData.references.map((reference, index) => (
//           <div key={index}>
//             <div>
//               <label htmlFor={`referenceName${index}`}>Name:</label>
//               <input
//                 type="text"
//                 name={`referenceName${index}`}
//                 value={reference.name} // Access name using reference.name
//                 onChange={(e) => handleChange(e, "references", index, "name")} // Pass field name as the fourth argument
//                 placeholder="Enter reference name"
//               />
//             </div>
//             <div>
//               <label htmlFor={`referenceDetails${index}`}>Details:</label>
//               <input
//                 type="text"
//                 name={`referenceDetails${index}`}
//                 value={reference.details} // Access details using reference.details
//                 onChange={(e) =>
//                   handleChange(e, "references", index, "details")
//                 } // Pass field name as the fourth argument
//                 placeholder="Enter reference details"
//               />
//             </div>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={() =>
//             setResumeData((prevData) => ({
//               ...prevData,
//               references: [...prevData.references, { name: "", details: "" }],
//             }))
//           }
//         >
//           Add Reference
//         </button>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//     {/* {submitError && <p className="error">{submitError}</p>} */}
//   </div>
// );
// }
// export default CreateResumePage;



import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  Grid,
} from "@mui/material";
import { UserContext } from "./UserContext";

const API_URL = "http://localhost:8000/api/resumes";

function CreateResumePage() {
  const { user } = useContext(UserContext);
  const userId = user && user.id ? user.id : "";
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState({
    userId: userId,
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [
      {
        institute: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    workExperience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [],
    projects: [
      {
        title: "",
        description: "",
      },
    ],
    certifications: [
      {
        title: "",
        authority: "",
      },
    ],
    languages: [],
    hobbies: [],
    references: [
      {
        name: "",
        details: "",
      },
    ],
  });

  useEffect(() => {
    setResumeData((prevData) => ({ ...prevData, skills: [] }));
  }, []);

  const handleChange = (e, section, index, fieldName) => {
    const { name, value } = e.target;
    if (section === "personalInfo") {
      setResumeData((prevData) => ({
        ...prevData,
        personalInfo: {
          ...prevData.personalInfo,
          [name]: value,
        },
      }));
    } else if (
      section === "education" ||
      section === "workExperience" ||
      section === "projects" ||
      section === "certifications"
    ) {
      setResumeData((prevData) => ({
        ...prevData,
        [section]: prevData[section].map((item, i) =>
          i === index ? { ...item, [fieldName]: value } : item
        ),
      }));
    } else if (
      section === "skills" ||
      section === "languages" ||
      section === "hobbies"
    ) {
      setResumeData((prevData) => ({
        ...prevData,
        [section]: prevData[section].map((item, i) =>
          i === index ? value : item
        ),
      }));
    } else if (section === "references") {
      setResumeData((prevData) => ({
        ...prevData,
        references: prevData.references.map((item, i) =>
          i === index ? { ...item, [fieldName]: value } : item
        ),
      }));
    } else {
      setResumeData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [name]: value,
        },
      }));
    }
  };

  const handleAddItem = (section) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: [
        ...prevData[section],
        section === "education"
          ? { institute: "", degree: "", startDate: "", endDate: "" }
          : section === "workExperience"
          ? { company: "", position: "", startDate: "", endDate: "" }
          : { name: "", details: "" },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting resume data:", resumeData);

    const isDataValid = validateData(resumeData);
    if (!isDataValid) {
      console.error("Error: Some required fields are missing.");
      return;
    }

    try {
      const response = await axios.post(API_URL, resumeData);
      console.log("Resume created successfully:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating resume:", error);
    }
  };

  const validateData = (data) => {
    console.log("Validating resume data:", data);
    if (!data.userId) return false;

    const requiredFields = {
      education: ["institute", "degree", "startDate", "endDate"],
      workExperience: ["company", "position", "startDate", "endDate"],
      projects: ["title", "description"],
      certifications: ["title", "authority"],
    };

    for (const section in requiredFields) {
      for (const item of data[section]) {
        for (const field of requiredFields[section]) {
          if (!item[field]) {
            console.error(`Error: Field '${field}' is missing in ${section}.`);
            return false;
          }
        }
      }
    }

    return true;
  };


  return (
    <Container maxWidth="md" sx={{mt: 10}} >
      <Typography variant="h2" gutterBottom>
        Create New Resume
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Paper elevation={3} sx={{ p: 5, mb: 4, borderRadius: 4 }}>
          <Typography variant="h4" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={resumeData.personalInfo.fullName}
                onChange={(e) => handleChange(e, "personalInfo", "fullName")}
                
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={resumeData.personalInfo.email}
                onChange={(e) => handleChange(e, "personalInfo", "email")}
               
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                name="phone"
                value={resumeData.personalInfo.phone}
                onChange={(e) => handleChange(e, "personalInfo", "phone")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="address"
                value={resumeData.personalInfo.address}
                onChange={(e) => handleChange(e, "personalInfo", "address")}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Education */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
       <Typography variant="h5" gutterBottom>
             Education
      </Typography>
        {resumeData.education.map((edu, index) => (
       <Grid container spacing={2} key={index}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Institute"
          variant="outlined"
          fullWidth
          value={edu.institute}
          onChange={(e) =>
            handleChange(e, "education", index, "institute")
          }
          sx={{ mt: 4 }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Degree"
          variant="outlined"
          fullWidth
          value={edu.degree}
          onChange={(e) => handleChange(e, "education", index, "degree")}
          sx={{ mt: 4 }}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          // label="Start Date"
          variant="outlined"
          type="date"
          fullWidth
          value={edu.startDate}
          onChange={(e) =>
            handleChange(e, "education", index, "startDate")
          }
          
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          // label="End Date"
          variant="outlined"
          type="date"
          fullWidth
          value={edu.endDate}
          onChange={(e) =>
            handleChange(e, "education", index, "endDate")
          }
        />
      </Grid>
    </Grid>
  ))}
    <Button
    variant="contained"
    color="primary"
    onClick={() => handleAddItem("education")}
    sx={{ mt: 2 }}
      >
    Add Education
      </Button>
        </Paper>

        {/* Work Experience */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
          <Typography variant="h5" gutterBottom>
            Work Experience
          </Typography>
          {resumeData.workExperience.map((exp, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={12} sm={6}>
              <TextField
                label="Company"
                variant="outlined"
                fullWidth
                value={exp.company}
                onChange={(e) =>
                  handleChange(e, "workExperience", index, "company")
                }
                sx={{ mt: 4 }}
                required
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                label="Position"
                variant="outlined"
                fullWidth
                value={exp.position}
                onChange={(e) =>
                  handleChange(e, "workExperience", index, "position")
                }
                sx={{ mt: 4 }}
                required
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                // label="Start Date"
                variant="outlined"
                type="date"
                fullWidth
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(e, "workExperience", index, "startDate")
                }
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                // label="End Date"
                variant="outlined"
                type="date"
                fullWidth
                value={exp.endDate}
                onChange={(e) =>
                  handleChange(e, "workExperience", index, "endDate")
                }
              />
              </Grid>
            </Grid>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddItem("workExperience")}
            sx={{ mt: 2 }}
          >
            Add Work Experience
          </Button>
        </Paper>

{/* Skills */}
<Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
  <Typography variant="h5" gutterBottom>
    Skills
  </Typography>
  {resumeData.skills.map((skill, index) => (
    <Grid container spacing={2} key={index}>
     <Grid item xs={12} sm={6}>
        <TextField
          label="Skill"
          variant="outlined"
          fullWidth
          value={skill}
          onChange={(e) => handleChange(e, "skills", index)}
          placeholder="Enter skill"
          sx={{ mt: 2 }}
        />
        </Grid>
      </Grid>
    
  ))}
  <Button
    variant="contained"
    color="primary"
    onClick={() =>
      setResumeData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, ""],
      }))
    }
    sx={{ mt: 2 }}
  >
    Add Skill
  </Button>
</Paper>


      {/* Projects */}
<Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
  <Typography variant="h5" gutterBottom>
    Projects
  </Typography>
  {resumeData.projects.map((project, index) => (
    <Grid container spacing={2} key={index}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={project.title}
          onChange={(e) => handleChange(e, "projects", index, "title")}
          placeholder="Enter project title" sx={{ mt: 2 }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={project.description}
          onChange={(e) => handleChange(e, "projects", index, "description")}
          placeholder="Enter project description"
          sx={{ mt: 2 }}
        />
      </Grid>
    </Grid>
  ))}
  <Button
    variant="contained"
    color="primary"
    onClick={() => handleAddItem("projects")}
    sx={{ mt: 2 }}
  >
    Add Project
  </Button>
</Paper>


      {/* Certifications */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
        <Typography variant="h5" gutterBottom>
           Certifications
          </Typography>
  {resumeData.certifications.map((certification, index) => (
    <Grid container spacing={2} key={index}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={certification.title}
          onChange={(e) => handleChange(e, "certifications", index, "title")}
          placeholder="Enter certification title"
          sx={{ mt: 2 }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Authority"
          variant="outlined"
          fullWidth
          value={certification.authority}
          onChange={(e) => handleChange(e, "certifications", index, "authority")}
          placeholder="Enter certification authority"
          sx={{ mt: 2 }}
        />
      </Grid>
    </Grid>
  ))}
  <Button
    variant="contained"
    color="primary"
    onClick={() => handleAddItem("certifications")}
    sx={{ mt: 2 }}
  >
    Add Certification
  </Button>
      </Paper>

      {/* Languages */}
       <Paper elevation={3} sx={{ p: 4, mb:4, borderRadius: 4 }}>
       <Typography variant="h5" gutterBottom>
         Languages
      </Typography>
        {resumeData.languages.map((language, index) => (
           <Grid container spacing={2} key={index}>
            <Grid item xs={12} sm={6}>
          <TextField
        label="Language"
        variant="outlined"
        fullWidth
        value={language}
        onChange={(e) => handleChange(e, "languages", index)}
        placeholder="Enter language"
        sx={{ mb: 2 }}
      />
      </Grid>
    </Grid>
  ))}
  <Button
    variant="contained"
    color="primary"
    onClick={() =>
      setResumeData((prevData) => ({
        ...prevData,
        languages: [...prevData.languages, ""],
      }))
    }
    sx={{ mt: 2 }}
  >
    Add Language
  </Button>
       </Paper>


       {/* Hobbies */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
  <Typography variant="h5" gutterBottom>
    Hobbies
  </Typography>
  {resumeData.hobbies.map((hobby, index) => (
    <Grid container spacing={2} key={index}>
       <Grid item xs={12} sm={6}>
      <TextField
        label="Hobby"
        variant="outlined"
        fullWidth
        value={hobby}
        onChange={(e) => handleChange(e, "hobbies", index)}
        placeholder="Enter hobby"
        sx={{ mb: 2 }}
      />
      </Grid>
    </Grid>
  ))}
  <Button
    variant="contained"
    color="primary"
    onClick={() =>
      setResumeData((prevData) => ({
        ...prevData,
        hobbies: [...prevData.hobbies, ""],
      }))
    }
    sx={{ mt: 2 }}
  >
    Add Hobby
  </Button>
      </Paper>

       {/* References */}
       <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 4 }}>
       <Typography variant="h5" gutterBottom>
       References
       </Typography>
         {resumeData.references.map((reference, index) => (
       <Grid container spacing={2} key={index}>
         <Grid item xs={12} sm={6}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={reference.name}
          onChange={(e) => handleChange(e, "references", index, "name")}
          placeholder="Enter reference name"
          sx={{ mt: 2 }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Details"
          variant="outlined"
          fullWidth
          value={reference.details}
          onChange={(e) => handleChange(e, "references", index, "details")}
          placeholder="Enter reference details"
          sx={{ mt: 2 }}
        />
      </Grid>
    </Grid>
  ))}
     <Button
    variant="contained"
    color="primary"
    onClick={() => handleAddItem("references")}
    sx={{ mt: 2 }}
  >
    Add Reference
       </Button>
       </Paper>

      
       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <Button
    type="submit"
    variant="contained"
    color="primary"
    sx={{
      backgroundColor: "#4caf50", // Custom background color
      '&:hover': {
        backgroundColor: "#45a049", // Custom hover background color
      },
    }}
  >
    Submit
  </Button>
</div>



       
      </form>
    </Container>
  );
}

export default CreateResumePage;




