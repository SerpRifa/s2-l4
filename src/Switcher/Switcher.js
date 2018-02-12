import React, {Component} from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import CardNumberHolder from '../CardNumberHolder/CardNumberHolder';
import ModalButton from '../ModalButton/ModalButton';
import './Switcher.css';



class Switcher extends Component{
    state={
        selectedChild: 0
    }

    handleChangeChild = event => {        
        let id = event.target.getAttribute('data-id');        
        
        this.setState({selectedChild: id});
    }    

    renderWrapper = event =>{
        const {selectedChild} = this.state;
        
        switch(selectedChild){            
            case 0: return <VideoPlayer />;
            case 1: return <CardNumberHolder />;
            case 2: return <ModalButton />;
            default: return <VideoPlayer />;
        }
    }

    render(){
        const {selectedChild} = this.state;
        return <div className="switcher">
            {/* <ul className="component-list ">
                <li className="component-list__name" name="VideoPlayer" data-id="0" onClick={this.handleChangeChild}>
                    VideoPlayer
                </li>
                <li className="component-list__name" name="Card number formating" data-id="1" onClick={this.handleChangeChild}>
                    Card number formating
                </li>
                <li className="component-list__name" name="ModalButton" data-id="2" onClick={this.handleChangeChild}>
                    ModalButton
                </li>
            </ul>
            <hr/>
            <div className="component-wrapper">
                {this.renderWrapper()}
            </div> */}
            <ul className="component-list ">
                {this.props.children.map((child, i)=>{

                    let name = child.type.displayName? child.type.displayName: child.type.name;                 
                    
                    return (<li className="component-list__name" key={name} name={name} data-id={i} onClick={this.handleChangeChild}>
                         {name}
                    </li>)
                 })}
            </ul>
            <hr/>
            <div className="component-wrapper">
                {/* {this.renderWrapper()} */}
                {this.props.children[selectedChild]}
            </div>
            
            
        </div>
        
    }
}

export default Switcher;