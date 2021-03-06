import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import appPage from './pages/app/app-container'
import homePage from './pages/home/home-container';
import checkoutPage from './/pages/checkout/checkout-container'

const MainRouter = (state) =>{

    return(
        <Router>
            <Route path='/' component={appPage} >
                <IndexRoute component={homePage} />
                <Route path='/home' component={homePage} />
                <Route path='/checkout' component={checkoutPage} />
            </Route>
        </Router>
    )
}

export default MainRouter;