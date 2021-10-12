import React from 'react';
import '../Styles/header.css';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import  Darktheme  from  "react-dark";



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'solid 1px brown',
        backgroundColor: 'var(--bg-color)'

    },
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            loginModalIsOpen: false,
            isLoggedIn: false,
            loggedInUser: undefined,
            AccModalIsOpen: false,
            ANOTHERModalIsOpen: false,
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            phNumber:'',
            address:'',
            user:[]
        }
    }

    handleCloseModal = (state, value) => {
        this.setState({ [state]: value });
    }

 


    handleInputChange = (event,state)=>{
        this.setState({[state] : event.target.value});
    }
    handleSignUp = ()=>{
        const {  email, password, firstname, lastname,phNumber,address, } = this.state;
        const signUpObj = {
            email:email,
            password:password, 
            firstname:firstname,
            lastname:lastname,
            phNumber:phNumber,
            address:address,
        };
           axios({
            url:'http://localhost:2021/signup',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: signUpObj
            
        })
        .then(response => {
            if (response) {
                this.setState({
                    
                    email: '',
                    password: '',
                    firstname: '',
                    lastname: '',
                    phNumber:'',
                    address:'',
                    });
                    alert(response.data.message)
                  
            }
           
        })
        .catch(err => console.log(err))
  
        this.setState({  AccModalIsOpen: false,
            ANOTHERModalIsOpen:true})
            
    }
    
    handleLogedin = (e) => {
        const { email, password} = this.state;
        const loginObj = {
            email: email,
            password: password
        };
        axios({
            method: 'POST',
            url: 'http://localhost:2021/login',
            headers: { 'Content-Type': 'application/json' },
            data: loginObj
        })
            .then(response => {
                this.setState({
                    isLoggedIn: response.data.isauthenticateduser,
                    email: '',
                    password: '',
                    loggedInUser:email,
                    email:email
                  
                });
                alert(response.data.message)
                sessionStorage.setItem('loggedInUser',  response.data.isauthenticateduser);
                
            })
            .catch(err => console.log(err))
           
    }

    handleLogin = () => {
        this.setState({ loginModalIsOpen: true });
    }


    responseGoogle = (response) => {
      
        this.setState({ isLoggedIn: true, loggedInUser: response.profileObj.name, loginModalIsOpen: false })
        console.log(response)

    }
    responseFacebook=(response) => {
        this.setState({ loggedInUser: response.name, isLoggedIn: true, loginModalIsOpen: false });
        console.log(response)
      }

      handleANOTHER = () => {
        this.setState({ ANOTHERModalIsOpen: true, loginModalIsOpen: false, AccModalIsOpen: false });
    }

    handleAcc = () => {
        this.setState({ AccModalIsOpen: true });
    }

    userLogout = () => {
        this.setState({ isLoggedIn: false, loggedInUser: '' });
    }

    render() {
        const { loginModalIsOpen, isLoggedIn, loggedInUser, AccModalIsOpen,ANOTHERModalIsOpen} = this.state;
        return (
            <div>

                <div className="app-header">
                    <div className="header-logo">
                    <NavLink  className="logo_link" to="/"><b >e!</b></NavLink>
                    </div>

                    <span class="fas fa-sun sun-span" ></span>
                    <div className="dark"> <Darktheme/></div>
                    <span class="fas fa-moon moon-span"></span>
                    
                    {isLoggedIn ? <div className="user-button-gp">
                        <div className="user-login">{loggedInUser}</div>
                        <div className="user-signup" onClick={this.userLogout}>Logout</div>
                    </div> :
                        <div className="user-button-gp">
                            
                            <div className="user-login" onClick={this.handleLogin}>Login</div>
                            <div onClick={this.handleAcc} className="user-signup">Create an account</div>
                        </div>
                    }
                </div>
                <Modal
                    isOpen={loginModalIsOpen}
                    style={customStyles}
                >
                    <div className="fas fa-times close-btnH"  onClick={() => this.handleCloseModal('loginModalIsOpen', false)}></div>
                    <div className="loginModal">Login</div>
                    <div style={{ padding: '20px 20px 20px 0px', fontWeight: '500', fontSize: '50px', color: 'white'}}>
                    
                        <GoogleLogin
                            clientId="705392412675-rh3uhlo093nfug2q1pas5681jbq0t988.apps.googleusercontent.com"
                            buttonText="Continue with Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="googlebtn"
                        />
                        <br/>
                        <div>
                        <FacebookLogin
                            appId="2015827395252931"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook} 
                            className="login-facebook"
                            size="metro"
                        /> </div>
                        <div className="Path"></div>
                        <div>
                            <span className="haveaccountL">Already have an account?<span style={{color:'orange'}}  onClick={this.handleANOTHER}>Login</span></span>
                        </div>
                    </div>
        
                </Modal> 

                <Modal
                    isOpen={AccModalIsOpen}
                    style={customStyles}
                >
                    <div >
                        <div className="fas fa-times close-btnH" style={{ marginTop: '5px', marginRight: '5px', float: 'right' }} onClick={() => this.handleCloseModal('AccModalIsOpen', false)}></div>
                        <div style={{ padding: '10px' }}  >
                            <h3 className="Acc-name">Create An Account</h3>
                            <span> <label className="Name">firstname</label>
                            <input type="text" placeholder="enter your name" className="form-control" onChange={(event) => this.handleInputChange(event, 'firstname')} /></span>
                          <span>  <label className="Name">lastname</label>
                            <input type="text" placeholder="enter your name" className="form-control" onChange={(event) => this.handleInputChange(event, 'lastname')} /></span>
                            <label className="Name">E-mail</label>
                            <input type="email" placeholder="enter your name" className="form-control" required onChange={(event) => this.handleInputChange(event, 'email')} />
                            <label className="Name">password</label>
                            <input type="password" placeholder="enter your password" className="form-control" required onChange={(event) => this.handleInputChange(event, 'password')} />
                            <label className="Name">Ph.number</label>
                            <input type="tel" placeholder="enter your number" className="form-control" onChange={(event) => this.handleInputChange(event, 'phNumber')} />
                            <label className="Name">Address</label>
                            <textarea type="text" placeholder="enter your address" className="form-control text-areaH" onChange={(event) => this.handleInputChange(event, 'address')} />
                            <button className="btn btn-danger PROCEED" onClick={this.handleSignUp}>Register </button>
                            
                        </div>
                        <div className="Path"></div>
                        <div>
                            <span className="haveaccount">Already have an account?<span style={{color:'orange'}}  onClick={this.handleANOTHER}>Login</span></span>
                        </div>

                    </div>
                </Modal>
                <Modal
                    isOpen={ANOTHERModalIsOpen}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <div>
                    <div className="loginModal">Login</div>
                    <div className="fas fa-times close-btnH" style={{ marginTop: '5px', marginRight: '5px', float: 'right' }} onClick={() => this.handleCloseModal('ANOTHERModalIsOpen', false)}></div>
                    <div>
                    <label className="NameH">E-mail</label>
                            <input type="email" placeholder="enter your name" className="form-control" required onChange={(event) => this.handleInputChange(event, 'email')} />
                            <label className="NameH">password</label>
                            <input type="password" placeholder="enter your password" className="form-control" required onChange={(event) => this.handleInputChange(event, 'password')} />
                            <button className="btn btn-danger PROCEED" onClick={this.handleLogedin}>Login </button>
                    </div>
                    </div>
                    </Modal>    

            </div>
        )
    }
}

export default Header;