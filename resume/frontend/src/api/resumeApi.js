


// import axios from "axios";
// import mongoose from "mongoose";

// const API_URL = "http://localhost:8000/api/resumes";

// // Get all resumes
// export const getAllResumes = async () => {
//   try {
//     console.log("Fetching all resumes...");
//     const response = await axios.get(`${API_URL}/all`);
//     console.log("Resumes fetched successfully:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching resumes:", error);
//     throw new Error(error.response.data.message);
//   }
// };

// // Get a single resume by ID
// export const getResumeById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// // Create a new resume
// export const createResume = async (resumeData) => {
//   try {
//     // Ensure userId is converted to ObjectId before sending
//     const userId = resumeData.userId;
//     const userIdObject = mongoose.Types.ObjectId(userId);

//     // Construct the updated resumeData object with userId as ObjectId
//     const updatedResumeData = {
//       ...resumeData,
//       userId: userIdObject,
//     };

//     const response = await axios.post(API_URL, updatedResumeData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// //Update a resume by ID
// export const updateResumeById = async (id, resumeData) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, resumeData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// // Delete a resume by ID
// export const deleteResumeById = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };

// export default getAllResumes;



import axios from "axios";
import mongoose from "mongoose";

const API_URL = "http://localhost:8000/api/resumes";


// Get all resumes for a specific user
// export const getAllResumes = async (userId) => {
//   try {
//     console.log("Fetching all resumes...");
//     const response = await axios.get(`${API_URL}/all?userId=${userId}`);
//     console.log("Resumes fetched successfully:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching resumes:", error);
//     throw new Error(error.response.data.message);
//   }
// };

export const getAllResumes = async (userId) => {
  try {
    console.log("Fetching all resumes...");
    const response = await axios.get(`${API_URL}/all`, {
      params: {
        userId: userId,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log("Resumes fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching resumes:", error);
    throw new Error(error.message);
  }
};


// Get a single resume by ID
export const getResumeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Create a new resume
export const createResume = async (userId, resumeData) => {
  try {
    // Ensure userId is converted to ObjectId before sending
    const userIdObject = mongoose.Types.ObjectId(userId);

    // Construct the updated resumeData object with userId as ObjectId
    const updatedResumeData = {
      ...resumeData,
      userId: userIdObject,
    };

    const response = await axios.post(API_URL, updatedResumeData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Update a resume by ID
export const updateResumeById = async (id, resumeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, resumeData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Delete a resume by ID
export const deleteResumeById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default getAllResumes;

