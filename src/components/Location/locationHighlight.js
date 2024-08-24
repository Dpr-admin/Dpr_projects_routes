import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Import Section Title
import SectionTitle from "../common/section-title";

class LocationHighlights extends Component {
  splitArrayIntoChunks = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  render() {
    const { inputs = [], iframe } = this.props;

    // Define custom styles for the list items
    const listItemStyle = {
      position: "relative",
      paddingLeft: "20px",
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
      listStyleType: "none",
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
    const chunkSize = window.innerWidth < 768 ? 2 : 3;
    const columns = this.splitArrayIntoChunks(
      inputs.filter((input) => input),
      chunkSize
    );

    return (
      <React.Fragment>
        <section className="section bg-light" id="services">
          <Container>
            <SectionTitle
              title="Location Highlights"
              description="Discover the unique features of each location, offering exceptional value and a perfect fit for your lifestyle."
            />

            <Row className="mt-5">
              <Col lg="12">
                <div className="features-box mt-5 mt-lg-0">
                  <Row>
                    {columns.map((column, columnIndex) => (
                      <Col
                        xs="12"
                        sm="6"
                        md="4"
                        lg="4"
                        key={columnIndex}
                        className="mb-3"
                      >
                        <ul className="list-unstyled mt-4">
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

              <Col lg="12" className="mt-4">
                {iframe && iframe.startsWith("https://www.google.com/maps/") ? (
                  <iframe
                    src={iframe}
                    width="100%" // Make iframe responsive
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <div>Please check the URL (No location available)</div>
                )}
              </Col>

            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default LocationHighlights;
