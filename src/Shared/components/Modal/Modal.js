import { Fragment } from "react";
import {Redirect } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log('clicked');
  console.log(handleClose);
  return (
    <div className={showHideClassName}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">&times;</span>
        </div>
        <div class="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div class="modal-footer">
          <button class="close" type="button" onClick={handleClose} position="middle">
          Close
        </button>
        </div>       
      </div>
    </div>
    // <Fragment>
    //   <div className="modal">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <span className="close">&times;</span>
    //         <h2>Modal Header</h2>
    //       </div>
    //       <div className="modal-body">
    //         <p>Some text in the Modal Body</p>
    //         <p>Some other text...</p>
    //       </div>
    //       <div className="modal-footer">
    //         <h3>Modal Footer</h3>
    //       </div>
    //     </div>
    //   </div>

    // </Fragment>


  );
};

export default Modal;