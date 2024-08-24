import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Features extends Component {
  render() {
    const {
      projectname,
      projectLocation,
      projectprice,
      projectBhk,
      projectFloors,
      projectSquareyards,
      projectSquarefeet,
      reraNumber,
      image1
    } = this.props; 

    const customStyles = {
      imageContainer: {
        width: '75%',
        height: '300px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '8px', 
        marginLeft: 'auto',
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
      },
    };

    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                  <h2>{`${projectname} located at ${projectLocation}`}</h2>
                  <p className="text-muted web-desc">
                  Experience modern elegance and convenience with our project. Enjoy luxurious design and exceptional amenities, all with easy access to top shopping, dining, and entertainment options.
                  </p>
                  <h3>
                    Price: {`₹ ${projectprice}`}</h3>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li>{`${projectBhk} Bhk`}</li>
                    <li>{`${projectFloors} Floors`}</li>
                    <li>{`${projectSquareyards} Square Yards`}</li>
                    <li>{`${projectSquarefeet} Square Feet`}</li>
                    <li>{`Rera Number: ${reraNumber}`}</li>
                  </ul>
                </div>
              </Col>
              <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
                <div style={customStyles.imageContainer}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${image1}`}
                    alt="Project Side Image"
                    style={customStyles.image}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
