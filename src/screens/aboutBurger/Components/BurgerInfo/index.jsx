import React ,{useState,useEffect}   from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getProductList} from '../../../../store/action/getProduct';
import {orderBurger} from '../../../../store/action/operationWithBurger'
import {Link} from 'react-router-dom';
import Ingredient from './Components/Ingredient';
import './style.css';

const Info=(props)=>{
    let  now = new Date();
    const [infoAboutBurger,setInfoAbout]=useState({});
    let  {burgers,getProductList,orderBurger}=props;
    useEffect(()=>{
        if(!burgers){
            getProductList();
        }else{
            var ourBurger = burgers.find(function(item) {
               return item.name===props.name;
            });
            setInfoAbout(ourBurger)}
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[burgers,infoAboutBurger])

    const changeQuantity = (name,quantity) => {
        for(let i=0;i<infoAboutBurger.ingredients.length;i++){
            for(let key in infoAboutBurger.ingredients[i]){
                if(infoAboutBurger.ingredients[i][key]===name){
                    infoAboutBurger.ingredients[i].quantity=quantity;
                }
                
            }
        }
    }

    const  toOrder = () => {
        orderBurger(infoAboutBurger);  
    }
    
    return(
    <div className='burgerInfo'>
        {infoAboutBurger ? 
            <div>
                <Link className='toOrder' onClick={toOrder} to="/order">Add to order</Link>
                <img src={infoAboutBurger.img} alt={infoAboutBurger.name}/>
                {infoAboutBurger.ingredients ? 
                    infoAboutBurger.ingredients.map(item=>
                    <Ingredient  key={(now.getTime() + Math.random() * 1000) + -1000} changeQuantity={changeQuantity} name={item.name} quantity={item.quantity}/>
                    )
                :<div></div>}
            </div>
            :<p>Loading</p>}
    </div>)
}

const mapDispatchToProps = {
    getProductList,
    orderBurger
};

const mapStateToProps = (state) => ({
    burgers:state.product.burgers,
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Info))