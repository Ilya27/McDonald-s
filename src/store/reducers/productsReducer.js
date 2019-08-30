import {ACTION_TYPES} from '../constants';

const initialState = {
}

export default function(state = initialState, action ) {
    switch(action.type) {
            case ACTION_TYPES.GET_PRODUCT_LIST:
            return{
                ...state,
                burgers:action.payload.burgers
            }
        default: 
            return state;
    }
}