import * as ActionType from './cart-constant';

const initialState = {

}

const CartReducer = (state={...initialState},action) => {
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
export default CartReducer;