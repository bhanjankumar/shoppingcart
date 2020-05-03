import * as ActionType from './checkout-constant';

const initialState = {

}


const CheckoutReducer = (state={...initialState},action) => {
    switch(action.type){
        case ActionType.NAV_TO_HOME:
            return{
                ...state,
                data:action.data
            }
        default:
            return state;
    }

};
export default CheckoutReducer;