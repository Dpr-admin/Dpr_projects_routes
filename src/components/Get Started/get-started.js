import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
    render() {
        return (
            <React.Fragment>
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <Container>
                <Row>
                    <Col lg={{size :8, offset:2}} className="text-center">
                        <h1 className="get-started-title text-white">Let's Get Connected</h1>
                        <div className="section-title-border mt-4 bg-white"></div>
                        <p className="section-subtitle font-secondary text-white text-center pt-4">Discover your dream home with us. Reach out today to explore our premium real estate offerings and find the perfect property that fits your needs and lifestyle. We're here to help you every step of the way! </p>
                        <Link to="#contact" className="btn btn-light waves-effect mt-4">Get Started <i className="mdi mdi-arrow-right"></i> </Link>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default GetStarted;