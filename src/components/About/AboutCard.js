import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dan </span>
            from <span className="purple"> Melbourne, Australia.</span>
            <br />
            I am currently second-year undergraduate student at <span className="purple">Swinburne University of Technology</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
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

          <p style={{ color: "#50C878" }}>
            "Good things take time"{" "}
          </p>
          <footer className="blockquote-footer">Dan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
