import React,{Component} from "react";
import { route,redirect } from "../Router";
import config from "../config/config.json"
export default class EditUser extends Component{
   
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
                    
                        <h1>edit user  here</h1>
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
                <input type="button" value="update" class="btn btn-outline-primary mt-4" 
                //onClick={()=>{this.updateData(this.props.userId)}}/>
                onClick={()=>{this.updateData(this.props.userId)}}/>
                </form>
                </div>
              
            </React.Fragment>
        );  
    }
    
  componentDidMount(){
    //Api se data lekr aynge
    let id = this.props.userId;
    //const url = "http://localhost:5000/users/"+id;
    //console.log("this is edit components",this.props);
   let promise =fetch(config.LOCAL_URL+id).then((response)=>{
    if(response.ok){
        return response.json();
    }
   }).then((data)=>{
        this.setState({
            name:data.name,
            email:data.email,
            number:data.number,
            password:data.password
        })
   }).catch((error)=>{
      console.log(error);
   });
  }
  updateData = () => {
    let id = this.props.userId;
    let updateUser ={
        name:this.state.name,
        email:this.state.email,
        number:this.state.number,
        password:this.state.password
    }
    console.log(config);
    //console.log(process.env)
    let promise = fetch(config.LOCAL_URL+id,{
        headers:{
            "content-Type":"application/json"
        },
        method:"PUT",
        body:JSON.stringify(updateUser)
    }).then((response)=>{
         if(response.ok){
            return redirect('showuser');
         }   
    }).then((data)=>{

    }).catch((error)=>{

    });
  }
  
        }
         
