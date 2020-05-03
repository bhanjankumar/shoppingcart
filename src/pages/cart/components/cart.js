import React,{PureComponent} from 'react';


class CartComponent extends PureComponent{

    render(){
        return(
            <div className="cart">
                <span onClick={()=>this.props.checkoutPage()}><i class="fa fa-shopping-cart" aria-hidden="true"></i><span className="cartCnt">{this.props.totalAddedCart}</span></span>
            </div>
        )
    }
}

export default CartComponent;