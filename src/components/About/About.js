import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* Particle background effect  */}
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* Column for the about card */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="green">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* Column for the laptop image */}
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* Heading for professional skillset */}
        <h1 className="project-heading">
          Programming <strong className="green">Skillset </strong>
        </h1>
        {/* Tech stack component */}
        <Techstack />

        {/* Heading for tools */}
        <h1 className="project-heading">
          <strong className="green">Tools</strong> I use
        </h1>
        {/* Tool stack component */}
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
