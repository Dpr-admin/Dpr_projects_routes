import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";

class Blog extends Component {
  render() {
    const { masterfloorplan } = this.props;

    // Define custom styles
    const customStyles = {
      imageContainer: {
        width: '100%',
        height: 'auto', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '8px',
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
      },
    };

    return (
      <React.Fragment>
        <section className="section bg-light active" id="blog">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Master Floorplan"
              description="Below is the master floorplan of the project, showcasing the detailed layout and design"
            />

            <Row className="mt-4">
              {/* Render master floorplan image */}
              <Col className="d-flex justify-content-center">
                {masterfloorplan && (
                  <div style={customStyles.imageContainer}>
                    <img
                      src={`${process.env.REACT_APP_API_URL}${masterfloorplan}`}
                      alt="Master Floorplan"
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

Blog.propTypes = {
  masterfloorplan: PropTypes.string,
};

export default Blog;
