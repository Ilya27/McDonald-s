import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Ingredient = (props) =>{
    let [quantity,setQuantity]=useState(props.quantity)
    const  handleClick = (event) => {
        event.preventDefault();
        let operation=event.target.dataset.operation;
        operation === "+" ? setQuantity(++quantity) : quantity === 0 ? setQuantity(0):setQuantity(--quantity);
        props.changeQuantity(props.name,quantity);
      
      }
    return (
<div>
    <div>
        <p>{props.name} : {quantity}</p>
    </div>
    <div  className='operation' onClick={handleClick} >
        <div className='add'><Link data-operation="+" to='#'>Add</Link></div>
        <div className='remove'><Link  data-operation="-" to='#'>Remove</Link></div>
    </div>
</div>
    )
}

export default Ingredient;