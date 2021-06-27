//import { Fragment } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './DashBoard/Dashboard';
import Login from './Login/Login';


const ProtectedRoutes = ({component : Component , ...props}) => {
    debugger;
    return (

        <Route {...props} render= { (props)=> {
            return(
                localStorage.getItem("authkey")
                ? <Component {...props} />
                : <Redirect to ="/"></Redirect>
            )           
        }}/>
    )
}

const PublicRoutes = ({component : Component , ...props}) => {
    debugger;
    return (

        <Route {...props} render= { (props)=> {return (<Fragment><Component {...props}/></Fragment> )
        }}/>
    )
}

const AppRoutes = (props) => {
    return (
        <Router>
            <Switch>
            <PublicRoutes exact path = "/" component= {Login}></PublicRoutes>
            <PublicRoutes exact path = "/login" component= {Login}></PublicRoutes>
            <ProtectedRoutes exact path = "/dashboard" component = {Dashboard}></ProtectedRoutes>
            <PublicRoutes path= '*' > <div>404 not found</div></PublicRoutes>
            </Switch>           
        </Router>
    )

}

export default AppRoutes;