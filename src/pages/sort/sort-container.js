import {connect} from 'react-redux';

import SortComponent from './components/sort';
import * as action from './sort-action';


const mapStateToProps = (state, currentProps) => {
    const productData = state.home.productsData;
    return{
      productData
    }
}

export default connect(mapStateToProps,action)(SortComponent);