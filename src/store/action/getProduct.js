import {ACTION_TYPES} from '../constants'
export  const getProductList=()=> dispatch=>{  
    fetch('https://my-json-server.typicode.com/Ilya27/demo-server/db')
    .then(data=>data.json())
    .then(data=>{dispatch(setProductList(data))})
}

export const setProductList = burgers => ({
    type: ACTION_TYPES.GET_PRODUCT_LIST,
    payload: burgers,
})
