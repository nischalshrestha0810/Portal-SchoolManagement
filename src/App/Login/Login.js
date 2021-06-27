import { Fragment } from 'react';
import logo from '../../Shared/img/teaach.png';
import Header from '../../Shared/components/Header/Header';
import React, { Component } from 'react';
import Notification from '../../utils/Notifications/Notification';

class Login extends Component {
  users = [
    {username: "nischal", password : "nischal"},
    {username: "ram", password : "ram"},
  ]
  constructor(props) {
    super(props);
    this.state = {
      loginData: {},
      isSubmit: false
    }
  }
  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }
  handleChanges = (e) => {
    const { name, value } = e.target;
    const newLoginData = {
      ...this.state.loginData,
      [name]: value
    }
    this.setState({ loginData: newLoginData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit');
    if(this.users.find(u=> u.username === this.state.loginData.username && u.password === this.state.loginData.password)){
      this.props.history.push('/dashboard');
      localStorage.setItem("authkey", "testvalueguid")
    }
    else{
      debugger;
      Notification.handleError({message: "error in login"})
      this.props.history.push('/');
    }
   
  }
  render() {
    return (
      <Fragment>
        <Header isLoggedin={false} />
        <div className="login__page">
          <div className="login__page-box form_login">
            <h4>Login</h4>
            <form>
              <input type="text" name="username" placeholder="Enter Username" onChange={this.handleChanges} autoComplete="off" />
              <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChanges} autoComplete="off" />
              <button type="submit" className="btn btn-login" onClick={this.handleSubmit}>Login</button>
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
}

export default Login;


// import { Fragment } from 'react';
// import logo from '../../Shared/img/teaach.png';
// import { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { ApiServices } from '../api.services'
// import Header from '../../Shared/components/Header/Header';
// import React, { Component } from 'react';
// const Login = (props) => {
//   //console.log('insied login',props);
//   const [UserName, setUserName] = useState('');
//   const [Password, setPassword] = useState('');

//   const [loginData, setLoginData] = useState({});

//   const handleChanges = (e) => {
//     console.log('called');
//     const { name, value } = e.target;
//     const newLoginData = {
//       ...loginData,
//       [name]: value
//     }
//     console.log('login >>', loginData);
//     setLoginData(newLoginData)
//   }

//   const onSubmit = (e) => {

//   }

//   async function getUser() {
//     // return fetch('http://localhost:8100/users', { mode: 'cors', method: 'GET' }).then(data => {
//     //   return data.json();
//     // });
//     let users = await new ApiServices().getUsers();
//     console.log('logusers', users);
//     return users;
//   }

//   const authenticate = async e => {
//     e.preventDefault();
//     const users = await getUser();
//     if (users && users.length > 0) {
//       props.setisLoggedIn(users.find(ur => ur.username === UserName && ur.password === Password) ? true : false);
//       props.setrouteDashboard('/dashboard');
//     }
//   }

//   return (
//     <Fragment>
//       <Header isLoggedin={false} />
//       <div className="login__page">
//         <div className="login__page-box form_login">
//           <h4>Login</h4>
//           <form>
//             <input type="text" name="username" placeholder="Enter Username" onChange={handleChanges} autoComplete="off" />
//             <input type="password" name="psw" placeholder="Enter Password" onChange={handleChanges} autoComplete="off" />
//             <button type="submit" className="btn btn-login" onClick={authenticate}>Login</button>
//           </form>
//         </div>
//         <div className="login__page-box info">
//           <h4>Namastey!</h4>
//           <h6>What's the benefit?</h6>
//           <ul>
//             <li><span><i className="fas fa-chevron-circle-right"></i></span>  Exciting Dashboard as per requirement</li>
//             <li><span><i className="fas fa-chevron-circle-right"></i></span>  User friendly Interface</li>
//             <li><span><i className="fas fa-chevron-circle-right"></i></span>  Human Resource Management</li>
//             <li><span><i className="fas fa-chevron-circle-right"></i></span>  Saves time of teachers and administrators</li>
//           </ul>
//           <div className="sts_img">
//             <img src={logo} width="300px" height="300px" />
//           </div>
//         </div>

//       </div>
//     </Fragment>

//   );
// }

// export default Login;

