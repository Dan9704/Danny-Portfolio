import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
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
              Good Day Matey!{" "}
              <span className="hi-icon" role="img" aria-labelledby="hi-icon">
                👋
              </span>
            </h1>

              <h1 className="heading-name">
                I'M
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
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
