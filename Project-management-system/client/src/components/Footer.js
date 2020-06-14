import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer my-foot text-center">
                <div className="container">
                     <div className="row">
                        {/*column 1*/}
                        <div className="col">
                            <h4>Follow Us</h4>   
                            <hr/>                       
                            <img src="/images/a.png" alt="not found" className="climg"></img>                           
                        </div>
                        {/*column 2*/}
                        <div className="col">
                        <h4>Contact</h4>
                        <hr/> 
                            <ul className="list-unstyled">
                            <li>Team Work Company</li>
                            <li>Ludwig-Guttmann-Straße 6</li>
                            <li> Tel: +49 6221 88-1000</li>
                            <li> Mail: teamwork@project-heidelberg.de</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}
export default Footer;