import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              G'Day, Mate!{" "}
              <span className="kangaroo">🦘</span>
            </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Dac Tung Duong Nguyen</strong>
              </h1>

              <h2 style={{ paddingTop: 10 }} className="heading-nickname">
                       You guys can call me <strong className="nick-name">Dan</strong>
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
