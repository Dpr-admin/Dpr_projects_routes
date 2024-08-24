import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Features from '../../components/Features/features';
import Services from '../../components/Services/services';
import WebsiteDescription from '../../components/Website Description/website-description';
import AboutUs from '../../components/About Us/about-us';
import Testimonials from '../../components/Testimonials/testimonials';
import GetStarted from '../../components/Get Started/get-started';
import LocationHighlights from '../../components/Location/locationHighlight';
import Blog from '../../components/Blog/blog';
import ContactUs from '../../components/Contact Us/contact-us';
import Footer from '../../components/Footer/footer';
import ShareButton from '../../components/ShareButton/ShareButton';
import Builder from '../../components/Builder/Builder';

const Index4 = () => {
    const { projectname } = useParams(); 
    const [projectData, setProjectData] = useState({});
    const [isProjectValid, setIsProjectValid] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [redirected, setRedirected] = useState(false);
    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                console.log(`Fetching project: ${projectname}`);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/projects/${projectname}`);
                // const response = await axios.get(`https://www.api.dprprop.com/auth/projects/${projectname}`);
                console.log('Project data:', response.data);
                setProjectData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching project data:", error);
                setIsProjectValid(false);
                setIsLoading(false);
            }
        };

        fetchProjectData();
    }, [projectname]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isProjectValid && !redirected) {
        setRedirected(true);
        return <Navigate to="/" replace />;
    }

    const {
        banner,
        image1,
        projectlocation,
        projectprice,
        projectbhk,
        projectlogo,
        projectimage,
        projectfloors,
        buildername,
        projectsquareyards,
        projectsquarefeet,
        reranumber,
        iframe,
        inputs = [],
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        floorplan1,
        floorplan2,
        masterfloorplan
    } = projectData;

    return (

        console.log('projectData:', projectData),   

        <React.Fragment>
            <ShareButton />
            <NavbarPage projectlogo={projectData.projectlogo} />
            <Section 
                banner={banner} 
                projectlogo={projectData.projectlogo}
                projectimage={projectData.projectimage}
                projectname={projectname}
            />
            <Features 
                projectname={projectname}
                projectLocation={projectlocation} 
                projectprice={projectprice}
                projectBhk={projectbhk}
                projectFloors={projectfloors}
                projectSquareyards={projectsquareyards}
                projectSquarefeet={projectsquarefeet}
                reraNumber={reranumber}
                image1={image1}
            /> 
            <Services 
                inputs={inputs.slice(0, 25)}
                image2={image2}
                image3={image3}
                image4={image4}
            />
            <WebsiteDescription />
            <AboutUs
                inputs={inputs.slice(25, 50)}

                image5={image5}
                image6={image6}
                image7={image7}
            />
            <GetStarted />
            <Builder builderName={buildername} />
            <Testimonials 
                floorplan1={floorplan1}
                floorplan2={floorplan2}
            />
            <Blog 
                masterfloorplan={masterfloorplan}
            />
            <LocationHighlights
                inputs={inputs.slice(50, 75)}
                iframe={iframe}
            />
            <ContactUs />
            <Footer />
        </React.Fragment>
    );
};

export default Index4;