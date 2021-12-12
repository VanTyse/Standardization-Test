import { Link } from 'react-router-dom'
import React from 'react';
import './sign-in.css'
import logoMobile from '../resources/logo-mobile.png'
import logo from '../resources/logo.png'
import bgImg3 from '../resources/bg-img3.png'
import bgImg4 from '../resources/bg-img4.png'
import check from '../resources/icons/check.png'
import eye from '../resources/icons/eye.png'

let users = require('./users.json');
console.log(users[0].name);
let user = null;
let email;

function Input(props){
    function handleClick(){

    }
    return(
        <div className="input">
            <input value={props.value || null} type={props.type} placeholder={props.placeholder} onChange={props.onClick}/>
            <div>
                {<img style={{display : props.exists ? 'block' : 'none'}} src={props.src} alt="" />}
            </div>
        </div>
    )
}

class AuthenticationCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputEmail : '',
            submitEmail : '',
            inputPassword : '',
            submitPassword : '',
            exists : false,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
    }

    handleClick(e){
        this.setState({submitEmail: this.state.inputEmail})
         email = this.state.submitEmail;
         user = users.find(item => item.email === email)
    }
 
    handleEmailChange(e){
        this.setState({inputEmail : e.target.value})
    }

    handlePasswordChange(e){
        this.setState({inputPassword : e.target.value})
    }

    handleClick1(e){
        this.setState({submitPassword: this.state.inputPassword})
    }

    render(){
        let button;
        let user1 = users.find(item => item.email === this.state.inputEmail)
        if (user1){
            const s = setInterval(() => {
                this.setState({exists : true})
            }, 750);
        }
        let input = user ? <Input src={eye} exists={this.state.exists} value={this.state.inputPassword} type="password" placeholder="Enter Password" onClick={this.handlePasswordChange}/> :
            <Input src={check} exists={this.state.exists} type="email" placeholder="Enter Email"  onClick={this.handleEmailChange}/> 
        
        button = user ? <button style={{backgroundColor : '#0052CC'}} type='button' onClick={this.handleClick1}></button> :
        <button style={{backgroundColor : (this.state.exists) ? '#0052CC' : '#f4f5f7'}} type='button' onClick={this.handleClick}></button>

        if(user){
            if (this.state.inputPassword === user.password){
                button = <Link to="/user/dashboard"><button style={{backgroundColor : '#0052CC'}} type='button'>Submit</button></Link>
            }
        }    
        return(
            <>
                <div className="card">
                    <h2 className="log-in">Log in</h2>
                    <p>Access your resource edge account</p>
                    
                    <div className="user-details">
                        <h2>{user? user.name : null}</h2>
                        <p>{user ? user.email : null}</p>
                    </div>
                    
                    <form action="" onSubmit={this.handleSubmit}>
                        <h2 className="passOrEmail">{user ? 'Password' : 'Email Address'}</h2>
                        {input}
                        {button}
                        <hr/>
                        <p>Forgot password?</p>
                    </form>
                </div>
            </>
        )
    }
}

class Authentication extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="authentication">
                    <div className="logos">
                        <img className="logo-mobile" src={logoMobile} alt="logo" />
                        <img src={logo} alt="logo" />
                    </div>
                    <AuthenticationCard/>
                    <img className='bg-img-3' src={bgImg3} />
                    <img className='bg-img-4' src={bgImg4} />
                </div>
            </>
        )
    }
}

export default Authentication;
export {user}; 