import React from 'react'
import { Link } from 'react-router-dom'
import './reset-password.css'
import logoMobile from '../resources/logo-mobile.png'
import logo from '../resources/logo.png'
import bgImg3 from '../resources/bg-img3.png'
import bgImg4 from '../resources/bg-img4.png'
import circle from '../resources/icons/check-circle-outline.png'

const users = require('./users.json');
let user;
let email;

function Success(props){
    return(
        <div className="success">
            <img className="check" src={circle} alt=""/>

            <p>{props.text}</p>
        </div>
    )
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputEmail : '',
            submitEmail : '',
            inputPassword : '',
            submitPassword: '',
            confirmPassword : '',
            exists : false,
            timeout : false,
            finish : false,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordChange1 = this.handlePasswordChange1.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFinish = this.handleFinish.bind(this)
    }


    handleEmailChange(e){
        this.setState({inputEmail : e.target.value})
    }

    handlePasswordChange(e){
        this.setState({inputPassword: e.target.value,})
        console.log(this.state.inputPassword);
    }

    handlePasswordChange1(e){
        this.setState({confirmPassword: e.target.value})
        console.log(this.state.confirmPassword);
    }

    handleClick(e){
        e.preventDefault()
        this.setState({submitEmail: this.state.inputEmail})
        email = this.state.submitEmail;
        user = users.find(item => item.email === email)
        if(user)this.setState({timeout : true});
            
        const s = setTimeout(() => {
            this.setState({timeout: false})
        }, 3000)
    }

    handleFinish(e){
        e.preventDefault()
        this.setState({finish : true, timeout : true})

    }

    render(){
        let input = user ? <input type="password" placeholder="Enter Password" onChange={this.handlePasswordChange} /> :
         <input type="email" placeholder="Enter Email" onChange={this.handleEmailChange} />
        
        let button = <button onClick={this.handleClick}></button>;

        if((this.state.confirmPassword === this.state.inputPassword) && (this.state.inputPassword !== '')){
            console.log('hha');
            button = <button onClick={this.handleFinish}>kkk</button>
        }

        let form = (
            <div className="form_div">
                {user ? <p>The password should have atleast 6 characters</p> : <p>To enable us reset your password, enter your email below</p>}
                <form className="form" action="">
                    <h2>{user ? 'New Password' : 'Email Address'}</h2>
                    {input}
                    {user ? <h2 style={{marginTop: '40px'}}>Confirm Password</h2> : null}
                    {user ? <input type="password" placeholder="Enter Password" onChange={this.handlePasswordChange1} /> : null}
                    {button}
                </form>
            </div>
        )     

        return(
            <>
            {
                user ? 
                    (this.state.timeout) ? 
                        (this.state.finish) ? 
                            <Success text="Your password has been changed successfully"/> : 
                        <Success text='A recovery email has been sent to your email address.' /> : 
                    form : 
                form
            }
            </>
        )
    }
}


class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
                <h2>Reset Password</h2>

                <Form/>

                <hr />

                <Link to ='/sign-in' style={{textDecoration : 'none'}}><p>Back to Login</p></Link>

            </div>
        )
    }
}


class Reset extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="reset">
                <div className="logos">
                    <img className="logo-mobile" src={logoMobile} alt="logo" />
                    <img src={logo} alt="logo" />
                </div>
                <Card/>
                <img className='bg-img-3' src={bgImg3} />
                <img className='bg-img-4' src={bgImg4} />
            </div>
        )
    }
}

export default Reset
