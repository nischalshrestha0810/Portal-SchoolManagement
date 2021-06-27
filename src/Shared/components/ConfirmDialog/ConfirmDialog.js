// import { Component } from "react"
import ReactDOM from 'react-dom';
// class ConfirmDialog extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
//     callback(action) {
//         alert(action)
//     }

//     render() {
//         return (

//             <div className='dialog'>
//                 <div>confirm dialog</div>
//                 <button onClick={() => this.props.callback(true)}>Yes</button>
//                 <button onClick={() => this.props.callback(false)}>No</button>
//             </div>
//         )
//     }
// }


const ConfirmDialog = ({ setConfirm, setisLogout, ...props }) => {

    // const callback = (action) => {
    //     alert(action);
    // }
    console.log("props >>" , props);
    console.log("callback >>", setConfirm);

    const setVal = (val)=>{
        console.log("selected action confirm >>", val);
        setConfirm(val);
    }

    const closeDialogue = () => {
        setisLogout(false);
    }
    return ReactDOM.createPortal(
        // <div className='dialog'>
        //     <div>confirm dialog</div>
        //     <button onClick={() => props.callback(true)}>Yes</button>
        //     <button onClick={() => props.callback(false)}>No</button>
        // </div>
        <div className="modal display-block">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={closeDialogue}>&times;</span>
                </div>
                <div class="modal-body">
                    <p>Some text in the Modal Body</p>
                    {/* <p>{message ? message : "test"}</p> */}
                </div>
                <div class="modal-footer">
                    <button onClick={()=> {setVal(true)}}>Yes</button>

                    <button onClick={closeDialogue}>No</button>
                </div>
            </div>
        </div>

        , document.body)

}


export default ConfirmDialog;

