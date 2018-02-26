import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput'


function CardNumberHolder(CardInput) {

  return class extends React.Component {

  state={   
      cardNumber: ""
  }   

  handleChange= event =>{
    console.log("handleChange",event.target.value);
    
      this.setState({cardNumber: event.target.value});
  }

  render(){
      const {cardNumber} = this.state;
      return <div>
          <CardInput onChange={this.handleChange} value={cardNumber}/>
      </div>
      
  }
}
}

const Wrraper =CardNumberHolder(CardNumberInput); 

Wrraper.displayName = "Card number formating";

export default Wrraper;


// class CardNumberHolder extends Component{
//     state={   
//         cardNumber: ""
//     }   

//     handleChange= event =>{
//       console.log("handleChange",event.target.value);
      
//         this.setState({cardNumber: event.target.value});
//     }

//     render(){
//         const {cardNumber} = this.state;
//         return <div>
//             <CardNumberInput onChange={this.handleChange} value={cardNumber}/>
//         </div>
        
//     }
// }

