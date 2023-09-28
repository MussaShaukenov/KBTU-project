import { useState } from "react";

export const useAuthLogic = () => {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const toggleViewPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic based on the 'login' state and formData.
    if (login) {
      // Handle login
      console.log("Logging in with:", formData.username, formData.password);
    } else {
      // Handle signup
      console.log(
        "Signing up with:",
        formData.username,
        formData.password,
        formData.repeatPassword
      );
    }
  };

  const toggleForm = () => {
    setLogin(!login);
  };

  return {
    login,
    showPassword,
    formData,
    toggleViewPassword,
    handleInputChange,
    handleFormSubmit,
    toggleForm,
  };
};
