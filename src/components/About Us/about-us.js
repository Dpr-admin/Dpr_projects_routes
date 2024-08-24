// import React, { Component } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SectionTitle from "../common/section-title";

// class AboutUs extends Component {
//   splitArrayIntoChunks = (array, chunkSize) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//       result.push(array.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   render() {
//     const {
//       inputs = [],
//       image5,
//       image6,
//       image7
//     } = this.props;

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//     };

//     // Inline styles
//     const carouselItemStyle = {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '500px', // Fixed height for slider items
//       overflow: 'hidden',
//       position: 'relative'
//     };

//     const carouselImageStyle = {
//       width: '100%',
//       height: 'auto',
//       objectFit: 'cover', // Ensure images cover the entire container
      
//     };

//     // Split inputs into chunks of 8
//     const columns = this.splitArrayIntoChunks(inputs.filter(input => input), 8);

//     return (
//       <React.Fragment>
//         <section className="section bg-light" id="about">
//           <Container>
//             <SectionTitle
//               title="Project Amenities"
//               description="Explore the project amenities below, designed to elevate your living experience and provide exceptional value with a range of high-quality features."
//             />

// <Row className="mt-5">
//   <Col lg="6" className="order-1 order-lg-1 mb-5">
//     <Slider {...settings} className="text-center">
//       <div style={carouselItemStyle}>
//         <img src={`${process.env.REACT_APP_API_URL}${image5}`} alt="Slide 1" style={carouselImageStyle} />
//       </div>
//       <div style={carouselItemStyle}>
//         <img src={`${process.env.REACT_APP_API_URL}${image6}`} alt="Slide 2" style={carouselImageStyle} />
//       </div>
//       <div style={carouselItemStyle}>
//         <img src={`${process.env.REACT_APP_API_URL}${image7}`} alt="Slide 3" style={carouselImageStyle} />
//       </div>
//     </Slider>
//   </Col>
//   <Col lg="6" className="order-2 order-lg-2 d-flex justify-content-center">
//     <div className="features-box mt-5 ml-5 mt-lg-0" style={{ marginLeft: '30px' }}>
//       <Row>
//         {columns.map((column, colIndex) => (
//           <Col xs="12" sm="6" md="4" lg="4" key={colIndex} className="mb-3">
//             <ul className="text-muted list-unstyled mt-4 features-item-list">
//               {column.map((input, index) => (
//                 <li key={index} className="mb-3">
//                   {input}
//                 </li>
//               ))}
//             </ul>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   </Col>
// </Row>

//           </Container>
//         </section>
//       </React.Fragment>
//     );
//   }
// }

// export default AboutUs;













import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionTitle from "../common/section-title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class AboutUs extends Component {
  splitArrayIntoChunks = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  render() {
    const { inputs = [], image5, image6, image7 } = this.props;

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

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
        <section className="section bg-light" id="about">
          <Container>
            <SectionTitle
              title="Project Amenities"
              description="Explore the project amenities below, designed to elevate your living experience and provide exceptional value with a range of high-quality features."
            />

            <Row className="mt-5">
              <Col lg="12">
                <div className="features-box mt-5">
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

export default AboutUs;
