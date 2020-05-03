import {connect} from 'react-redux';

import HeaderComponent from './components/header';
import * as action from './header-action';


const mapStateToProps = (state, currentProps) => {
    const addCartData = state.home.addCartData;
    const totalAddedCart = state.home.addCartData ? state.home.addCartData.length:0;
    return{
        addCartData,
        totalAddedCart
    }
}

export default connect(mapStateToProps,action)(HeaderComponent);