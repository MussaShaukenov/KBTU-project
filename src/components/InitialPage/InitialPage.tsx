import React from 'react';
import "./InitialPage.scss"
import Register from "../Registration/Registration";
import Login from "../Login/Login";
import { useNavigate } from 'react-router-dom';

    const InitialPage: React.FC = () => {
        const navigate = useNavigate();

        function handleSignInWithGitHub() {
            navigate('/login/github');
        }

        return (
            <div className="initial-container">
                <div><img src="https://www.freepnglogos.com/x-logo-twitter-transparent-logo-download-3.png" alt=""/>
                </div>
                <div className="initial-container-column">
                    <div><h1>Happening now</h1></div>
                    <div><h2>Join today.</h2></div>
                    <div className="column-login">
                        <div id="sign-in-with-google">
                            <button type="button" className="login-with-google-btn" onClick={handleSignInWithGitHub}>
                                Sign in with Github
                            </button>
                        </div>
                        <Register/>
                        <div>
                            <p>By signing up, you agree to
                                the <span>Terms of Service</span> and <span>Privacy Policy</span>,
                                including <span>Cookie Use</span>.</p>
                        </div>
                        <div><h4>Already have an account?</h4></div>
                        <Login/>
                    </div>
                </div>
            </div>
        );
}

export default InitialPage;