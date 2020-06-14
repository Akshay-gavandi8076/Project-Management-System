import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Header.css';

export default class CreateProject extends Component {
    constructor(props) {
        super(props);

        this.onChangeprojectname = this.onChangeprojectname.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this); 
        this.onChangedepartment = this.onChangedepartment.bind(this);      
        this.onChangeteamname = this.onChangeteamname.bind(this);
        this.onChangestartDate = this.onChangestartDate.bind(this);
        this.onChangeendDate = this.onChangeendDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            projectname:"",
            description: "",
            department: "",
            teamname:"",
            startDate: new Date(),
            endDate: new Date(),
            teamses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/teams/')
         .then(response => {
         if (response.data.length > 0) {
              this.setState({
                teamses:response.data.map(teams => teams.teamname),
                teamname:response.data[0].teamname
              })
             }
          })
    
      }

    onChangeprojectname(e) {
        this.setState({
          projectname: e.target.value
        })
    }

    onChangedescription(e) {
        this.setState({
          description: e.target.value
        })
    }

    onChangedepartment(e) {
        this.setState({
          department: e.target.value
        })
    }

    onChangeteamname(e) {
        this.setState({
            teamname: e.target.value
        })
    }

    onChangestartDate(date) {
        this.setState({
          startDate: date
        })
    }

    onChangeendDate(date) {
        this.setState({
          endDate: date
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
    
        const projects = {
          projectname: this.state.projectname,
          description: this.state.description,
          department: this.state.department,
          teamname: this.state.teamname,
          startDate: this.state.startDate,
          endDate: this.state.endDate
        }
        console.log(projects);

        axios.post('http://localhost:5000/projects/add', projects)
          .then(res => console.log(res.data));

          this.setState({
              projectname:'',
              description:'',
              department:'',
              startDate:'',
              endDate:''
          })
    
        //window.location = '/';
      }
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <h1>Create New Project</h1>
              <div className="form-group"> 
                <label>ProjectName: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.projectname}
                    onChange={this.onChangeprojectname}
                    />
              </div>

              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangedescription}
                    />
              </div>

              <div className="form-group">
                <label>Department: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.department}
                    onChange={this.onChangedepartment}
                    />
              </div>

            <div className="form-group">
            <label>Project Team :</label>
            <select ref="userInput" required className="form-control" value={this.state.teamname} onChange={this.onChangeteamname}>
            {
                this.state.teamses.map( function(tea) {
                    return <option 
                    key={tea}
                    value={tea}>{tea}
                    </option>;
                })
            }
            </select>
            </div>

              <div className="form-group">
                <label>Start Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.onChangestartDate}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>End Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.onChangeendDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create New Project" className="btn btn-primary" />
              </div>
            </form>
          </div>
          )
    }
}