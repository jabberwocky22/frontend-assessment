import React from 'react';
import deskTopBanner from '../Resources/desktop_banner.png';
import mobileBanner from '../Resources/mobile_banner.png';
import contentImg from '../Resources/content_img.png';

import '../App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img id="desktopBanner"
                    src={deskTopBanner}
                    className="App-logo"
                    alt="logo"/>
                <img id="mobileBanner"
                    src={mobileBanner}
                    className="App-logo"
                    alt="logo"/>
                <section className="bannerWords">
                    <p>
                        <code>MindArc assignment</code>
                    </p>
                </section>
            </header>
            <div className="card-deck" id="contents">
                <div className="card">
                    <img alt="Card cap" className="card-img-top" src={contentImg}></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" href="#">Go somewhere</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="Card cap" className="card-img-top" src={contentImg}></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" href="#">Go somewhere</button>
                    </div>
                </div>
                <div className="card">
                    <img alt="Card cap" className="card-img-top" src={contentImg}></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" href="#">Go somewhere</button>
                    </div>
                </div>
            </div>
            <div id="tabView"></div>
            <div id="accordionView"></div>
        </div>
    );
}

export default App;
