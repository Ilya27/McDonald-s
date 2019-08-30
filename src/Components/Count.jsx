import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.css';

const Count=(props)=>{
    let {orderBurgers}=props;
    return(
    <div className='count'>
        <h3>{orderBurgers.length!==0?<Link to='/order'>Your's burgers : {orderBurgers.length}</Link> : "No burgers in the basket"}</h3>
    </div>)
} 


const mapStateToProps = (state) => ({
    orderBurgers:state.order.orderBurgers
})

export default connect(mapStateToProps,{})(withRouter(Count))