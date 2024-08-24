import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class WebsiteDescription extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">Find Your Perfect Home Today – Start Exploring Our Premium Flats!</h2>
                <p className="pt-3 home-desc mx-auto">
                Discover the Key to Your Dream Home – Explore Our Premium Selection of Flats and Secure the Perfect Space for Your Future Today!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;
