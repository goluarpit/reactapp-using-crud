import React,{Component} from "react";
import { route,redirect } from "../Router";
import config from "../config/config.json"
export default class Users extends Component{
   
    // lifecycle : mounting
   constructor(props){
    super(props);
    this.state = {
            name:"",
            email:"",
            number:"",
            password:"",
            Users:[],
            msg:"",
        }
    }
   
   
   
    render = () => {
        return(
            <React.Fragment>
               
                <div className="container-fluid">
                    
                        <h1>User register here</h1>
                        <hr/>
                     {this.state.msg}
                     <form>
                 Name:<br/>
            <div className="input-group">
                <input type="text" className="form-control"  required placeholder="Enter Your Name...." value={this.state.name}
                onChange={(event)=>{this.setState({name:event.target.value})}}/>
                </div>
                email:<br/>
            <div className="input-group">
                <input type="email" className="form-control" required placeholder="Enter Your email id...."value={this.state.email}
                onChange={(event)=>{this.setState({email:event.target.value})}}/>
                </div>
                number:<br/>
            <div className="input-group">
                <input type="number" className="form-control" required placeholder="Enter Your mobile  number...."value={this.state.number}
                onChange={(event)=>{this.setState({number:event.target.value})}}/>
                </div>
                Password:<br/>
            <div className="input-group">
                <input type="password" className="form-control" required placeholder="Enter Your   password....."value={this.state.password}
                onChange={(event)=>{this.setState({password:event.target.value})}}/>
                </div>
                <input type="button" value="Register" class="btn btn-outline-primary mt-4" onClick={this.saveData}/>
                </form>
                </div>
              
            </React.Fragment>
        );
    }
    
    saveData = () =>{

        //console.clear();
         //console.log(this.state);
 
         const url ='http://localhost:5000/users/';
        
         let promise = fetch(url,{
           headers:{
             "Content-Type":"application/json",
           },
             method:"POST",
             body:JSON.stringify(this.state),
          });
          promise.then((response)=>{
             if(response.ok){
                this.setState({
                    name:"",
                    email:"",
                    number:"",
                    password:"",
                    msg:<span className="success">User created successfully</span>
                });
              
                return redirect('showuser');
            }
            

        }).then((data)=>{
             console.log(data);
          }).catch((error)=>{
             console.log(error);
             this.setState({
                msg:<span className="error">Oops try again later</span>
             });
             let ID1 = setTimeout(()=>{
                this.setState({
                    msg:"",
                });
             },5000);
          });
         }
        
        }
         
