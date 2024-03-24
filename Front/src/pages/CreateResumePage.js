// import axios from "axios";
// import React, { useState, useEffect, useContext } from "react";
// import "../assets/CreateResumePage.css";
// import { UserContext } from "./UserContext";

// const API_URL = "http://localhost:8000/api/resumes";

// function CreateResumePage() {
//   const { user } = useContext(UserContext);
//   const userId = user && user.id ? user.id : "";

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
//     } catch (error) {
//       console.error("Error creating resume:", error);
//     }
//   };

//   const validateData = (data) => {
//     console.log("Validating resume data:", data);
//     if (!data.userId) return false;

//     const requiredFields = [
//       "institute",
//       "degree",
//       "startDate",
//       "company",
//       "position",
//       "title",
//     ];
//     const sectionsToValidate = [
//       "education",
//       "workExperience",
//       "projects",
//       "certifications",
//     ];
//     for (const section of sectionsToValidate) {
//       for (const item of data[section]) {
//         for (const field of requiredFields) {
//           if (!item[field]) {
//             console.error(`Error: Field '${field}' is missing in ${section}.`);
//             return false;
//           }
//         }
//       }
//     }

//     return true;
//   };



// import axios from "axios";
// import React, { useState, useEffect, useContext } from "react";
// import "../assets/CreateResumePage.css";
// import { UserContext } from "./UserContext";

// const API_URL = "http://localhost:8000/api/resumes";

// function CreateResumePage() {
//   const { user } = useContext(UserContext);
//   const userId = user && user.id ? user.id : "";

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
//     if (
//       ["education", "workExperience", "projects", "certifications"].includes(
//         section
//       )
//     ) {
//       setResumeData((prevData) => ({
//         ...prevData,
//         [section]: prevData[section].map((item, i) =>
//           i === index ? { ...item, [fieldName]: value } : item
//         ),
//       }));
//     } else if (["skills", "languages", "hobbies"].includes(section)) {
//       setResumeData((prevData) => ({
//         ...prevData,
//         [section]: prevData[section].map((item, i) =>
//           i === index ? value : item
//         ),
//       }));
//     } else if (section === "references") {
//       setResumeData((prevData) => ({
//         ...prevData,
//         references: prevData.references.map((item, i) =>
//           i === index ? { ...item, [fieldName]: value } : item
//         ),
//       }));
//     } else {
//       setResumeData((prevData) => ({
//         ...prevData,
//         [section]: {
//           ...prevData[section],
//           [name]: value,
//         },
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
//     } catch (error) {
//       console.error("Error creating resume:", error);
//     }
//   };

//   const validateData = (data) => {
//     console.log("Validating resume data:", data);
//     if (!data.userId) return false;

//     const requiredFields = [
//       "institute",
//       "degree",
//       "startDate",
//       "company", // This field is required in the workExperience section
//       "position",
//       "title",
//     ];

//     const sectionsToValidate = [
//       { section: "education", label: "Education" },
//       { section: "workExperience", label: "Work Experience" },
//       { section: "projects", label: "Projects" },
//       { section: "certifications", label: "Certifications" },
//     ];

//     for (const { section, label } of sectionsToValidate) {
//       for (const item of data[section]) {
//         console.log(`Validating ${label}:`, item);
//         for (const field of requiredFields) {
//           if (!item[field]) {
//             console.error(`Error: Field '${field}' is missing in ${label}.`);
//             return false;
//           }
//         }
//       }
//     }

//     return true;
//   };


//   return (
//     <div className="container">
//       <h2>Create New Resume</h2>
//       <form onSubmit={handleSubmit}>

//         {/* Personal Information */}
//         <div className="section">
//           <h3>Personal Information</h3>
//           <div>
//             <label htmlFor="fullName">Full Name:</label>
//             <input
//               type="text"
//               name="fullName"
//               value={resumeData.personalInfo.fullName}
//               onChange={(e) => handleChange(e, "personalInfo")}
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={resumeData.personalInfo.email}
//               onChange={(e) => handleChange(e, "personalInfo")}
//               placeholder="Enter your email address"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="phone">Phone:</label>
//             <input
//               type="text"
//               name="phone"
//               value={resumeData.personalInfo.phone}
//               onChange={(e) => handleChange(e, "personalInfo")}
//               placeholder="Enter your phone number"
//             />
//           </div>
//           <div>
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={resumeData.personalInfo.address}
//               onChange={(e) => handleChange(e, "personalInfo")}
//               placeholder="Enter your address"
//             />
//           </div>
//         </div>

