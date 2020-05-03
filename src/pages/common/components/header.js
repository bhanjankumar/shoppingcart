import React,{PureComponent} from 'react';
import SearchComponent from '../../search/search-container';
import CartComponent from '../../cart/cart-container';


class HeaderComponent extends PureComponent{

    render(){
        return(
            <div>
            <header>
            <nav className="navbar-dark">
                <div className="searchElement">
                    <div className="logo">
                    <a href="javascript:void(0)" onClick={()=>this.props.navToHomePage()}>
                        <img src="images/logo.svg" />
                     </a>
                    </div>
                    <SearchComponent />
                    <CartComponent/>
                </div>
            </nav>

            </header>
            </div>
        )
    }
}

export default HeaderComponent;