import { Fragment } from 'react';
import logo from '../../Shared/img/teaach.png';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {ApiServices} from '../api.services'
import Header from '../../Shared/components/Header/Header';
const Login = (props) => {
  console.log('insied login',props);
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  
  // useEffect(() => {
  //     fetch('http://localhost:8100/users', { mode: 'cors', method: 'GET' }).then(res => {
  //       return res.json();
  //     }
  //     )
  //     .then((data)=>{
  //       console.log(data)
  //     });
  //   }, []);
  const updateUserName = (e) => {

    setUserName(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  async function getUser(){
    // return fetch('http://localhost:8100/users', { mode: 'cors', method: 'GET' }).then(data => {
    //   return data.json();
    // });
    let users = await new ApiServices().getUsers();
    console.log('logusers' ,users);
    return users;
  }
  
  const authenticate = async e => {
    e.preventDefault();
    const users = await getUser();
    console.log(users);
    if(users && users.length>0){
      props.setisLoggedIn(users.find(ur=> ur.username === UserName && ur.password === Password) ? true : false);
      props.setrouteDashboard('/dashboard');
    }   
  }

  return (
    <Fragment>
      <Header isLoggedin={false} />
      <div className="login__page">
        <div className="login__page-box form_login">
          <h4>Login</h4>
          <form>
            <input type="text" name="username" placeholder="Enter Username" onChange={updateUserName} autoComplete="off" />
            <input type="password" name="psw" placeholder="Enter Password" onChange={updatePassword} autoComplete="off" />
            <button type="submit" className="btn btn-login" onClick={authenticate}>Login</button>
          </form>
        </div>
        <div className="login__page-box info">
          <h4>Namastey!</h4>
          <h6>What's the benefit?</h6>
          <ul>
            <li><span><i className="fas fa-chevron-circle-right"></i></span>  Exciting Dashboard as per requirement</li>
            <li><span><i className="fas fa-chevron-circle-right"></i></span>  User friendly Interface</li>
            <li><span><i className="fas fa-chevron-circle-right"></i></span>  Human Resource Management</li>
            <li><span><i className="fas fa-chevron-circle-right"></i></span>  Saves time of teachers and administrators</li>
          </ul>
          <div className="sts_img">
            <img src={logo} width="300px" height="300px" />
          </div>
        </div>

      </div>
    </Fragment>

  );
}

export default Login;

// Login.propTypes = {
//   setisLoggedIn: PropTypes.func.isRequired
// };