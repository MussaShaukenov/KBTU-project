import React from "react";
import "./PremiumSubscribe.scss";

const PremiumSubscribe = () => {
    return (
        <>
            <div className="subscribe-ad">
                <div className="inner-container">
                    <div><h3>Subscribe to Premium</h3></div>
                    <div><h4>Subscribe to unlock new features and if <br/> eligible, receive a share of ads
                        revenue.</h4></div>
                    <div><button type="submit">Subscribe</button></div>
                </div>
            </div>
        </>
    );
}

export default PremiumSubscribe;