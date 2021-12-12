import { Link } from 'react-router-dom';
import './App.css';
import React from 'react';
import logo from './resources/logo.png'
import logo1 from './resources/logo1.png'
import logoMobile from './resources/logo-mobile.png';
import cross from './resources/cross.png'
import menuBar from './resources/menu-bar.png';
import image1 from './resources/image-1(1x).png';
import icon1 from './resources/icons/icon-1.png';
import icon2 from './resources/icons/icon-2.png';
import icon3 from './resources/icons/icon-3.png';
import icon4 from './resources/icons/icon-4.png';
import icon5 from './resources/icons/icon-5.png';
import icon6 from './resources/icons/icon-6.png';
import icon7 from './resources/icons/icon-7.png';
import sponsor1 from './resources/image-7.png';
import sponsor2 from './resources/image-10.png';
import sponsor3 from './resources/image-9.png';
import sponsor4 from './resources/image-6.png';
import fb from './resources/facebook.png'
import linkedIn from './resources/linkedIn.png'
import twitter from './resources/twitter.png';
import ig from './resources/instagram.png'
import payroll from './resources/payroll.png'
import drl from './resources/drl.png'
import drl1 from './resources/drl1.png'


function LoginButton(props) {
  return (
    <Link to="/sign-in"><button className="log" onClick={props.onClick}>
      Log in
    </button></Link>
  );
}

function LogoutButton(props) {
  return (
    <button className="log" onClick={props.onClick}>
      Log out
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        {button}
        <button className="sign-up">Sign up</button>
      </div>
    );
  }
}

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleCrossClick = this.handleCrossClick.bind(this)
    this.state = {
      on : false,
      displayimage : 'block',
      displayCross : "none"
    }
  }

  handleImageClick(){
    this.setState({ on: !this.state.on, displayImage: 'none', displayCross: 'block' })
  }

  handleCrossClick(){
    this.setState({ on: !this.state.on, displayImage: 'block', displayCross: 'none' })
  }

  render(){
    return (
      <>
        <nav className="navbar">
          <img className="logo-img-mobile" src={logoMobile} alt="logo"/>
          <img className="logo-img" src={logo}/>
          <img className="menu-bar-img" style={{display: this.state.displayImage}} src={menuBar} onClick={this.handleImageClick}/>
          <img className="cross" src={cross} style={{display: this.state.displayCross}} onClick={this.handleCrossClick}/>
          <div className="nav-items">
            <div className="sign-up">
              Sign up
            </div>
            <Link to='/sign-in'>
              <div className="sign-in">
                Sign in
              </div>
            </Link>
          </div>
        </nav>
        {this.state.on ? <DropDown/> : null}
      </>
    )
  }
}

function DropDown(props) {
  return(
    <div className="drop-down" >
      <h4 className="features">
        Features
      </h4>
      <h4 className="about">
        About
      </h4>
      <div className="buttons">
        <LoginControl/>
      </div>
    </div>
  )
}

const frame1 = (
  <div className="frame1">
    <div className="hero-text">
      <h1>Throw paperwork into the trash where it belongs.</h1>
      <p>Eliminate all the hassle involved in managing people operations by automating it.</p>
    </div>
    <img className="frame1-img" src={image1}/>
  </div>
);

function Resources(props){
  return(
    <div className="resources">
      <img src={props.img} />
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  )
}

const frame2 = (
  <>
  <section className="frame2">
    <h1>
      Human Resources
    </h1>
    <p>
      Onboard new employees, manage the employee lifecycle and measure employee performance.
    </p>
    <div className="res">
      <Resources img={icon1} heading='Employee Management' text='From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team.'/>
      <Resources img={icon2} heading='Performance Management' text='Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews.'/>
      <Resources img={icon3} heading='Paid Time Off' text='Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.'/>
    </div>
  </section>
  <img className="drl1" src={drl1}/>
  </>
)

const frame3 = (
  <>
  <section  className="frame3">
    <div className='frame-3'>
      <div className="frame-desc">
        <h1>Admin & Logistics</h1>
        <p>Manage and track company assets as well as logistics for travelling employees</p>
      </div>
      <div className="res">
        <Resources img={icon5} heading='Travel & Logistics' text='Make travel requests, get approvals, and have access to travel information.'/>
        <Resources img={icon4} heading='Asset Management' text='Manage the acquisition, assignment, and disposition of assets seamlessly.'/>
      </div>
    </div>  
    <img className="drl" src={drl}/>
  </section>
  </>
)

const frame4 = (
  <>
  <section  className="frame4">
    <div className="frame-4">
      <div className="frame-desc">
        <h1>Finance</h1>
        <p>Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies</p>
      </div>
      <div className="res">
        <Resources img={icon6} heading='RE Vouchers' text='Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers'/>
        <Resources img={icon7} heading='Payroll' text='Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.'/>
      </div>
    </div>  
    <img className="payroll" src={payroll} />
  </section>
  </>
)

function Sponsors(){
  return(
    <div className="sponsors" >
      <div className="sponsor1">
        <img className="unn" src={sponsor1} alt="unn" />
        <img className="genesys" src={sponsor2} alt="Genesys" />
      </div>
      <div className="sponsor2" >
        <img className="private-estates" src={sponsor3} alt="Private-Estates" />
        <img className="tenece" src={sponsor4} alt="Tenece" />
      </div>
    </div>
  )  
}

function Footer(){
  return(
    <div className="footer">
      <div>
        <img src={logo1} alt="logo"/>
        <p className="text">Throw paperwork into the trash.</p>
      </div>
      <div className="xx">
        <div className="social-media">
          <img src={fb} alt="logo"/>
          <img src={twitter} alt="logo"/>
          <img src={linkedIn} alt="logo"/>
          <img src={ig} alt="logo"/>
        </div>
        <p className="copyright">Copyright &copy; Genesys DevStudio.</p><span>   All rights reserved.</span>
      </div>
    </div>
  )
}

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Nav/>
        {frame1}
        {frame2}
        <div className="frames3and4" >
          {frame3}
          {frame4}
        </div>
      <Sponsors />
      <Footer/>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Nav/>
//       {frame1}
//       {frame2}
//       <div className="frames3and4" >
//         {frame3}
//         {frame4}
//       </div>
//     <Sponsors />
//     <Footer/>
//     </div>
//   );
// }

export default App;
