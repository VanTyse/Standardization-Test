import React from 'react'
import './dashboard.css'
import menuBar from '../resources/menu.png'
import avatar from '../resources/image-11.png'
import logo from '../resources/logo.png'
import {user} from './sign-in'
import check from '../resources/icons/check.png'
import employee from '../resources/icons/icon-8.png'
import employee1 from '../resources/icons/icon-9.png'
import { Link } from 'react-router-dom'



    

function Nav(props){
    return(
        <nav className="navbar">
            <div className='left-nav'>
                <div className="images">
                    <img className="menu" src={menuBar} alt="" />
                    <Link to='/' style={{textDecoration : 'none'}}><img className="logo" src={logo} alt="" /></Link>
                </div>
                <div className="text">
                    <p>TM Dashboard</p>
                </div>
            </div>
            <div className="right-nav">
                <img onClick = {props.onClick} className="avatar" src={avatar} alt="" />
            </div>
        </nav>
    )
}
    
function ThingsToDo(props){
    return(
        <div className="things-to-do">
            <div className="circle-and-text">
                <div className="circle"></div>
                <p className='text'>{props.text}</p>
            </div>
            <div className='button'>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

class Roles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked : true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    
    handleClick(){
        this.setState({checked : !this.state.checked})
    }

    render(){
        let isChecked = this.state.checked
        let isChecked1 = !isChecked;

        return(
            <>
                <Role checked={isChecked} backgroundColor='#0052cc' icon={employee} role='Talent Manager' onClick = {this.handleClick}/>
                <Role checked = {isChecked1} backgroundColor='#5243AA' icon={employee1} role='Employee' onClick = {this.handleClick}/>
            </>
        )
    }
}

class Role extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div style={{order : this.props.checked ? '-1' : '1'}} onClick={this.props.onClick} className="role">
                <div className="icon-and-role">
                    <div className="icon">
                        <img style={{backgroundColor : this.props.backgroundColor}} src={this.props.icon}/>
                    </div>
                    <h3>{this.props.role}</h3>
                </div>
                <img style={{display : this.props.checked ? 'block' : 'none'}} src={check} alt="check" />
            </div>
        )
    }
    
}

function DropDown(props){
    return(
        <div style = {{opacity: props.clicked ? '1' : '0'}} className="dropdown">
            <p className='name'>{props.name}</p>
            <h3>Profile</h3>
            <p className="use-as">Use Resource Edge as</p>
            <div className="roles">
                <Roles/>
            </div>
            <hr />
            <Link to="/sign-in"><div className='log-out'><h3>Log Out</h3></div></Link>
        </div>
        
    )
}

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {clicked : false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        let name;
        if (user){
            name = user.name 
        }
        else{
            name = 'Ositadinma Nwangwu';
        }
        
        let className = this.state.clicked ? 'top' : null;
         
        return(
            <div className="dashboard">
                <Nav onClick={this.handleClick}/>
                <DropDown  clicked = {this.state.clicked} name = {name.toUpperCase()} />
                <main className ={`main ${className}`}>
                    <h1>Hello, {name}</h1>
                    <p>Welcome and good to have you back.</p>

                    <h2>Things to do!</h2>
                    <ThingsToDo  text="Upload your employee performance agreement" button="Begin"/>
                    <div className="resume">
                        <ThingsToDo text="Start quarterly self review" button="Resume"/>
                    </div>
                </main>
            </div>
        )
    }
    
}



export default Dashboard
