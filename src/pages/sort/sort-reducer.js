import * as ActionType from './sort-constant';

const initialState = {

}

const SortReducer = (state={...initialState},action) => {
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
export default SortReducer;