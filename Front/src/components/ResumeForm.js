

// // components/ResumeForm.js

// import React, { useState } from 'react';

// const ResumeForm = () => {
//   const [resumeData, setResumeData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     education: [],
//     workExperience: [],
//     skills: [],
//     projects: [],
//     certifications: [],
//     languages: [],
//     hobbies: [],
//     references: [],
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., calling an API to create a new resume
//     console.log('Submitted Resume Data:', resumeData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResumeData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="fullName">Full Name:</label>
//         <input type="text" name="fullName" value={resumeData.fullName} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" name="email" value={resumeData.email} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="phone">Phone:</label>
//         <input type="text" name="phone" value={resumeData.phone} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input type="text" name="address" value={resumeData.address} onChange={handleChange} />
//       </div>
//       {/* Add more fields for education, work experience, skills, projects, etc. */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ResumeForm;



import React, { useState } from 'react';

const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    education: [],
    workExperience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    hobbies: [],
    references: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., calling an API to create a new resume
    console.log('Submitted Resume Data:', resumeData);
    // Reset form fields after submission
    setResumeData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      education: [],
      workExperience: [],
      skills: [],
      projects: [],
      certifications: [],
      languages: [],
      hobbies: [],
      references: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (field, index, e) => {
    const { value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [field]: prevData[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleArrayAdd = (field) => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ''],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" value={resumeData.fullName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={resumeData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" value={resumeData.phone} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" name="address" value={resumeData.address} onChange={handleChange} />
      </div>

      {/* Skills Fields */}
      <div>
        <label>Skills:</label>
        {resumeData.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange('skills', index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleArrayAdd('skills')}>
          Add Skill
        </button>
      </div>

      {/* Projects Fields */}
      <div>
        <label>Projects:</label>
        {resumeData.projects.map((project, index) => (
          <div key={index}>
            <input
              type="text"
              value={project}
              onChange={(e) => handleArrayChange('projects', index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleArrayAdd('projects')}>
          Add Project
        </button>
      </div>

      {/* Certifications Fields */}
      <div>
        <label>Certifications:</label>
        {resumeData.certifications.map((certification, index) => (
          <div key={index}>
            <input
              type="text"
              value={certification}
              onChange={(e) => handleArrayChange('certifications', index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleArrayAdd('certifications')}>
          Add Certification
        </button>
      </div>

      {/* Languages Fields */}
      <div>
        <label>Languages:</label>
        {resumeData.languages.map((language, index) => (
          <div key={index}>
            <input
              type="text"
              value={language}
              onChange={(e) => handleArrayChange('languages', index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleArrayAdd('languages')}>
          Add Language
        </button>
      </div>

      {/* Hobbies Fields */}
      <div>
        <label>Hobbies:</label>
        {resumeData.hobbies.map((hobby, index) => (
          <div key={index}>
            <input
              type="text"
              value={hobby}
              onChange={(e) => handleArrayChange('hobbies', index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleArrayAdd('hobbies')}>
          Add Hobby
        </button>
      </div>

      {/* References Fields */}
      <div>
        <label>References:</label>
        {resumeData.references.map((reference, index) => (
          <div key={index}>
            <input
              type="text"
              value={reference}
              onChange={(e) => handleArrayChange('references', index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={() => handleArrayAdd('references')}>
          Add Reference
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;



