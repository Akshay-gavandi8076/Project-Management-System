import React, { Component } from 'react';
import axios from 'axios';
import './Header.css';


export default class CreateTeam extends Component {
    constructor(props) {
        super(props);

        this.onChangeteam = this.onChangeteam.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          teamname:"",
        }
    }
    
    onChangeteam(e) {
        this.setState({
          teamname: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const teams = {
          teamname: this.state.teamname,
        }
        console.log(teams);

        axios.post('http://localhost:5000/teams/add', teams)
          .then(res => console.log(res.data));

        this.setState({
          teamname:''
        })
    }

 render() {
    return (
      <div>
        <h1>Create New Team</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Team Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.teamname}
                onChange={this.onChangeteam}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Team" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

