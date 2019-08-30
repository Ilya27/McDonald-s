import {ACTION_TYPES} from '../constants';
export const orderBurger = (burger) =>({
    type: ACTION_TYPES.ORDER_PRODUCT,
    payload: {burger},
})

export const deleteAllBurger = () =>({
    type: ACTION_TYPES.DELETE_PRODUCT
})
