import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavbarPr from "../components/navbar.component"
import ProjectList from "../components/projectList.component"
import EditProject from "../components/editProject.component";
import CreateProject from "../components/createProject.component";
import CreateTeam from "../components/createTeam.component";

function Profile() {
  return (
    <Router>
      <div className="container">
      <NavbarPr/>
      <br/>
      <Route path="/list" exact component={ProjectList} />
      <Route path="/edit/:id" component={EditProject} />
      <Route path="/create" component={CreateProject} />
      <Route path="/team" component={CreateTeam} />
      </div>
    </Router>
  )
};


// import React, { Component } from 'react'
// import jwt_decode from 'jwt-decode'

// class Profile extends Component {
//   constructor() {
//     super()
//     this.state = {
//       first_name: '',
//       last_name: '',
//       email: '',
//       errors: {}
//     }
//   }

//   componentDidMount() {
//     const token = localStorage.usertoken
//     const decoded = jwt_decode(token)
//     this.setState({
//       first_name: decoded.first_name,
//       last_name: decoded.last_name,
//       email: decoded.email
//     })
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="jumbotron mt-5">
//           <div className="col-sm-8 mx-auto">
//             <h1 className="text-center">PROFILE</h1>
//           </div>
//           <table className="table col-md-6 mx-auto">
//             <tbody>
//               <tr>
//                 <td>Fist Name</td>
//                 <td>{this.state.first_name}</td>
//               </tr>
//               <tr>
//                 <td>Last Name</td>
//                 <td>{this.state.last_name}</td>
//               </tr>
//               <tr>
//                 <td>Email</td>
//                 <td>{this.state.email}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     )
//   }
// }

export default Profile