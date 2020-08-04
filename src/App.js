import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./containers/Nav";
import Read from "./containers/Read";
import Control from "./containers/Control";
import Create from "./containers/Create";
import {connect} from "react-redux";
import Update from "./containers/Update";

class App extends Component {
    render() {
        let article = null;
        if (this.props.mode === 'WELCOME') {
            article = <Read></Read>;
        } else if (this.props.mode === 'READ') {
            article = <Read></Read>;
        } else if (this.props.mode === 'CREATE') {
            article = <Create/>;
        } else if (this.props.mode === 'UPDATE') {
            article = <Update/>;
        }
        return (
            <div className="App">
                <Header/>
                <Control/>
                <Nav/>
                {article}

            </div>
        );
    }
}

export default connect(
    function (state) {
        return {
            mode: state.mode
        }
    }
)(App);
