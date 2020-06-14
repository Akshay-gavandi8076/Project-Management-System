import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavbarPr from "../components/navbar.component"
import ProjectList from "../components/projectList.component"
import EditProject from "../components/editProject.component";
import CreateProject from "../components/createProject.component";
import CreateTeam from "../components/createTeam.component";
import Header from "../components/Header";

function Profile() {
  return (
    <Router>
      <Header/>
      <NavbarPr/>
      <Route path="/list" exact component={ProjectList} />
      <Route path="/edit/:id" component={EditProject} />
      <Route path="/create" component={CreateProject} />
      <Route path="/team" component={CreateTeam} />
    </Router>
  )
};

export default Profile