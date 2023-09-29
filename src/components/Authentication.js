// Authentication.js
import React from "react";
import AuthForm from "./AuthForm";

function Authentication({
  toggleForm,
  handleFormSubmit,
  handleInputChange,
  showPassword,
  toggleViewPassword,
  formData,
}) {
  return (
    <AuthForm
      formTitle="Login"
      submitButtonText="Let's Dive"
      toggleForm={toggleForm}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      showPassword={showPassword}
      toggleViewPassword={toggleViewPassword}
      formData={formData}
    />
  );
}

export default Authentication;
