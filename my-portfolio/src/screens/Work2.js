import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Work2() {
    return (
        <div>
        <Navbar/>
            <div className="intro">
                <h1 className="section__title section__title--intro">
                The<strong>Unum   .</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A ExpressJs App</p>
                <img src="img/Portfolio_item1.png" alt="" className="intro__img"/>
            </div>

            <div className="portfolio-item-individual">
                <p>An app that matches those who have lost their jobs due to Covid with those who would like to help by offering work.</p>
                <p>Many people have lost their jobs due to the crisis and our app aims to link up those who have lost jobs with those who can offer casual work opportunities. The app is fully responsive and designed to be used mainly on mobile phones. </p>
                <video width="320" height="240" controls type="video/mp4">
                    <source src="https://res.cloudinary.com/dylut4r4t/video/upload/v1611828139/samples/Gravac%CC%A7a%CC%83o_do_ecra%CC%83_2021-01-28_a%CC%80s_09.56.23_hc4pr9.mp4" type="video/mp4"/>
                </video>
                <h4>Technologies</h4>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>ExpressJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                <h4>Main features</h4>
                    <li>Create jobs </li>
                    <li>List of jobs</li>
                    <li>Accept a job</li>                
            </div>
            <Footer/>
        </div>
    )
}

export default Work2
