import "./Passion.css";
import React from "react";
import { Link } from "react-router-dom";

const Passion = () => {
  return (
    <div className="PassionateCompGrandParent">
      <div className="PassionateCompParent">
        <h3>Passionate about creating exceptional digital experiences</h3>
        <p>
          With a focus on modern web technologies and best practices, I help
          businesses and individuals bring their digital visions to life through
          thoughtful design and robust code.
        </p>
        <Link to="/about" className="learnMoreBtn">
          Learn More About Me
        </Link>
      </div>
    </div>
  );
};


export default Passion;