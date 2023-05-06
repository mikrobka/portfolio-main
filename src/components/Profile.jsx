import React from "react";
import "./Profile.css";
import Photo from "../assecs/IMG_5632.jpeg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="leftDiv">
        <div className="innerDiv">
          <h6 className="monotype">Hi, my name is</h6>
          <h1 className="name">Andrey Paramonov.</h1>
          <h1 className="slogan">I am  frontend developer.</h1>
          <p className="expertise">
            Hello, I am frontend developer. I have experience in React,
            ReactNative, Redux, TypeScript development. Now I am improving
            my skills in this direction and expanding them with new
            technologies.
          </p>
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/andrey-paramonov-422877271/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">LinkedIn</button>
            </a>
            <a
              href="https://github.com/mikrobka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Github</button>
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <img src={Photo} alt="headshot" className="headshot"></img>
      </div>
    </div>
  );
}
