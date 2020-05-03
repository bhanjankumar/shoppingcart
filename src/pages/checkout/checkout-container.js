import {connect} from 'react-redux';

import CheckoutComponent from './components/checkout';
import * as action from './checkout-action';


const mapStateToProps = (state, currentProps) => {
    const addedCartData = state.home.addCartData;
    const checkoutInput = state.home.order;
    const addCartCheckData = state.home.addCartCheckData;
    return{
        addedCartData,
        checkoutInput,
        addCartCheckData
    }
}

export default connect(mapStateToProps,action)(CheckoutComponent);