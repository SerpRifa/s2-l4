import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component{        
    state={
        isModalShow: false
    }

    constructor(props){
        super(props);
    }

    componentWillUnmount(){        
    }

    
    handleShowWindow = event =>{

    }

    hideModal=()=>{
        this.setState({isModalShow: false});
    }

    showModal=()=>{
        this.setState({isModalShow: true});
    }

    renderModal(){
        const {isModalShow} = this.state;

        if(isModalShow){
            return (<Modal domNode={document.querySelector('#portal')}>
                <div className="modal">
                    <div className="modal__fog">
                        <div className="modal__body">
                            <h2>Модальное окно!</h2>            
                            <button name="modal-close" onClick={this.hideModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>)
        }
    }

    render(){
        const {isModalShow} = this.state; 
         return (
         <div onClick={this.handleClick} ref={c=>(this.modal = c)}>
            {isModalShow && this.renderModal()}             
            <button onClick={this.showModal}>Show modal!</button>
         </div>
         )
    }
}

export default ModalButton;