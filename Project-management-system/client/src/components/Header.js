
import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component{
render() {
    return (
            <div class="nav-wrap">
                <img className="img" src='images/two.png' alt="not found"/>
                <ul class="right">
                <h3> Team Work <br/>Project Management System</h3>
                </ul>
            </div>
        );
      }
}