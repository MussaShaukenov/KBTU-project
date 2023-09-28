import React from 'react';
import Authentication from './components/Authentication';
import Registration from './components/Registration';
import { useAuthLogic } from './components/AuthLogic';
import './App.css';

function App() {
  const {
    login,
    showPassword,
    formData,
    toggleViewPassword,
    handleInputChange,
    handleFormSubmit,
    toggleForm,
  } = useAuthLogic(); // Use the hook

  return (
    <div className="App">
      {login ? (
        <Authentication
          toggleForm={toggleForm}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          showPassword={showPassword}
          toggleViewPassword={toggleViewPassword}
          formData={formData}
        />
      ) : (
        <Registration
          toggleForm={toggleForm}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          showPassword={showPassword}
          toggleViewPassword={toggleViewPassword}
          formData={formData}
        />
      )}
    </div>
  );
}

export default App;
