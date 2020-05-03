import * as ActionTypes from './sort-constant';

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