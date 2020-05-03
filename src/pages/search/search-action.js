import * as ActionTypes from './search-constant';

export const searchGetProduct = (data,searchData) => {
    return{
        type:ActionTypes.NAV_TO_SEARCH_PRODUCTS,
        data:data,
        searchData:searchData
    }
}