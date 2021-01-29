import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Work1() {
    return (
        <div>
        <Navbar/>
            <div className="intro">
                <h1 className="section__title section__title--intro">
                    THE <strong>CURATOR</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A Native JS Game</p>
                <img src="img/Portfolio_item1.png" alt="" className="intro__img"/>
            </div>

            <div className="portfolio-item-individual">
                <p>A game where you have to match at least 3 equal symbols to score. The symbols are inspired on actions that we have to take in a account in order to prevent the Coronavirus infetion. This game aims to be educational.</p>
                <video width="320" height="240" controls type="video/mp4">
                    <source src="https://res.cloudinary.com/dylut4r4t/video/upload/e_accelerate:19/v1611679496/samples/Gravac%CC%A7a%CC%83o_do_ecra%CC%83_2021-01-26_a%CC%80s_16.39.11_zkvprs.mp4" type="video/mp4"/>
                </video>
                <h4>Technologies</h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                <h4>Main features</h4>
                    <li>Drag & Drop feature </li>
                    <li>Winner & Looser logic</li>
                    <li>Timmer</li>
                    <li>Sound Fx Effects</li>
                    <li>Sound accelerate on the last 10 secs</li>
                    <li>Random advices from Who (World Health Organization) at the end</li>                
            </div>
            <Footer/>
        </div>
    )
}

export default Work1
