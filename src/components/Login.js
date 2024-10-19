// src/components/Login.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // Redirect to Admin or Student portal based on user type (for simplicity, redirecting to Admin here)
    navigate('/admin');
  };

  const handleLoginFailure = (response) => {
    console.log("Login Failed:", response);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Best-Performing Student Recognition System
      </Typography>
      <GoogleOAuthProvider clientId="131469685006-putk4kji5tfljdloq7l6vslqi9qdnf6k.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      </GoogleOAuthProvider>
      <Typography variant="body1" mt={2}>
        Login with Google to access your dashboard
      </Typography>
    </Box>
  );
};

export default Login;
