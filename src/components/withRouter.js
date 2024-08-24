// import {
//     useLocation,
//     useNavigate,
//     useParams
// } from "react-router-dom";
// import Index4 from "../pages/Index4/Index4";

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Index4
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }

// export default withRouter;


import React from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter;

