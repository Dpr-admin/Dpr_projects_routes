import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }




  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg"> 
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h4 className="home-small-title">Awesome Design</h4>
                <h1 className="home-title">
                  We love make things amazing and simple
                </h1>
                <p className="pt-3 home-desc mx-auto">
                  Maecenas class semper class semper sollicitudin lectus lorem
                  iaculis imperdiet aliquam vehicula tempor auctor curabitur
                  pede aenean ornare.
                </p>
                <p className="play-shadow mt-4">
                  <Link
                    onClick={this.callModal}
                    to="/#"
                    className="play-btn video-play-icon"
                  >
                    <i className="mdi mdi-play text-center"></i>
                  </Link>
                </p>
              </Col>
              {/* Render ModalSection Component for Modal */}
              <ModalSection ref="child" channel="vimeo" videoId="99025203" />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
