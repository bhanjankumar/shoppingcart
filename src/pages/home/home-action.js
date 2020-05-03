import * as ActionTypes from './home-constant';

export const getProducts = () => {
    return{
        type:ActionTypes.NAV_TO_PRODUCTS
    }
}
export const addCard = (data) =>{
    return{
        type:ActionTypes.NAV_TO_ADDCART,
        data:data
    }
}

export const applyFilter = (data,filterPrice) => {
    return {
        type:ActionTypes.NAV_APPLY_FILTER,
        data:data,
        filterPrice: filterPrice
    }
}

export const ascendingPrice = (data) => {
    return{
        type:ActionTypes.NAV_TO_ASCENDING,
        data:data
    }
}

export const descendingPrice = (data) => {
    return{
        type:ActionTypes.NAV_TO_DSCENDING,
        data:data
    }
}

export const discountPrice = (data) => {
    return{
        type:ActionTypes.NAV_TO_DISCOUNT,
        data:data
    }
}
