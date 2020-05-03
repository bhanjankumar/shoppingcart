import * as ActionTypes from './checkout-constant';

export const addNumData = () => {
    return{
        type:ActionTypes.NAV_TO_SUPPORT
    }
}
export const removeCart = (data,productId) => {
    return {
        type:ActionTypes.NAV_TO_REMOVE_CART,
        data:data,
        productId:productId
    }
}

export const cartIncrease = (productId,totalInput,data) =>{
    return {
        type:ActionTypes.NAV_QUANTITY_INC,
        totalInput:totalInput,
        productId:productId,
        data:data
    }
}