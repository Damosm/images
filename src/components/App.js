import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import ImageSearchCss from './ImageSearchCss';
import Clock from './Clock';



export default class App extends React.Component {

    render() {
        return (
            <HashRouter basename="/">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><Link to="/">Home</Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><Link to="/imagesCss">Search</Link></a>
                            </li>                            
                        </ul>
                    </div>
                    <div>
                        <Clock />
                    </div>
                </nav>
                <div className="main-route-place">
                    <Route exact path="/" component={Home} />                    
                    <Route path="/imagesCss" component={ImageSearchCss} />
                </div>
            </HashRouter >
        );
    }
}