import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../common/section-title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Services extends Component {
  splitArrayIntoChunks = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  render() {
    const { inputs = [] } = this.props; // Destructure props

    // Define custom styles for the list items
    const listItemStyle = {
      position: "relative",
      paddingLeft: "25px",
      fontSize: "16px",
      lineHeight: "1.5",
      listStyleType: "none", // Remove bullets
    };

    const listItemBeforeStyle = {
      content: '"➤"',
      position: "absolute",
      left: "0",
      color: "#007bff", // Color of the arrow
      fontSize: "16px",
      lineHeight: "1.5",
    };

    // Responsive adjustments
    const responsiveStyles = {
      "@media (max-width: 576px)": {
        listItemStyle: {
          fontSize: "16px",
          paddingLeft: "18px",
        },
        listItemBeforeStyle: {
          fontSize: "14px",
        },
      },
      "@media (min-width: 768px) and (max-width: 992px)": {
        listItemStyle: {
          fontSize: "15px",
          paddingLeft: "19px",
        },
        listItemBeforeStyle: {
          fontSize: "13px",
        },
      },
    };

    // Split inputs into chunks of 3 for desktop and 2 for mobile
    const columns = this.splitArrayIntoChunks(
      inputs.filter((input) => input),
      3
    );

    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <SectionTitle
              title="Project Highlights"
              description="Check out the project highlights below, showcasing the standout features and benefits that set this project apart and offer exceptional value."
            />

            <Row className="mt-5">
              <Col lg="12" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <Row>
                    {columns.map((column, colIndex) => (
                      <Col xs="12" sm="6" md="4" key={colIndex} className="mb-3">
                        <ul className="mt-4">
                          {column.map((input, index) => (
                            <li
                              key={index}
                              className="mb-3"
                              style={{
                                ...listItemStyle,
                                ...responsiveStyles["@media (max-width: 576px)"]
                                  .listItemStyle,
                              }}
                            >
                              <span
                                style={{
                                  ...listItemBeforeStyle,
                                  ...responsiveStyles[
                                    "@media (max-width: 576px)"
                                  ].listItemBeforeStyle,
                                }}
                              >
                                ➤
                              </span>
                              {input}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>

              {/* Conditionally render the carousel */}
              {/* {images.length > 0 && (
                <Col lg="6" className="order-1 order-lg-2">
                  <Slider {...sliderSettings} className="screenshot-carousel text-center" style={{ marginTop: '25px' }}>
                    {images.map((image, index) => (
                      <div key={index} style={containerStyle}>
                        <img
                          src={`${process.env.REACT_APP_API_URL}${image}`}
                          alt={`Slide ${index + 1}`}
                          style={imgStyle}
                        />
                      </div>
                    ))}
                  </Slider>
                </Col>
              )} */}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
