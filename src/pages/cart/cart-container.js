import {connect} from 'react-redux';

import CartComponent from './components/cart';
import * as action from './cart-action';


const mapStateToProps = (state, currentProps) => {
    const addCartData = state.home.addCartData;
    const totalAddedCart = state.home.addCartData ? state.home.addCartData.length:0;
    return{
        addCartData,
        totalAddedCart
    }
}

export default connect(mapStateToProps,action)(CartComponent);