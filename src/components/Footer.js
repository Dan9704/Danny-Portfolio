import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    // Container for the footer with fluid width
    <Container fluid className="footer">
      <Row>
        {/* Column for the dev credit */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dan Nguyen</h3>
        </Col>
        {/* Column for the copyright in4 */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {2024} Dan</h3>
        </Col>
        {/* Column for the social icons */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* Icon for the GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Dan9704"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* Icon for the Facebook */}
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100041760740329"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            {/* Icon for the LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dac-tung-duong-nguyen-6aa823194/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            {/* Icon for the Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_tnug_dnoug_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
