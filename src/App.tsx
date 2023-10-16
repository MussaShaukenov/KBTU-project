import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Navbar/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
