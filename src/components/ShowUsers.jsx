import React,{Component} from "react";
import { redirect } from "../Router";
import { route } from "../Router";
import config from "../config/config.json"

export default class ShowUsers extends Component{
  constructor(props){
    console.log('This is mouting state : 1st cycle');
    super(props);
    this.state = {
            name:"",
            email:"",
            number:"",
            password:"",
            users:[],
            msg:""
    }
  }
  componentDidMount(){

    console.log('this is update state :2nd cycle');
    const url = 'http://localhost:5000/users/';
  /************Start of Promise Fetch Api ***************/
		
  let promise = fetch(url);
  promise.then((response)=>{
    return response.json();
  }).then((data)=>{
    //Object Json
    if(Array.isArray(data)){
      console.log('chal rha hai');
      
      this.setState({
        users:data	
      })
    }

  }).catch((error)=>{
    console.log(error);
  })
  
  /************End of Promise Fetch Api ***************/
  
  
}

componentWillMount(){		
  console.log("Unmounted is 3rd cycle");
}
    render = () => {
      console.log(this.state.users,"render");
        return(
           <React.Fragment>
            <div className="container">
  <h1>user record</h1>
  {this.state.msg}
           
  <table border="1" rules="all" className="table">
    <thead>
      <tr >
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
       {this.getRecords()}
      
    
    </tbody>
  </table>
</div>
           </React.Fragment>
        );
    }
    getRecords = () =>{
		
      return this.state.users.map((item,index)=>{
        return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.number}</td>
         {/*<td><a href="#edit/{+item.id}">Edit</a></td>
         <td><a href="#delete/{+item.id}">Delete</a></td>*/}
         <td><button type="button"
          onClick={()=>{this.editUser(item.id)}} >Edit</button></td>
         <td><button type="button" 
         onClick={()=>{this.deleteUser(item.id,index)}}>
          Delete
          </button>
         </td>
        </tr>
        )
      })
      
      
    }
    deleteUser = (id,index) => {
      if(window.confirm('Are you sure want to delete')){
        //fetch api
        console.log(id);
        
        const url = 'http://localhost:5000/users/'+id;
         let promise = fetch(url,{
          headers:{
            "Content-Type":"application/json",
          },
            method:"DELETE",
           
         });
         promise.then((response)=>{
            if(response.ok){

            
              let userData = [...this.state.users];
              userData.splice(index,1);

               this.setState({
                  users:userData,
                   msg:<span className="success">User deleted successfully</span>
               });
             setTimeout(()=>{
              this.setState({
                msg:""
              });
             },3000);
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
    editUser = (id) => {
     // console.log(id);
      return redirect('edituser/'+id);
    }

  }

