import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Paper } from "@mui/material";
import "../assets/css/AuthRegistration.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={2} style={{ padding: "2rem" }}>
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
                style={{ marginBottom: "1rem" }}
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
              <FormControl variant="outlined">
                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
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
            <Button
              id="register-button"
              variant="contained"
              size="medium"
              type="submit"
              style={{ marginTop: "1rem" }}
            >
              Let's Dive
            </Button>
          </form>
          <p style={{ marginTop: "1rem" }}>You're not connected yet?</p>
          <Button
            id="login-button"
            variant="contained"
            size="small"
            onClick={toggleForm}
            style={{ marginRight: "1rem" }}
          >
            Register
          </Button>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default Authentication;
