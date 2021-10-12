import React from "react";
import "../Styles/home.css";
import axios from "axios";


class contact extends React.Component {
  constructor() {
    super();
    this.state = {
        email:'',
        location:'',
        firstname:'',
        lastname:'',
        phNumber:'',
        message:'',
        contact:[]
    };
  }

  handlecontact = ()=>{
    const {  email, location, firstname, lastname,phNumber,message, } = this.state;
    const repObj = {
        email:email,
        location:location, 
        firstname:firstname,
        lastname:lastname,
        phNumber:phNumber,
        message:message,
    };
       axios({
        url:'http://localhost:2021/contact',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: repObj
        
    })
    .then(response => {
        if (response) {
            this.setState({
                
                email: '',
                location: '',
                firstname: '',
                lastname: '',
                phNumber:'',
                message:'',
                });
                alert(response.data.message)
              
        }
       
    })
    .catch(err => console.log(err))
  }


  handleInputChange = (event,state)=>{
    this.setState({[state] : event.target.value});
}

  render() {
    return (
      <div>
    
                        <div className=" row  align-items-center">
                        <div class="col col-lg-4"></div>
                        <div class="col col-lg-4 ps-5 pe-5 mt-5 align-items-center"> 
                        <h3 className="Acc-name">Contact-Us</h3>
                            <span> <label className="Name" style={{ padding: '5px', }}>firstname</label>
                            <input type="text" placeholder="enter your name" className="form-control" style={{ padding: '5px',}} onChange={(event) => this.handleInputChange(event, 'firstname')} /></span>
                            <span>  <label className="Name" style={{ padding: '5px', }}>lastname</label>
                            <input type="text" placeholder="enter your name" className="form-control" style={{ padding: '5px', }} onChange={(event) => this.handleInputChange(event, 'lastname')} /></span>
                            <label className="Name">E-mail</label>
                            <input type="email" placeholder="enter your name" className="form-control" style={{ padding: '5px', }} required onChange={(event) => this.handleInputChange(event, 'email')} />
                            <label className="Name">Ph.number</label>
                            <input type="tel" placeholder="enter your number" className="form-control" style={{ padding: '5px', }} onChange={(event) => this.handleInputChange(event, 'phNumber')} />
                            <label className="Name">Location</label>
                            <input type="text" placeholder="enter your city" className="form-control" style={{ padding: '5px', }} required onChange={(event) => this.handleInputChange(event, 'location')} />
                            <label className="Name">Message</label>
                            <textarea type="text" placeholder="enter message" className="form-control text-areaH" style={{ padding: '5px', }} onChange={(event) => this.handleInputChange(event, 'message')} />
                            <button className="btn btn-danger mt-3"  onClick={this.handlecontact}>Submit Feedback</button> </div>
                        <div class="col col-lg-4"> </div>
                            
                            
                        </div>
        </div>
    );
  }
}
export default contact;
