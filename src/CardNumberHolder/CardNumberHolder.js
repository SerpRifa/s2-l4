import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

function CardNumberHolder(WrappedComponent){
        
    return class CardNumberHolder extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            cardNumber: ""
          };
        }

    handleChange= event =>{
        let {value} = event.target;
        
        this.setState({cardNumber: value});
    }

    render(){
        const {cardNumber} = this.state;
        //console.log('cardNumber', cardNumber);
        return <div>                        
            <WrappedComponent onChange={this.handleChange} value={cardNumber} />            
        </div>
        
    }
}};

//CardNumberHolder.displayName = "Card number formating";

export default CardNumberHolder(CardNumberInput);