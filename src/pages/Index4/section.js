import React, { Component } from "react";
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";


class Section extends Component {

  state = {
    modal: true,
    name: '',
    email: '',
    phone: '',
    message: '',
    loading: false // Added loading state
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async () => {
    const { name, email, phone, message } = this.state;

    this.setState({ loading: true }); // Set loading state to true

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/mailer`, { name, email, phone, message });
      alert('Message sent successfully!');
      this.toggleModal();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    } finally {
      this.setState({ loading: false }); 
    }
  };

  render() {
    const { banner } = this.props;
    const { modal, loading } = this.state;

    const sectionStyle = {
      background: `url(${process.env.REACT_APP_API_URL}${banner}) no-repeat center center/contain`,
      position: 'relative',
      height: '100vh', // Adjust height as needed
      width: '100%'    // Adjust width as needed
    };
    
    const overlayStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    };

    const contentStyle = {
      position: "relative",
      zIndex: 2,
    };
 
    const modalStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '1100px', // Increased the width of the modal
      margin: '0 auto',
      borderRadius: '8px',
    };

    const imageStyle = {
      flex: '1',
      marginLeft : '20px',
      // background: `url(/assets/backgroundshark.png) no-repeat center center / cover`,
      background: `url(${process.env.REACT_APP_API_URL}${this.props.projectimage}) no-repeat center center / cover`,
      height: '450px',
    };

    const formContainerStyle = {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px',
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    };

    const logoStyle = {
      width: '80px',
      margin: '0 auto 0 auto',
    };

    const projectNameStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px',
      textAlign: 'center',
    };

    return (
      <React.Fragment>
          <section className="section bg-home home-half home-registration active" id="home" style={sectionStyle}>
            <div style={overlayStyle}></div>
            <div className="display-table" style={contentStyle}>
              <div className="display-table-cell">
                <Container>
                  {/* Additional content can go here */}
                </Container>
              </div>
            </div>  
            

            
          <Modal isOpen={modal} toggle={this.toggleModal} centered size="lg">
            <ModalBody style={{ padding: '0' }}>
              <div style={modalStyle}>
                <div className="d-none d-md-block" style={imageStyle}></div> {/* Hide on mobile */}
                <div style={formContainerStyle}>
                  <img
                    // src={`/assets/backgroundshark.png`}
                    src={`${process.env.REACT_APP_API_URL}${this.props.projectlogo}`}
                    alt="Logo"
                    style={logoStyle}
                  />
                  <div style={projectNameStyle}>{this.props.projectname}</div>
                  <Form className="registration-form" id="registration-form">
                    <Input
                      type="text"
                      id="name"
                      className="form-control registration-input-box"
                      placeholder="Name"
                      onChange={this.handleChange}
                    />
                    <Input
                      type="email"
                      id="email"
                      className="form-control registration-input-box"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    <Input
                      type="text"
                      id="phone"
                      className="form-control registration-input-box"
                      placeholder="Phone Number"
                      onChange={this.handleChange}
                    />
                    <textarea
                      id="message"
                      className="form-control registration-textarea-box"
                      rows="4"
                      placeholder="Message"
                      onChange={this.handleChange}
                    ></textarea>

                    <Button
                      className="btn btn-primary"
                      onClick={this.handleSubmit}
                      disabled={loading}
                      style={{ 
                        //rightside button
                        float: 'right',
                       }}
                    >
                      {loading ? 'Sending...' : 'Send Details'}
                    </Button>
                  </Form>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;

















// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Button } from "reactstrap";
// import axios from "axios";

// class Section extends Component {
//   state = {
//     modal: true,
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     loading: false // Added loading state
//   };

//   toggleModal = () => {
//     this.setState({ modal: !this.state.modal });
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   handleSubmit = async () => {
//     const { name, email, phone, message } = this.state;

//     this.setState({ loading: true }); // Set loading state to true

//     try {
//       await axios.post(`${process.env.REACT_APP_API_URL}/mailer`, { name, email, phone, message });
//       alert('Message sent successfully!');
//       this.toggleModal();
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message.');
//     } finally {
//       this.setState({ loading: false }); 
//     }
//   };

//   render() {
//     const { banner } = this.props;
//     const { modal, loading } = this.state;

//     const sectionStyle = {
//       background: `url(${process.env.REACT_APP_API_URL}${banner}) no-repeat center center/contain`,
//       position: 'relative',
//       height: '100vh', // Adjust height as needed
//       width: '100%'    // Adjust width as needed
//     };
    
//     const overlayStyle = {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//       zIndex: 1,
//     };

//     const contentStyle = {
//       position: "relative",
//       zIndex: 2,
//     };

//     return (
//       <React.Fragment>
//         <section className="section bg-home home-half home-registration active" id="home" style={sectionStyle}>
//           <div style={overlayStyle}></div>
//           <div className="display-table" style={contentStyle}>
//             <div className="display-table-cell">
//               <Container>
//                 {/* Additional content can go here */}
//               </Container>
//             </div>
//           </div>

//           {/* Modal for the registration form */}
//           <Modal isOpen={modal} toggle={this.toggleModal}>
//             <ModalHeader toggle={this.toggleModal}>Enquire Now</ModalHeader>
//             <ModalBody>
//               <Form className="registration-form" id="registration-form">
//                 <Input
//                   type="text"
//                   id="name"
//                   className="form-control registration-input-box"
//                   placeholder="Name"
//                   onChange={this.handleChange}
//                 />
//                 <Input
//                   type="email"
//                   id="email"
//                   className="form-control registration-input-box"
//                   placeholder="Email"
//                   onChange={this.handleChange}
//                 />
//                 <Input
//                   type="text"
//                   id="phone"
//                   className="form-control registration-input-box"
//                   placeholder="Phone Number"
//                   onChange={this.handleChange}
//                 />
//                 <textarea
//                   id="message"
//                   className="form-control registration-textarea-box"
//                   rows="4"
//                   placeholder="Message"
//                   onChange={this.handleChange}
//                 ></textarea>
//               </Form>
//             </ModalBody>
//             <ModalFooter>
//               <Button 
//                 className="btn btn-primary"
//                 onClick={this.handleSubmit}
//                 disabled={loading} // Disable button while loading
//               >
//                 {loading ? 'Sending...' : 'Send Detail'} {/* Display loading text */}
//               </Button>
//             </ModalFooter>
//           </Modal>
//         </section>
//       </React.Fragment>
//     );
//   }
// }

// export default Section;