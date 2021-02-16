import React from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import ReactPlayer from "react-player";

function Work5() {
    return (
        <div>
        <Navbar2/>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                3D<strong>Business Hub</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A ReactJS Website</p>
                <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1612830061/portfolio/Captura_de_ecra%CC%83_2021-02-08_a%CC%80s_23.55.04_rgjbof.png" alt="" className="intro__img"/>
            </section>

            <div className="portfolio-item-individual">
            <p>Client ask for a simple and intuitive website with possibilities to grow in the near future and to associate backend.</p>
                <h4><strong>Technologies</strong></h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>EmailJS</li>
                    <li>API's</li>
                <h4><strong>Main features</strong></h4>
                    <li>Fully responsive</li>
                    <li>Send email via website</li>
                    <li>Social links</li>     
            </div>
            <section className="video-cv" id="videocv">
                <h2 className="section__title section__title--videocv">Video Demo</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                    url="https://youtu.be/uBxdzSuLm-k"
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

export default Work5
