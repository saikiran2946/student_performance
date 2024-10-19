// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StudentPortal from './components/StudentPortal';
import TopStudents from './components/TopStudents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentPortal />} />
        <Route path="/top-students" element={<TopStudents />} />
      </Routes>
    </Router>
  );
}

export default App;
