import React,{Component} from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ShowUsers from "./components/ShowUsers";
import Users from "./components/Users";
import {route} from "./Router"
import "./app.css"
import EditUser from "./components/EditUser";
import config from  "./config/config.json"

export default class App extends Component{
    constructor(props){
        super(props);
        this.id=window.localStorage.getItem('hash').split('/')[1];
        this.views = {  
            home:<Home/>,
            showuser:<ShowUsers/>,
            createuser:<Users/>,
            ["edituser/"+this.id]:<EditUser userId={this.id}/>
        }
    }
    componentDidMount(){
        console.log("this method is running from app.jsx")
    }
    renderViews = () => {
        return this.views[route];
    }
    render = () => {
        return(
            <React.Fragment>
                <Header/>
               {this.renderViews(true)}
            </React.Fragment>
        );
    }
}