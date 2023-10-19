import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import InitialPage from "./components/InitialPage/InitialPage";
import GithubLogin from "./components/GithubLogin/GithubLogin";
import {ConfigProvider} from "antd";
import enUS from 'antd/lib/locale/en_US';


function App() {
    return (
        <ConfigProvider locale={enUS}>
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<MainPage/>}/>
                    <Route path="/" element={<InitialPage/>}/>
                    <Route path="/login/github" element={<GithubLogin/>}/>
                </Routes>
            </Router>
        </div>
        </ConfigProvider>
    );
}

export default App;
