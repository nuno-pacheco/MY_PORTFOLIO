import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactPlayer from "react-player";

function Work4() {
    return (
        <div>
        <Navbar/>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                The<strong>Confid19</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A ReactJS App</p>
                <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item4_islt3x.png" alt="" className="intro__img"/>
            </section>

            <div className="portfolio-item-individual">
            <p>Confid-19, is a solution that compiles a huge amount of data related with the Coronavirus, and has also a psychological "side".</p>
            <p>The purpose of this app is to combat the dispersion of information related to the pandemic, providing information from reliable sources to the user.</p>
                <h4><strong>Technologies</strong></h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
                    <li>API's</li>
                <h4><strong>Main features</strong></h4>
                    <li>News related with Corona plus a button to share on Facebook </li>
                    <li>Option to select between PT or ENG language</li>
                    <li>A page displaying all the countries data, where you use a search bar</li>
                    <li>An option to create feelings felt during the pandemics</li>
                    <li>Mary - a chatbot that will provide you info about Covid and also some calm down insights</li>                
            </div>
            <section className="video-cv" id="videocv">
                <h2 className="section__title section__title--videocv">Video Demo</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                    url="https://youtu.be/xHTIiA7SBrY"
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

export default Work4
