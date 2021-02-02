import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactPlayer from "react-player";

function Work1() {
    return (
        <div>
        <Navbar/>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    THE <strong>CURATOR</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A Native JS Game</p>
                <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item1_pb8rzu.png" alt="" className="intro__img"/>
            </section>

            <div className="portfolio-item-individual">
                <p>A game where you have to match at least 3 equal symbols to score. The symbols are inspired on actions that we have to take in a account in order to prevent the Coronavirus infetion. This game aims to be educational.</p>
                <h4><strong>Technologies</strong></h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                <h4><strong>Main features</strong></h4>
                    <li>Drag & Drop feature </li>
                    <li>Winner & Looser logic</li>
                    <li>Timmer</li>
                    <li>Sound Fx Effects</li>
                    <li>Sound accelerate on the last 10 secs</li>
                    <li>Random advices from Who (World Health Organization) at the end</li>                
            </div>
            <section className="video-cv" id="videocv">
                <h2 className="section__title section__title--videocv">Video Demo</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                    url="https://youtu.be/8sLGQiBg-dk"
                    className='react-player'
                    controls={true}
                    playing
                    width='90%'
                    height='90%'
                    />
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Work1
