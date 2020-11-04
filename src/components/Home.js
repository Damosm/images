import React, { Component } from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';

export default class Home extends Component {
    render() {
        return (

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" style={{ height: 550 }} src={img1} alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ height: 550 }} src={img2} alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" style={{ height: 550 }} src={img3} alt="3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <div>
                    <h1  style={{ fontSize: "calc(130px + 0.5vw)", textAlign: 'right' }}> 
                        Unsplash
                    </h1>
                </div>
            </div>



        )
    }
}
