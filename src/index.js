import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './routes/sign-in.jsx';
import Dashboard from './routes/dashboard'
import Reset from './routes/reset-password'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="sign-in" element={<Authentication/>}/>
      <Route path='user/dashboard' element={<Dashboard/>}></Route>
      <Route path="sign-in/reset-password" element={<Reset/>} ></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
