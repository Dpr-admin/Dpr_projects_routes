// import React, { Component } from "react";
// import './App.css';
// import routes from "./routes";
// import withRouter from "./components/withRouter";
// import {
//   Route,
//   Routes
// } from "react-router-dom";

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {};
//   }
//     render() {
//         return (
//           <React.Fragment>
//             <Routes>
//               {routes.map((route, idx) => (
//                 <Route path={route.path} element={route.component} key={idx} />
//               ))}
//             </Routes>
//         </React.Fragment>
//       );
//     }
//   }
  
//   export default withRouter(App);



import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Index4 from "./pages/Index4/Index4";
import withRouter from "./components/withRouter";

const Index4WithRouter = withRouter(Index4);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/:projectname" element={<Index4WithRouter />} />
          <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect to home if no match */}
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;


