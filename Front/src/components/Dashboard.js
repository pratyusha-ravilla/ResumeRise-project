import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllResumes } from '../api/resumeApi';

function Dashboard() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    // Fetch the user's resumes when the component mounts
    const fetchResumes = async () => {
      try {
        const fetchedResumes = await getAllResumes();
        setResumes(fetchedResumes);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };
    fetchResumes();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard! What would you like to do?</p>
      <ul>
        <li><Link to="/create-resume">Create a new resume</Link></li>
        <li>
          {resumes.length > 0 ? (
            <div>
              <p>Your existing resumes:</p>
              <ul>
                {resumes.map((resume) => (
                  <li key={resume._id}>
                    <Link to={`/resume/${resume._id}`}>{resume.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>You don't have any resumes yet.</p>
          )}
        </li>
        <li>Edit profile</li>
        {/* Add more options as needed */}
      </ul>
    </div>
  );
}

export default Dashboard;

