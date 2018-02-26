import React, {Component} from 'react';

//function CardNumberInput(WrappedComponent){        
class CardNumberInput extends Component{
   
       constructor(props) {
         super(props);
         const {value} = this.props;
         this.state = {
           number: this.format(value)
         }

         console.log('input:', this.state.number);
       }

   format = value =>{        
       if(value==null) value = "";
       value += "";
       let temp = value.replace(/ /g, "");
       let newString = "";
       temp.split('').forEach((element, i) => {
           newString += element;
           if(((i+1)%4 === 0) && (temp.length>i+1)){
               newString += " ";
           }
       });

       return newString;          
   }    

   normalize = value =>{
       return value.replace(/ /g, "");
   }

   componentWillReceiveProps(nextProps){        
       const {cardNumber} = nextProps;
       this.setState({number: this.format(cardNumber)})        
   }
   render() {      
       const {number} = this.state;       
       const {onChange, value} = this.props;
       
       return (
        //  <WrappedComponent  {...this.props}  value={number}/>
         <input onChange={onChange}  name="cardNumber" value={this.format(value)} />

       )
     }
};


//const Input = props => <input  name="cardNumber" />;

export default CardNumberInput;