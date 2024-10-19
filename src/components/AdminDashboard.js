// src/components/AdminDashboard.js
import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';

const AdminDashboard = () => {
  const [academicData, setAcademicData] = useState(null);
  const [extraData, setExtraData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic (you can use Axios to upload this to the server)
    console.log(file);
  };

  const handleCriteriaChange = (e) => {
    const updatedCriteria = e.target.value;
    // Logic to update ranking criteria on the server
    console.log("Updated Criteria:", updatedCriteria);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Upload Academic Data */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Upload Student Academic Data:</Typography>
          <Button variant="contained" component="label">
            Upload Academic Data
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
        </Grid>

        {/* Upload Extracurricular Data */}
        <Grid item xs={12}>
          <Typography variant="body1">Upload Student Extracurricular Data:</Typography>
          <Button variant="contained" component="label">
            Upload Extracurricular Data
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
        </Grid>

        {/* Set Ranking Criteria */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Set Ranking Criteria Weights"
            variant="outlined"
            onChange={handleCriteriaChange}
          />
        </Grid>

        {/* View Top-Performing Students */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={() => window.location.href = '/top-students'}>
            View Top-Performing Students
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
