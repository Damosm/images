import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ImageSearch from "./ImageSearch";
import Home from "./Home";
import ImageSearchCss from './ImageSearchCss'



export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>                                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">                            
                            <li class="nav-item">
                                <a class="nav-link" href="/imagesCss">Search</a>
                            </li>  
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/imagesCss">Search Two</a>
                            </li>                                                 */}
                        </ul>
                    </div>
                </nav>
                <div className="main-route-place">
                    <Route exact path="/" component={Home} />
                    <Route path="/images" component={ImageSearch} />
                    <Route path="/imagesCss" component={ImageSearchCss} />
                </div>
            </BrowserRouter >
        );
    }
}