import React, {Component} from 'react';

function CardNumberInput({onChange,value}){        
  const format = value =>{        
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
      return <input 
        onChange={onChange} 
        name="cardNumber"
        value={format(value)} />;
};

export default CardNumberInput;

// function CardNumberInput(WrappedComponent){        

//    return class extends React.Component {
//        constructor(props) {
//          super(props);
//          const {cardNumber} = this.props;
//          this.state = {
//            number: this.format(cardNumber)
//          }
//        }

//    format = value =>{        
//        if(value==null) value = "";
//        value += "";
//        let temp = value.replace(/ /g, "");
//        let newString = "";
//        temp.split('').forEach((element, i) => {
//            newString += element;
//            if(((i+1)%4 === 0) && (temp.length>i+1)){
//                newString += " ";
//            }
//        });

//        return newString;          
//    }    

//    normalize = value =>{
//        return value.replace(/ /g, "");
//    }

//    componentWillReceiveProps(nextProps){       

//       //смотри внимательней что передаешь и как принимаешь
//       const {value} = nextProps;
//        //const {cardNumber} = nextProps;
//        this.setState({number: this.format(cardNumber)})        
//    }
//    render() {      
//        const {number} = this.state;
       
//        return (
//          <WrappedComponent  {...this.props}  value={number}/>
//        )
//      }
// };
// }

// const Input = props => <input onChange={props.onChange} name="cardNumber" value={props.value} />;

// //const CardNumberInput = cardNumberInput(Input);
// //.displayName = "CardNumberInput";

// export default CardNumberInput(Input);