import {connect} from 'react-redux';

import SearchComponent from './components/search';
import * as action from './search-action';


const mapStateToProps = (state, currentProps) => {
    const productData = state.home.productsData;
    return{
      productData
    }
}

export default connect(mapStateToProps,action)(SearchComponent);