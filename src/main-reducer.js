import { combineReducers } from 'redux';

import home from './pages/home/home-reducer';
import checkout from './pages/checkout/checkout-reducer';
import search from './pages/search/search-reducer';
import sort from './pages/sort/sort-reducer';

const combineReducer = combineReducers({
  checkout,
  home,
  search,
  sort
});

const rootReducer = (state,action) => {
    if(action.type==='RESET_APP_STORE'){
        state = undefined;
    }
    return combineReducer(state,action);
}
export default rootReducer;