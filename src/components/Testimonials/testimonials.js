import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";

class Testimonials extends Component {
  render() {
    const { floorplan1, floorplan2 } = this.props;

    // Define custom styles
    const customStyles = {
      imageContainer: {
        width: '100%',
        height: '300px', // Fixed height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '8px',
        marginBottom: '20px',
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Maintain aspect ratio
      },
    };

    return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Project Floorplans"
              description="Explore the floorplans for the project below, highlighting the various layouts and configurations available."
            />

            <Row className="mt-5">
              {/* Render floorplan images */}
              <Col md="6" className="d-flex justify-content-center mb-4">
                {floorplan1 && (
                  <div style={customStyles.imageContainer}>
                    <img
                      src={`${process.env.REACT_APP_API_URL}${floorplan1}`}
                      alt="Floorplan 1"
                      style={customStyles.image}
                    />
                  </div>
                )}
              </Col>
              <Col md="6" className="d-flex justify-content-center mb-4">
                {floorplan2 && (
                  <div style={customStyles.imageContainer}>
                    <img
                      src={`${process.env.REACT_APP_API_URL}${floorplan2}`}
                      alt="Floorplan 2"
                      style={customStyles.image}
                    />
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

Testimonials.propTypes = {
  floorplan1: PropTypes.string,
  floorplan2: PropTypes.string,
};

export default Testimonials;
