import {connect} from 'react-redux';

import HomeComponent from './components/home';
import * as action from './home-action';


const mapStateToProps = (state, currentProps) => {
    const productData = state.home.data;
    const orderCheck = state.home.order;
    return{
      productData,
      orderCheck
    }
}

export default connect(mapStateToProps,action)(HomeComponent);