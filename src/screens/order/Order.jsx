import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link,Redirect} from 'react-router-dom';
import {deleteAllBurger} from '../../store/action/operationWithBurger';
import './style.css'
const Order=(props)=>{
    let now=new Date();
    let {deleteAllBurger,orderBurgers}=props;
    const handleClick=()=>{
        deleteAllBurger();
    }
    return(
        orderBurgers.length !==0 ?
        <div className='order'>
            <h1>Your's order</h1>
            <div className='operation'>
                <Link to="/">Add another burger</Link>
                <Link className='completeOrder' onClick={handleClick} to="/">Complete order</Link>
            </div>
            {orderBurgers.map((burger,index)=>
                <div key={now.getTime() +Math.floor(Math.random() * 1000) + -1000}>
                    <h2>{index+1}) {burger.name}</h2>
                    <img src={burger.img} alt={burger.name}/>
                    {burger.ingredients.map(ingredient=><div key={Math.floor(Math.random() * 2000) + -2000}><p>{ingredient.name} : {ingredient.quantity}</p></div>)}
                </div>
                )
            }
        </div>:
        <Redirect to='/'></Redirect>)
} 
const mapDispatchToProps = {
    deleteAllBurger
};

const mapStateToProps = (state) => ({
    orderBurgers:state.order.orderBurgers
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Order))