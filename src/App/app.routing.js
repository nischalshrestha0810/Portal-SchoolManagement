import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './DashBoard/Dashboard';
import Login from './Login/Login';


const AppRoutes = (props) => {

    console.log('inside approutes', props);
    // if(props.path === '/dashboard'){
    //     history 
    // }
    return (
        <Router>
            { props.path ==='/Login' 
               ? <Route exact path = "/" render={() => (<Login setisLoggedIn={props.setisLoggedIn} setrouteDashboard={props.setrouteDashboard}> </Login>)} /> 
               : props.path === '/dashboard' 
               ? <Route exact path = "/dashboard" component={Dashboard}></Route>
                :<Route path='*'><div>404 NOT FOUND</div> </Route>

            }
        </Router>

    )

}

export default AppRoutes;