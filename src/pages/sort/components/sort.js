import React,{PureComponent} from 'react';


class SortComponent extends PureComponent{
    
    render(){
        const {productData} = this.props;
        return(
            <div className="sorting">
                Sort By <a href='javascript:void(0)' onClick={()=>this.props.descendingPrice(productData)}>Price High-Low</a>
                 <a  href='javascript:void(0)' onClick={()=>this.props.ascendingPrice(productData)}>Price Low-High</a>
                  <a href='javascript:void(0)' onClick={()=>this.props.discountPrice(productData)}>Discount</a>
            </div>
        )
    }
}

export default SortComponent;