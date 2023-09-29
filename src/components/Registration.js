// Registration.js
import React from "react";
import AuthForm from "./AuthForm";

function Registration({
  toggleForm,
  handleFormSubmit,
  handleInputChange,
  showPassword,
  toggleViewPassword,
  formData,
}) {
  return (
    <AuthForm
      formTitle="Sign Up"
      submitButtonText="Let's Create an Account"
      toggleForm={toggleForm}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      showPassword={showPassword}
      toggleViewPassword={toggleViewPassword}
      formData={formData}
    />
  );
}

export default Registration;
