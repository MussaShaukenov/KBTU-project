import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import {Paper} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function Registration({
  toggleForm,
  handleFormSubmit,
  handleInputChange,
  showPassword,
  toggleViewPassword,
  formData,
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={3} style={{ padding: "2rem" }}>
        <div>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-container">
            <TextField
              variant="outlined"
              required
              id="username"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={{ marginBottom: "1rem", width: "15%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="input-container">
            <FormControl variant="outlined" style={{ width: "15%" }}>
              <TextField
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                margin="dense"
                value={formData.password}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {showPassword ? (
                        <VisibilityOffIcon
                          onClick={toggleViewPassword}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityIcon
                          onClick={toggleViewPassword}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <div className="input-container">
            <FormControl variant="outlined" style={{ width: "15%" }}>
              <TextField
                id="repeatPassword"
                label="Repeat Password"
                type={showPassword ? "text" : "password"}
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                margin="dense"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {showPassword ? (
                        <VisibilityOffIcon
                          onClick={toggleViewPassword}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityIcon
                          onClick={toggleViewPassword}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
          <Button
            variant="contained"
            size="medium"
            type="submit"
            style={{ marginTop: "1rem", width: "15%" }}
          >
            Let's Create an Account
          </Button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          Already have an account? <span onClick={toggleForm}>Login</span>
        </p>
      </Paper>
    </ThemeProvider>
  );
}

export default Registration;
