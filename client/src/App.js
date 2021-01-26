import React from 'react';
import styled from 'styled-components';
import {createBrowserHistory} from "history";
import {Route, Router} from "react-router-dom";
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/Dashboard';


const history = createBrowserHistory();

const Mainwrapper=styled.div`
  padding:4.5vh 5vh 4.5vh 5vh;
  height:100%;
  background-color: #f9f9fb;
  @font-face {
  font-family: anticon;
  src: url("https://at.alicdn.com/t/font_148784_r2qo40wrmaolayvi.eot");
  src: url("https://at.alicdn.com/t/font_148784_r2qo40wrmaolayvi.woff")
      format("woff"),
    url("https://at.alicdn.com/t/font_148784_r2qo40wrmaolayvi.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_148784_r2qo40wrmaolayvi.svg#iconfont")
      format("svg");
}
input{
  overflow:visible;
  margin: 0;
  width: 100%;
  margin-bottom: 0;
  box-sizing: border-box;
  color: rgba(0,0,0,.65);
  :hover
  {
        outline: 0;
        border-color: #40a9ff;
        z-index: 1;
        box-shadow: 0 0 2px rgba(24, 144, 255, 0.2);
  }
  :focus {
        outline: 0;
        border-color: #40a9ff;
      }
}

  button{
  outline:0;
  }
`;



function App() {
  return (
    <Router history={history}>
    <Mainwrapper>
      <div style={{boxSizing: 'border-box'}}>
      <Route exact path='/' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route exact path='/blockchain' component={Dashboard}/>
   
      </div>
    </Mainwrapper>
    </Router>
  );
}

export default App;
