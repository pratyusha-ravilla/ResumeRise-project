// const mongoose = require('mongoose');

// const resumeSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the resume
//     personalInfo: {
//         fullName: { type: String, required: true },
//         email: { type: String, required: true },
//         phone: String,
//         address: String,
//         // Add more personal information fields as needed
//     },
//     education: [{
//         institute: { type: String, required: true },
//         degree: { type: String, required: true },
//         startDate: { type: Date, required: true },
//         endDate: Date,
//         // Add more education details as needed
//     }],
//     workExperience: [{
//         company: { type: String, required: true },
//         position: { type: String, required: true },
//         startDate: { type: Date, required: true },
//         endDate: Date,
//         // Add more work experience details as needed
//     }],
//     skills: [{ type: String, required: true }],
//     projects: [{
//         title: { type: String, required: true },
//         description: String,
//         // Add more project details as needed
//     }],
//     certifications: [{
//         title: { type: String, required: true },
//         authority: String,
//         // Add more certification details as needed
//     }],
//     languages: [{ type: String }],
//     hobbies: [{ type: String }],
//     references: [{
//         name: String,
//         reference: String,
       
//     }],
//     // Add more sections as needed
// }, { timestamps: true });

// module.exports = mongoose.model('Resume', resumeSchema);

const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the resume
    personalInfo: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: String,
        address: String,
        // Add more personal information fields as needed
    },
    education: [{
        institute: { type: String, required: true },
        degree: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: Date,
        // Add more education details as needed
    }],
    workExperience: [{
        company: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: Date,
        // Add more work experience details as needed
    }],
    skills: [{ type: String, required: true }],
    projects: [{
        title: { type: String, required: true },
        description: String,
        // Add more project details as needed
    }],
    certifications: [{
        title: { type: String, required: true },
        authority: String,
        // Add more certification details as needed
    }],
    languages: [{ type: String }],
    hobbies: [{ type: String }],
    references: [{
        name: String,
        reference: String,
       
    }],
    // Add more sections as needed
}, { timestamps: true });

// Ensure userId is converted to ObjectId before saving
resumeSchema.pre('save', function(next) {
    if (this.userId && typeof this.userId === 'string') {
        this.userId = mongoose.Types.ObjectId(this.userId);
    }
    next();
});

module.exports = mongoose.model('Resume', resumeSchema);

