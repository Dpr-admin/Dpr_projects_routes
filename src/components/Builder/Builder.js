import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

const Builder = ({ builderName }) => {
    const [builder, setBuilder] = useState(null);

    useEffect(() => {
        const fetchBuilder = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/builders/${builderName}`);
                setBuilder(response.data);
            } catch (error) {
                console.error('Error fetching builder data:', error);
            }
        };

        fetchBuilder();
    }, [builderName]);

    const sectionStyle = {
        position: 'relative',
        padding: '60px 0',
        backgroundColor: '#333333', // Dark background color
        color: '#fff', // White text color
    };

    const bgBuilderStyle = {
        background: `url(${process.env.REACT_APP_API_URL}${builder?.bgImage || ''})`,
        backgroundSize: 'cover',
        position: 'relative',
        color: '#fff',
        padding: '60px 0',
    };

    const bgOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#333333', // Darker overlay
        zIndex: 1,
    };

    const containerStyle = {
        position: 'relative',
        zIndex: 2,
    };

    const builderLogoStyle = {
        maxWidth: '150px',
        margin: '0 auto',
    };

    const builderNameStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const sectionTitleBorderStyle = {
        width: '80px',
        height: '3px',
        margin: '0 auto',
        background: '#fff', // White border
        borderRadius: '5px',
        marginBottom: '20px',
    };

    const builderDescriptionStyle = {
        fontSize: '1.1rem',
        marginBottom: '20px',
    };

    const builderAddressStyle = {
        fontSize: '1rem',
        marginTop: '10px',
    };

    return (
        <section style={sectionStyle} className="section section-lg">
            <div style={bgBuilderStyle} className="bg-builder">
                <div style={bgOverlayStyle} className="bg-overlay"></div>
                <Container style={containerStyle}>
                    {builder ? (
                        <Row className="text-center">
                            <Col lg={{ size: 8, offset: 2 }}>
                                <div className="builder-content">
                                    <div style={builderLogoStyle} className="builder-logo mb-4">
                                        <img 
                                            src={`${process.env.REACT_APP_API_URL}${builder.logoImage}`} 
                                            alt={`${builder.builderName} logo`} 
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h1 style={builderNameStyle} className="builder-name">{builder.builderName}</h1>
                                    <div style={sectionTitleBorderStyle} className="section-title-border"></div>
                                    <p style={builderDescriptionStyle} className="builder-description">
                                        {builder.about}
                                    </p>
                                    <p style={builderAddressStyle} className="builder-address">
                                        Office Address: {builder.officeAddress}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <Row className="text-center">
                            <Col>
                                <p>Loading builder details...</p>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
        </section>
    );
};

export default Builder;
