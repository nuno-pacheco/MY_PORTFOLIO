import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactPlayer from "react-player";

function Work3() {
    return (
        <div>
        <Navbar/>
            <section className="intro">
                <h1 className="section__title section__title--intro">
                Maria's<strong>Boutique</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A ExpressJs App</p>
                <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item2_iy6ut2.png" alt="" className="intro__img"/>
            </section>

            <div className="portfolio-item-individual">
            <p>An app that allows Admins to easily create and post products using their smartphones.</p>
            <p>Easy to do the setup and adapt to different businesses.</p>
            <h4><strong>Technologies</strong></h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>ReactJS</li>
            <h4><strong>Main features</strong></h4>
                    <li>Allows User to add products to Shopping Cart</li>
                    <li>Allows User to pay via Paypal</li>
                    <li>Allows Admin to create, edit and delete products</li>
                    <li>Allows Admin to check orders status</li>             
            </div>
            <section className="video-cv" id="videocv">
                <h2 className="section__title section__title--videocv">Video Demo</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                    url="https://youtu.be/68yeCT6fjU8"
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

export default Work3

