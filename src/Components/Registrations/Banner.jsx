import React from "react";
import BackgroundImage from "../../assets/banner.png";
import './Banner.css'

export default function Banner() {
    return (
        <>
            <div className="bottom">
             <p>Discover new things on SuperApp</p>
            </div>
            <img id="BackgroundImage" src={BackgroundImage} />
        </>
    );

}