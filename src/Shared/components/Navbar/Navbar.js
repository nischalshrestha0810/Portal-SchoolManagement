import { Fragment, useEffect, useState } from "react";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";


const Navbar = (props) => {

    const [isLogout, setisLogout] =useState(true);
    const [confirm, setConfirm] = useState(false);
    useEffect(()=>{ console.log("called useeffect"); setConfirm(false); setisLogout(false)}, []);
    const logOut = () => {
        console.log("clicked logout")   
        setTimeout(() => {
            
        }, 5000);
        setisLogout(true); 
        
        
    }
    if(confirm === true){
        console.log("check this");
        localStorage.removeItem("authkey");
        props.history.push("/");
    }
  

    //menuitems will be displayed from props menuitems//
    return (
        <Fragment>
             { isLogout === true ?  <ConfirmDialog setConfirm={setConfirm} setisLogout={setisLogout}></ConfirmDialog> : null}
            <nav className="left__navigation-menu">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-user-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-question-circle"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={logOut}>
                            <i className="fas fa-power-off" ></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </Fragment>

    );
}

export default Navbar;