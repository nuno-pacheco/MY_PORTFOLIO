import React from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import ReactPlayer from "react-player";

function Work2() {
    return (
        <div>
        <Navbar2/>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                The<strong>Unum   .</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A ExpressJs App</p>
                <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item3_pp8yfh.png" alt="" className="intro__img"/>
            </section>

            <div className="portfolio-item-individual">
                <p>An app that matches those who have lost their jobs due to Covid with those who would like to help by offering work.</p>
                <p>Many people have lost their jobs due to the crisis and our app aims to link up those who have lost jobs with those who can offer casual work opportunities. The app is fully responsive and designed to be used mainly on mobile phones. </p>
                <h4><strong>Technologies</strong></h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <h4><strong>Main features</strong></h4>
                    <li>Create jobs </li>
                    <li>List of jobs</li>
                    <li>Accept a job</li>                
            </div>
            <section className="video-cv" id="videocv">
                <h2 className="section__title section__title--videocv">Video Demo</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                    url="https://youtu.be/tJsvEc_3X2I"
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

export default Work2
