import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ตัวอย่างการเก็บข้อมูลลงใน localStorage
    localStorage.setItem('user', JSON.stringify({ user_name: username, password }));
    window.location.href = '/'; // เปลี่ยนเส้นทางไปยังหน้าหลัก
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <AccountCircle sx={{ fontSize: 60 }} />
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
        Login
      </Button>
    </Box>
  );
}