//         {/* Education */}
//         <div className="section">
//           <h3>Education</h3>
//           {resumeData.education.map((edu, index) => (
//             <div key={index}>
//               <div>
//                 <label htmlFor={`institute${index}`}>Institute:</label>
//                 <input
//                   type="text"
//                   name={`institute${index}`}
//                   value={edu.institute}
//                   onChange={(e) =>
//                     handleChange(e, "education", index, "institute")
//                   }
//                   placeholder="Enter institute name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor={`degree${index}`}>Degree:</label>
//                 <input
//                   type="text"
//                   name={`degree${index}`}
//                   value={edu.degree}
//                   onChange={(e) =>
//                     handleChange(e, "education", index, "degree")
//                   }
//                   placeholder="Enter degree"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`startDate${index}`}>Start Date:</label>
//                 <input
//                   type="date"
//                   name={`startDate${index}`}
//                   value={edu.startDate}
//                   onChange={(e) =>
//                     handleChange(e, "education", index, "startDate")
//                   }
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`endDate${index}`}>End Date:</label>
//                 <input
//                   type="date"
//                   name={`endDate${index}`}
//                   value={edu.endDate}
//                   onChange={(e) =>
//                     handleChange(e, "education", index, "endDate")
//                   }
//                 />
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 education: [
//                   ...prevData.education,
//                   { institute: "", degree: "", startDate: "", endDate: "" },
//                 ],
//               }))
//             }
//           >
//             Add Education
//           </button>
//         </div>

//         {/* Work Experience */}
//         <div className="section">
//           <h3>Work Experience</h3>

//           {resumeData.workExperience.map((exp, index) => (
//             <div key={index}>
//               <div>
//                 <label htmlFor={`company${index}`}>Company:</label>
//                 <input
//                   type="text"
//                   name={`company${index}`}
//                   value={exp.company} // Access company using exp.company
//                   onChange={(e) =>
//                     handleChange(e, "workExperience", index, "company")
//                   } // Pass field name as the fourth argument
//                   placeholder="Enter company name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`position${index}`}>Position:</label>
//                 <input
//                   type="text"
//                   name={`position${index}`}
//                   value={exp.position} // Access position using exp.position
//                   onChange={(e) =>
//                     handleChange(e, "workExperience", index, "position")
//                   } // Pass field name as the fourth argument
//                   placeholder="Enter position"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`startDateExp${index}`}>Start Date:</label>
//                 <input
//                   type="date"
//                   name={`startDateExp${index}`}
//                   value={exp.startDate}
//                   onChange={(e) =>
//                     handleChange(e, "workExperience", index, "startDate")
//                   } // Pass field name as the fourth argument
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`endDateExp${index}`}>End Date:</label>
//                 <input
//                   type="date"
//                   name={`endDateExp${index}`}
//                   value={exp.endDate}
//                   onChange={(e) =>
//                     handleChange(e, "workExperience", index, "endDate")
//                   } // Pass field name as the fourth argument
//                 />
//               </div>
//             </div>
//           ))}

//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 workExperience: [
//                   ...prevData.workExperience,
//                   { company: "", position: "", startDate: "", endDate: "" },
//                 ],
//               }))
//             }
//           >
//             Add Work Experience
//           </button>
//         </div>

//         {/* Skills */}
//         <div className="section">
//           <h3>Skills</h3>
//           {resumeData.skills.map((skill, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={skill}
//                 onChange={(e) => handleChange(e, "skills", index)}
//                 placeholder="Enter skill"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 skills: [...prevData.skills, ""],
//               }))
//             }
//           >
//             Add Skill
//           </button>
//         </div>

