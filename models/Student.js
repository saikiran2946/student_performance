const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  academicPerformance: {
    type: Number,
    required: true,
  },
  consistency: {
    type: Number,
    required: true,
  },
  hackathonParticipation: {
    type: Number,
    required: true,
  },
  presentations: {
    type: Number,
    required: true,
  },
  contributions: {
    type: Number,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
