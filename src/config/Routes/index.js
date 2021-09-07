import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Product, ProductDetail } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/product"/>
                </Route>
                <Route path="/product">
                    <Product/>
                </Route>
                <Route path="/product-detail">
                    <ProductDetail/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
