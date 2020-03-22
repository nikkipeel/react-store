import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>

                </Navbar>
                <Switch>
                    <Route exact path="/" component={ProductList}></Route>
                    <Route exact path="/details" component={Details}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                    <Route component={Default}></Route>   
                </Switch>
                <Modal />
            </React.Fragment>
        );
    }
}

export default App;
