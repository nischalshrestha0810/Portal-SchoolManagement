import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppRoutes from './app.routing';
import { useState } from 'react';
function App() {
  //const [modalIsOpen, setIsOpen] = useState(false);
  const [routeDashboard, setrouteDashboard] = useState('/');
  // const openModal = () => {
  //   setIsOpen(true);
  // }

  // const closeModal = () => {
  //   setIsOpen(false);
  // }

  const [isLoggedIn, setisLoggedIn] = useState(false);

  if(isLoggedIn === false){
    console.log(isLoggedIn, routeDashboard);
    return <AppRoutes path={'/'} setisLoggedIn={setisLoggedIn}  setrouteDashboard={setrouteDashboard}/>
  }

  if(isLoggedIn === true){  
    return(
      <AppRoutes path={'/dashboard'} isLoggedIn={isLoggedIn}></AppRoutes>      
    ) 
  }
  
  // return (
  //   <div className="App">
  //     </div>
  //   // <Router>
  //   //   <div className="App">
  //   //   {console.log("hereis ", isLoggedIn, routeDashboard)}
  //   //     <Switch>
  //   //       {/* <Route exact path="/" render={(props) => <Login setisLoggedIn={setisLoggedIn} />} >
  //   //         </Route> */}
  //   //       {/* <GuardedRoute path="/dashboard" component={Dashboard} isLoggedIn={isLoggedIn} /> */}
  //   //       <Route component={Dashboard} isLoggedIn={isLoggedIn}></Route>
  //   //       <Route path='*'>
  //   //         <div>404 NOT FOUND</div>
  //   //       </Route>
  //   //     </Switch>

  //   //   </div>
  //   // </Router>

  // );
}


export default App;
