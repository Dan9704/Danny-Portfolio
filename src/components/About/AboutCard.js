import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Introduction text */}
            Hi Everyone, I am <span className="green">Dan </span>
            from <span className="green"> Melbourne, Australia. <span className="hi-icon" role="img" aria-labelledby="hi-icon">👋</span></span>
            <br />
            I am currently second-year undergraduate student at <span className="green">Swinburne University of Technology</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {/* List of Activities and Hobbies */}
            <li className="about-activity">
              <ImPointRight /> Catching up Tech News 🗞️
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Coffee ☕️
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Soccer ⚽
            </li>
          </ul>
      
            {/* Quote */}
          <p style={{ color: "#50C878" }}>
            "Good things take time"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;



