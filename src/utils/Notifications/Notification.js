import React, { Component } from 'react';
import Modal from '../../Shared/components/Modal/Modal';


// class Notification extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showmodal: props.showmodal ? props.showmodal : false,
//             message : ""
//         }
//     }

//     componentDidMount(){

//     }

//     componentDidUpdate(){
//     }

//     handleSuccess = (props) => {

//         this.setState({showmodal : true, message : props.message});

//     }

//     handleError = (props) => {
//         this.setState({showmodal : true});
//     }

//     closeModal = () => {
//         this.setState({showmodal: false})
//     }

//     render() {
//         return (
//             <div>
//                 <Modal props={this.closeModal , this.state.showmodal, this.state.message} ></Modal>
//             </div>
//         );
//     }
// }


const handleSuccess = (props) =>{
    alert(props.message);
}

const handleError = (props) =>{
    alert(props.message);
}

export default {
    handleSuccess,
    handleError
}

