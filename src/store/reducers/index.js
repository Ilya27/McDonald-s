import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import orderReducer from './orderReducer'
export default combineReducers({
    product:productsReducer,
    order:orderReducer,

});