import React, {Component} from 'react';

const CardNumberInput =({onChange, value})=>{
    return <input  name="cardNumber" onChange={onChange} value={value} /> 
}

class CardNumberHolder extends Component{
    state={   
        cardNumber: ""
    }   

    handleChange= event =>{
        let {value} = event.target;
        console.log(value);
         let temp = value.replace(/ /g, "");
        let newString = "";
        temp.split('').forEach((element, i) => {
            newString += element;
            if(((i+1)%4 === 0) && (temp.length>i+1)){
                newString += " ";
            }
        });

        this.setState({cardNumber: newString});


    }

    render(){
        const {cardNumber} = this.state;
        return <div>
            <CardNumberInput onChange={this.handleChange} value={cardNumber}/>
        </div>
        
    }
}

CardNumberHolder.displayName = "Card number formating";

export default CardNumberHolder;