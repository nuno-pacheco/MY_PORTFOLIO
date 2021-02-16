import React from 'react'
import Navbar2 from './Navbar2';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function AboutMe() {
    return (
        <div>
         <Navbar2/>
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design</h3>
                    <p>One of my favourite challenges is to think about the <strong>Look & Feel</strong> of the solutions I will develop. And also about the <strong>User interaction</strong> with the App.</p>
                </div>

                <div className="service">
                    <h3>Frontend</h3>
                    <p>I love to make my layouts <strong>Responsive</strong> to work on any device, big or small. I also like to make it <strong>Intuitive</strong> and easy to use. And everytime it's possible I will do it <strong>Dynamic</strong> because websites don't have to be static.</p>
                </div>

                <div className="service">
                    <h3>Backend</h3>
                    <p><strong>Data</strong> is not everything, but everything it´s data. Develop "web solutions" than can display relevant data to maximize the <strong>user experience</strong> it's also a <strong>passion</strong>.</p>
                </div>
            </div>

            <Link to="/aboutmywork" className="btn">My Work</Link>
        </section>

        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Frontend Developer based in Lisbon</p>

            <div className="about-me__body">
                <p>Human Behavior Expert turned Full Stack Developer. When the pandemic came i take the decision of my life, and embraced the new normal, that's why I changed my career, and now I'm ready to beat the edge. Resourceful, creative and enthusiastic: always find a way to achieve the goal.
                </p>
                <p><strong>What would I bring to your company?</strong><br/>
                    - Enthusiasm, empathy and creativity.<br/>
                    - High learning capacity and rapid adaptation to change.<br/>
                    - Experience in managing multinational/multicultural and multidisciplinary teams, interpersonal skills, ability to analyze complex problems, prioritization, and task management.</p>
            </div>
            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/IMG_4710_psxxaj.jpg" alt="Nuno thinking about life" className="about-me__img"/>      
        </section>
        <Footer/>
        </div>
    )
}

export default AboutMe