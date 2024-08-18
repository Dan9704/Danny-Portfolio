import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> ABOUT MYSELF
            </h1>
            <p className="home-about-body">
              I’m an enthusiastic second-year <i><b className="green"> Computer Science </b></i>&nbsp; student with a strong foundation in <i><b className="green">software development</b></i>&nbsp; and a budding passion for web development. 🖥️
              <br />
              <br />I am well-versed in languages like
              <i>
                <b className="green"> C++ and Javascript. </b>
              </i>
              <br />
              <br />
              I channel my passion onto developing commercial-grade products using <i><b className="green"> Node.js </b></i>&nbsp; and JavaSript libraries and Frameworks like <i><b className="green"> React.js </b></i>&nbsp; and <i><b className="green"> Next.js </b></i>&nbsp;. 🚀
              <br />
              <br />
              I’m particularly passionate about solving <i><b className="green">real-world problems</b></i>&nbsp; and am eager to gain hands-on experience in a forward-thinking tech environment.
              <br />
              <br />
              And when I’m not coding, I enjoy crafting an excellent cup of coffee, drawing on my great <i><b className="green">coffee-making skills</b></i>&nbsp;.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
              <img src={myImg} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <p>
              Feel free to <span className="green">reach out </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dan9704"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100041760740329"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/duong-danny-nguyen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_tnug_dnoug_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;