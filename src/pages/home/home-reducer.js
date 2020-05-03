import * as ActionType from './home-constant';

const initialState = {
    productsData:[
        {
                    id:1,
                    name: "Samsung Series 4",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 13999,
                        display: 22500
        },
                    discount: 37,
                    quantity:1
    },
    {
                    id:2,
                    name: "Samsung Super 6",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 35999,
                        display: 66900
        },
                    discount: 46,
                    quantity:1
    },
    {
                    id:3,
                    name: "Samsung The Frame",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 84999,
                        display: 133900
        },
                    discount: 36,
                    quantity:1
    },
    {
                    id:4,
                    name: "Thomson B9 Pro",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 9999,
                        display: 16999
        },
                    discount: 41,
                    quantity:1
    },
    {
                    id:5,
                    name: "LG Ultra HD",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 39990,
                        display: 79990
        },
                    discount: 50,
                    quantity:1
    },
    {
                    id:6,
                    name: "Vu Ready LED TV",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 7999,
                        display: 17e3
        },
                    discount: 52,
                    quantity:1
    },
    {
                    id:7,
                    name: "Koryo Android TV",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 55999,
                        display: 199990
        },
                    discount: 71,
                    quantity:1
    },
    {
                    id:8,
                    name: "Micromax LED Smart",
                    image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                    price: {
                        actual: 9999,
                        display: 27990
                },
                    discount: 64,
                    quantity:1
    }
]
}
let cartData = []
const getCollectAddCart = (data) => {
    if(data){
        cartData.push(data);
    }
    cartData = [...new Set(cartData)];
    return cartData;
}
const getSearchFilter = (filerData,searchData) =>{
    let searchFiltData = null;
    searchFiltData = filerData.filter(data =>{
        if(data.name.toLowerCase().indexOf(searchData.toLowerCase())!==-1){
         return true
        } 
    })
    return searchFiltData;
}

const getSearchPriceFilter = (filerData,searchData) => {
    let searchFiltData = null;
    searchFiltData = filerData.filter(data => data.price.actual > searchData.min && data.price.actual < searchData.max);
    return searchFiltData;
}

const getAscendingFilter = (filerData) =>{
    let searchFiltData = null;
    searchFiltData = filerData.sort((a,b) => parseFloat(a.price.actual) - parseFloat(b.price.actual));
    return searchFiltData;
}
const getDscendingFilter = (filerData) =>{
    let searchFiltData = null;
    searchFiltData = filerData.sort((a,b) => parseFloat(b.price.actual) - parseFloat(a.price.actual));
    return searchFiltData;
}
const getDiscountFilter = (filerData) =>{
    let searchFiltData = null;
    searchFiltData = filerData.sort((a,b) => parseFloat(a.discount) - parseFloat(b.discount));
    return searchFiltData;
}
const getFilterCart = (cartData,productId) => {
    return cartData.filter(data => data.id!=productId);
}
const getCheckOutCalc = (productId,totalInput,data) =>{
    data = data.filter(data => data.quantity!=0);
    for(let i=0;i<data.length;i++){
            if(productId==data[i].id){
            data[i] = Object.assign(data[i],{quantity:totalInput});
            }
    }
    return data;
}


const HomeReducer = (state={...initialState},action) => {
    switch(action.type){
        case ActionType.NAV_TO_PRODUCTS:
            return{
                ...state,
                data:state.productsData
            }
        case ActionType.NAV_TO_ADDCART:
            return{
                ...state,
                addCartData:getCollectAddCart(action.data)
            }
        case ActionType.NAV_TO_SEARCH_PRODUCTS:
            return {
                ...state,
                data:getSearchFilter(action.data,action.searchData)
            }
        case ActionType.NAV_APPLY_FILTER:
            return {
                ...state,
                data:getSearchPriceFilter(action.data,action.filterPrice)
            }
        case ActionType.NAV_TO_ASCENDING:
            return{
                ...state,
                data:getAscendingFilter(action.data),
                order:'asc'
            }
        case ActionType.NAV_TO_DSCENDING:
            return{
                ...state,
                data:getDscendingFilter(action.data),
                order:'desc'
            }
        case ActionType.NAV_TO_DISCOUNT:
            return{
                ...state,
                data:getDiscountFilter(action.data),
                order:'disc'
            }
        case ActionType.NAV_TO_REMOVE_CART:
            return {
                ...state,
                addCartData:getFilterCart(action.data,action.productId)
            }
            case ActionType.NAV_QUANTITY_INC:
                return {
                    ...state,
                    addCartData:getCheckOutCalc(action.productId,action.totalInput,action.data),
                    order:'checkoutIncrease'+action.totalInput
            }
           
        
        default:
            return state;
    }

};
export default HomeReducer;