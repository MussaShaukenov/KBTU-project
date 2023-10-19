import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './App.css';
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import LayoutContainer from "./components/MainPage/LayoutContainer";
import InitialPage from "./components/InitialPage/InitialPage";
import GithubLogin from "./components/GithubLogin/GithubLogin";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import {ConfigProvider} from "antd";
import enUS from 'antd/lib/locale/en_US';
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import Bookmark from "./components/Bookmarks/Bookmark";
import Community from "./components/Communities/Community";


function App() {
    return (
        <ConfigProvider locale={enUS}>
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<InitialPage/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                    <Route path="/login/github" element={<GithubLogin/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/bookmarks" element={<Bookmark/>}/>
                    <Route path="/communities" element={<Community/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </Router>
        </div>
        </ConfigProvider>
    );
}

export default App;
