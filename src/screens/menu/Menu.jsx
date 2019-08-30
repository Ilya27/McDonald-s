import React, {useEffect } from 'react';
import List from './Components/List/index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getProductList} from '../../store/action/getProduct';

const  Menu=(props)=>{
    const { getProductList,burgers } = props
    useEffect(() => {
        getProductList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            {burgers ? 
            <div>
                <List burgers={burgers}/>
            </div>:
            <p>Loading</p>
            }
        </div>
    );
  }

  
const mapStateToProps = (state) => ({
    burgers:state.product.burgers,
})
const mapDispatchToProps = {
    getProductList,
};
   
  
  
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Menu))