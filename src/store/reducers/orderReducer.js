import {ACTION_TYPES} from '../constants';

const initialState = {
    orderBurgers:[],
}

export default function(state = initialState, action ) { 
    switch(action.type) {
            case ACTION_TYPES.ORDER_PRODUCT:
            return{
                ...state,
                orderBurgers:state.orderBurgers.concat( action.payload.burger)
            }
            case ACTION_TYPES.DELETE_PRODUCT:
                return{
                ...state,
                orderBurgers:[]
            }
        default:
            return state;
    }
}