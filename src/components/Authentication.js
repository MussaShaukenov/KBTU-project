import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    type: 'dark', // Set to 'light' for a light theme
  },
});

function Authentication({
  toggleForm,
  handleFormSubmit,
  handleInputChange,
  showPassword,
  toggleViewPassword,
  formData,
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-container">
            <TextField
              variant="outlined"
              required
              id="username"
              label="Username or Email"
              name="username"
              autoFocus
              value={formData.username}
              onChange={handleInputChange}
              style={{ marginBottom: '1rem' }}
            />
          </div>
          <div className="input-container">
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleViewPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <i className="fas fa-eye-slash"></i>
                      ) : (
                        <i className="fas fa-eye"></i>
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <Button
            variant="contained"
            size="medium"
            type="submit"
            style={{ marginTop: '1rem' }}
          >
            Let's Dive
          </Button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Don't have an account? <span onClick={toggleForm}>Sign up</span>
        </p>
      </div>
    </ThemeProvider>
  );
}

export default Authentication;
