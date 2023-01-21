import React,{Component} from "react";
import "./Styles/header.css"

export default class Header extends Component{
    render = () => {
        return(
            
            <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#createuser">Create User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#showuser">Show User</a>
            </li>
           
          </ul>
        );
    }
}