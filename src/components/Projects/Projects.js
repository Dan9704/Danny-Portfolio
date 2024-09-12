import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <a 
              href="https://github.com/Dan9704/Maples-Cafe-Website" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block" }} 
            >
              <img 
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/pin/?username=dan9704&repo=Maples-Cafe-Website&theme=merko" 
                alt="Maples Cafe Website"
                style={{ width: "100%", height: "auto", cursor: "pointer" }} 
              />
            </a>
          </Col>

          <Col md={4} className="project-card">
            <a 
              href="https://github.com/Dan9704/Danny-Portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img 
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/pin/?username=dan9704&repo=Danny-Portfolio&theme=synthwave" 
                alt="Danny Portfolio"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
            </a> 
          </Col>

          <Col md={4} className="project-card">
            <a 
              href="https://github.com/Dan9704/UFO-Hunters" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img 
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/pin/?username=dan9704&repo=UFO-Hunters&theme=dracula" 
                alt="UFO Hunters"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
            </a>
          </Col>

          <Col md={4} className="project-card">
            <a 
              href="https://github.com/Dan9704/Olympic-Climber-Tracker-Application" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img 
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/pin/?username=dan9704&repo=Olympic-Climber-Tracker-Application&theme=synthwave" 
                alt="Olympic Climber Tracker Application"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
            </a>
          </Col>

          <Col md={4} className="project-card">
            <a 
              href="https://github.com/Dan9704/Advanced-Cloud-Architecture-for-Photo-Album-Application" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img 
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/pin/?username=dan9704&repo=Advanced-Cloud-Architecture-for-Photo-Album-Application&theme=gruvbox" 
                alt="Advanced Cloud Architecture for Photo Album Application"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
            </a>
          </Col>

          <Col md={4} className="project-card">
            <a 
              href="https://github.com/Dan9704/Riff-Rental-Application" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img 
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/pin/?username=dan9704&repo=Riff-Rental-Application&theme=radical" 
                alt="Advanced Cloud Architecture for Photo Album Application"
                style={{ width: "100%", height: "auto", cursor: "pointer" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;