//         {/* Projects */}
//         <div className="section">
//           <h3>Projects</h3>
//           {resumeData.projects.map((project, index) => (
//             <div key={index}>
//               <div>
//                 <label htmlFor={`projectTitle${index}`}>Title:</label>
//                 <input
//                   type="text"
//                   name={`projectTitle${index}`}
//                   value={project.title} // Access title using project.title
//                   onChange={(e) => handleChange(e, "projects", index, "title")} // Pass field name as the fourth argument
//                   placeholder="Enter project title"
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`projectDescription${index}`}>
//                   Description:
//                 </label>
//                 <input
//                   type="text"
//                   name={`projectDescription${index}`}
//                   value={project.description} // Access description using project.description
//                   onChange={(e) =>
//                     handleChange(e, "projects", index, "description")
//                   } // Pass field name as the fourth argument
//                   placeholder="Enter project description"
//                 />
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 projects: [
//                   ...prevData.projects,
//                   { title: "", description: "" },
//                 ],
//               }))
//             }
//           >
//             Add Project
//           </button>
//         </div>

//         {/* Certifications */}
//         <div className="section">
//           <h3>Certifications</h3>
//           {resumeData.certifications.map((certification, index) => (
//             <div key={index}>
//               <div>
//                 <label htmlFor={`certificationTitle${index}`}>Title:</label>
//                 <input
//                   type="text"
//                   name={`certificationTitle${index}`}
//                   value={certification.title}
//                   /* Changed from resumeData.certifications.title to certification.title */
//                   onChange={(e) =>
//                     handleChange(e, "certifications", index, "title")
//                   } /* Pass "title" as fieldName */
//                   placeholder="Enter certification title"
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`certificationAuthority${index}`}>
//                   Authority:
//                 </label>
//                 <input
//                   type="text"
//                   name={`certificationAuthority${index}`}
//                   value={
//                     certification.authority
//                   } /* Changed from resumeData.certifications.authority to certification.authority */
//                   onChange={(e) =>
//                     handleChange(e, "certifications", index, "authority")
//                   } /* Pass "authority" as fieldName */
//                   placeholder="Enter certification authority"
//                 />
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 certifications: [
//                   ...prevData.certifications,
//                   { title: "", authority: "" },
//                 ],
//               }))
//             }
//           >
//             Add Certification
//           </button>
//         </div>

//         {/* Languages */}
//         <div className="section">
//           <h3>Languages</h3>
//           {resumeData.languages.map((language, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={language}
//                 onChange={(e) => handleChange(e, "languages", index)}
//                 placeholder="Enter language"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 languages: [...prevData.languages, ""],
//               }))
//             }
//           >
//             Add Language
//           </button>
//         </div>

//         {/* Hobbies */}
//         <div className="section">
//           <h3>Hobbies</h3>
//           {resumeData.hobbies.map((hobby, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={hobby}
//                 onChange={(e) => handleChange(e, "hobbies", index)}
//                 placeholder="Enter hobby"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 hobbies: [...prevData.hobbies, ""],
//               }))
//             }
//           >
//             Add Hobby
//           </button>
//         </div>

//         {/* References */}
//         <div className="section">
//           <h3>References</h3>
//           {resumeData.references.map((reference, index) => (
//             <div key={index}>
//               <div>
//                 <label htmlFor={`referenceName${index}`}>Name:</label>
//                 <input
//                   type="text"
//                   name={`referenceName${index}`}
//                   value={reference.name} // Access name using reference.name
//                   onChange={(e) => handleChange(e, "references", index, "name")} // Pass field name as the fourth argument
//                   placeholder="Enter reference name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`referenceDetails${index}`}>Details:</label>
//                 <input
//                   type="text"
//                   name={`referenceDetails${index}`}
//                   value={reference.details} // Access details using reference.details
//                   onChange={(e) =>
//                     handleChange(e, "references", index, "details")
//                   } // Pass field name as the fourth argument
//                   placeholder="Enter reference details"
//                 />
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setResumeData((prevData) => ({
//                 ...prevData,
//                 references: [...prevData.references, { name: "", details: "" }],
//               }))
//             }
//           >
//             Add Reference
//           </button>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CreateResumePage;




import axios from "axios";
import React, { useState, useContext } from "react";
import "../assets/CreateResumePage.css";
import { UserContext } from "./UserContext";

const API_URL = "http://localhost:8000/api/resumes";

function CreateResumePage() {
  const { user } = useContext(UserContext);
  const userId = user && user.id ? user.id : "";
 
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleChange = (e, section, index, fieldName) => {
    const { name, value } = e.target;
    if (
      ["education", "workExperience", "projects", "certifications"].includes(
        section
      )
    ) {
      setResumeData((prevData) => ({
        ...prevData,
        [section]: prevData[section].map((item, i) =>
          i === index ? { ...item, [fieldName]: value } : item
        ),
      }));
    } else if (["skills", "languages", "hobbies"].includes(section)) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, resumeData);
      console.log("Resume created successfully:", response.data);
    } catch (error) {
      console.error("Error creating resume:", error);
      setErrorMessage("An error occurred while creating the resume.");
    }
  };

  return (
        <div className="container">
          <h2>Create New Resume</h2>
          <form onSubmit={handleSubmit}>
    
            {/* Personal Information */}
            <div className="section">
              <h3>Personal Information</h3>
              <div>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={resumeData.personalInfo.fullName}
                  onChange={(e) => handleChange(e, "personalInfo")}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => handleChange(e, "personalInfo")}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => handleChange(e, "personalInfo")}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={resumeData.personalInfo.address}
                  onChange={(e) => handleChange(e, "personalInfo")}
                  placeholder="Enter your address"
                />
              </div>
            </div>
    
            {/* Education */}
            <div className="section">
              <h3>Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <div>
                    <label htmlFor={`institute${index}`}>Institute:</label>
                    <input
                      type="text"
                      name={`institute${index}`}
                      value={edu.institute}
                      onChange={(e) =>
                        handleChange(e, "education", index, "institute")
                      }
                      placeholder="Enter institute name"
                      required
                    />
                  </div>
    
                  <div>
                    <label htmlFor={`degree${index}`}>Degree:</label>
                    <input
                      type="text"
                      name={`degree${index}`}
                      value={edu.degree}
                      onChange={(e) =>
                        handleChange(e, "education", index, "degree")
                      }
                      placeholder="Enter degree"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`startDate${index}`}>Start Date:</label>
                    <input
                      type="date"
                      name={`startDate${index}`}
                      value={edu.startDate}
                      onChange={(e) =>
                        handleChange(e, "education", index, "startDate")
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor={`endDate${index}`}>End Date:</label>
                    <input
                      type="date"
                      name={`endDate${index}`}
                      value={edu.endDate}
                      onChange={(e) =>
                        handleChange(e, "education", index, "endDate")
                      }
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    education: [
                      ...prevData.education,
                      { institute: "", degree: "", startDate: "", endDate: "" },
                    ],
                  }))
                }
              >
                Add Education
              </button>
            </div>
    
            {/* Work Experience */}
            <div className="section">
              <h3>Work Experience</h3>
    
              {resumeData.workExperience.map((exp, index) => (
                <div key={index}>
                  <div>
                    <label htmlFor={`company${index}`}>Company:</label>
                    <input
                      type="text"
                      name={`company${index}`}
                      value={exp.company} // Access company using exp.company
                      onChange={(e) =>
                        handleChange(e, "workExperience", index, "company")
                      } // Pass field name as the fourth argument
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`position${index}`}>Position:</label>
                    <input
                      type="text"
                      name={`position${index}`}
                      value={exp.position} // Access position using exp.position
                      onChange={(e) =>
                        handleChange(e, "workExperience", index, "position")
                      } // Pass field name as the fourth argument
                      placeholder="Enter position"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`startDateExp${index}`}>Start Date:</label>
                    <input
                      type="date"
                      name={`startDateExp${index}`}
                      value={exp.startDate}
                      onChange={(e) =>
                        handleChange(e, "workExperience", index, "startDate")
                      } // Pass field name as the fourth argument
                    />
                  </div>
                  <div>
                    <label htmlFor={`endDateExp${index}`}>End Date:</label>
                    <input
                      type="date"
                      name={`endDateExp${index}`}
                      value={exp.endDate}
                      onChange={(e) =>
                        handleChange(e, "workExperience", index, "endDate")
                      } // Pass field name as the fourth argument
                    />
                  </div>
                </div>
              ))}
    
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    workExperience: [
                      ...prevData.workExperience,
                      { company: "", position: "", startDate: "", endDate: "" },
                    ],
                  }))
                }
              >
                Add Work Experience
              </button>
            </div>
    
            {/* Skills */}
            <div className="section">
              <h3>Skills</h3>
              {resumeData.skills.map((skill, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleChange(e, "skills", index)}
                    placeholder="Enter skill"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    skills: [...prevData.skills, ""],
                  }))
                }
              >
                Add Skill
              </button>
            </div>
    
            {/* Projects */}
            <div className="section">
              <h3>Projects</h3>
              {resumeData.projects.map((project, index) => (
                <div key={index}>
                  <div>
                    <label htmlFor={`projectTitle${index}`}>Title:</label>
                    <input
                      type="text"
                      name={`projectTitle${index}`}
                      value={project.title} // Access title using project.title
                      onChange={(e) => handleChange(e, "projects", index, "title")} // Pass field name as the fourth argument
                      placeholder="Enter project title"
                    />
                  </div>
                  <div>
                    <label htmlFor={`projectDescription${index}`}>
                      Description:
                    </label>
                    <input
                      type="text"
                      name={`projectDescription${index}`}
                      value={project.description} // Access description using project.description
                      onChange={(e) =>
                        handleChange(e, "projects", index, "description")
                      } // Pass field name as the fourth argument
                      placeholder="Enter project description"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    projects: [
                      ...prevData.projects,
                      { title: "", description: "" },
                    ],
                  }))
                }
              >
                Add Project
              </button>
            </div>
    
            {/* Certifications */}
            <div className="section">
              <h3>Certifications</h3>
              {resumeData.certifications.map((certification, index) => (
                <div key={index}>
                  <div>
                    <label htmlFor={`certificationTitle${index}`}>Title:</label>
                    <input
                      type="text"
                      name={`certificationTitle${index}`}
                      value={certification.title}
                      /* Changed from resumeData.certifications.title to certification.title */
                      onChange={(e) =>
                        handleChange(e, "certifications", index, "title")
                      } /* Pass "title" as fieldName */
                      placeholder="Enter certification title"
                    />
                  </div>
                  <div>
                    <label htmlFor={`certificationAuthority${index}`}>
                      Authority:
                    </label>
                    <input
                      type="text"
                      name={`certificationAuthority${index}`}
                      value={
                        certification.authority
                      } /* Changed from resumeData.certifications.authority to certification.authority */
                      onChange={(e) =>
                        handleChange(e, "certifications", index, "authority")
                      } /* Pass "authority" as fieldName */
                      placeholder="Enter certification authority"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    certifications: [
                      ...prevData.certifications,
                      { title: "", authority: "" },
                    ],
                  }))
                }
              >
                Add Certification
              </button>
            </div>
    
            {/* Languages */}
            <div className="section">
              <h3>Languages</h3>
              {resumeData.languages.map((language, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => handleChange(e, "languages", index)}
                    placeholder="Enter language"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    languages: [...prevData.languages, ""],
                  }))
                }
              >
                Add Language
              </button>
            </div>
    
            {/* Hobbies */}
            <div className="section">
              <h3>Hobbies</h3>
              {resumeData.hobbies.map((hobby, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={hobby}
                    onChange={(e) => handleChange(e, "hobbies", index)}
                    placeholder="Enter hobby"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    hobbies: [...prevData.hobbies, ""],
                  }))
                }
              >
                Add Hobby
              </button>
            </div>
    
            {/* References */}
            <div className="section">
              <h3>References</h3>
              {resumeData.references.map((reference, index) => (
                <div key={index}>
                  <div>
                    <label htmlFor={`referenceName${index}`}>Name:</label>
                    <input
                      type="text"
                      name={`referenceName${index}`}
                      value={reference.name} // Access name using reference.name
                      onChange={(e) => handleChange(e, "references", index, "name")} // Pass field name as the fourth argument
                      placeholder="Enter reference name"
                    />
                  </div>
                  <div>
                    <label htmlFor={`referenceDetails${index}`}>Details:</label>
                    <input
                      type="text"
                      name={`referenceDetails${index}`}
                      value={reference.details} // Access details using reference.details
                      onChange={(e) =>
                        handleChange(e, "references", index, "details")
                      } // Pass field name as the fourth argument
                      placeholder="Enter reference details"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setResumeData((prevData) => ({
                    ...prevData,
                    references: [...prevData.references, { name: "", details: "" }],
                  }))
                }
              >
                Add Reference
              </button>
            </div>
    

            {errorMessage && <div className="error">{errorMessage}</div>}
            
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default CreateResumePage;
