import React, { useState } from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      subject: '',
      phone: '', // Added phone field
      comments: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().email("Invalid email format").required("Please Enter Your Email"),
      subject: Yup.string().optional(), // Made subject optional
      phone: Yup.string().optional(), // Made phone optional
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      try {
        // Send the form data to the /mailer endpoint
        await axios.post(`${process.env.REACT_APP_API_URL}/mailer`, {
          name: values.name,
          email: values.email,
          phone: values.phone, // Send phone number
          subject: values.subject, // Send subject if provided
          message: values.comments // Mapping comments to message
        });
        alert('Message sent successfully!');
        formik.resetForm();
      } catch (err) {
        console.error('Error sending message:', err);
        setError('Failed to send message.');
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          {/* Render section title */}
          <SectionTitle
            title="Get In Touch"
            description="We excel in crafting exceptional property experiences, combining innovative approaches with tangible results."
          />

          <Row>
            <Col lg="4">
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <span className="h5">Office Address:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                  68, 3rd Floor, Senore Colony,<br />
                  Film Nagar, Hyderabad, Telangana 500008
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Working Hours:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                    9:00AM To 6:00PM
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Email Us</span>
                  <a href="mailto:info@dprprop.com"> <br/>info@dprprop.com</a>
                </p>

              </div>
            </Col>
            <Col lg="8">
              <div className="custom-form mt-4 pt-4">
                <p id="error-msg">{error}</p>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col lg="6 mt-2">
                      <Input
                        name="name"
                        placeholder="Your name*"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name || ""}
                        invalid={formik.touched.name && formik.errors.name ? true : false}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <FormFeedback type="invalid">{formik.errors.name}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg="6 mt-2">
                      <Input
                        name="email"
                        placeholder="Your email*"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email || ""}
                        invalid={formik.touched.email && formik.errors.email ? true : false}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6 mt-2">
                      <Input
                        name="phone"
                        placeholder="Your phone number"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone || ""}
                      />
                    </Col>
                    <Col lg="6 mt-2">
                      <Input
                        name="subject"
                        placeholder="Your Subject.."
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject || ""}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12 mt-2">
                      <div className="form-group">
                        <textarea
                          name="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Your message..."
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.comments || ""}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" className="text-end">
                      <Button
                        type="submit"
                        className="submitBnt btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default ContactUs;
