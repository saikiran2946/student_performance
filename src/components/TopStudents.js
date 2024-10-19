// src/components/TopStudents.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import axios from 'axios';

const TopStudents = () => {
  const [topStudents, setTopStudents] = useState([]);

  useEffect(() => {
    // Fetch the top students data from the server
    axios.get('/api/students/top').then((response) => {
      setTopStudents(response.data);
    });
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Top-Performing Students
      </Typography>

      <List>
        {topStudents.map((student, index) => (
          <ListItem key={index}>
            {index + 1}. {student.name} - GPA: {student.GPA}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TopStudents;
