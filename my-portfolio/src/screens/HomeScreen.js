import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

function HomeScreen() {
    return (
        <div>
         <Navbar/>
        <div className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Nuno Pacheco</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src="../images/img/2016.09.16 Deloitte Studio_126.jpg" alt="Nuno thinking about life" className="intro__img"/>
        </div>

        <div className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design</h3>
                    <p>One of my favourite challenges is to think about the <strong>Look & Feel</strong> of the solutions I will develop. And also about the <strong>User interaction</strong> with the App.</p>
                </div>

                <div clasName="service">
                    <h3>Frontend</h3>
                    <p>I love to make my layouts <strong>Responsive</strong> to work on any device, big or small. I also like to make it <strong>Intuitive</strong> and easy to use. And everytime it's possible I will do it <strong>Dynamic</strong> because websites don't have to be static.</p>
                </div>

                <div className="service">
                    <h3>Backend</h3>
                    <p><strong>Data</strong> is not everything, but everything it´s data. Develop "web solutions" than can display relevant data to maximize the <strong>user experience</strong> it's also a <strong>passion</strong>.</p>
                </div>
            </div>

            <Link to="#work" className="btn">My Work</Link>
        </div>

        <div className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Frontend Developer based on Lisbon</p>

            <div className="about-me__body">
                <p>Human Behavior Expert turned Full Stack Developer. When the pandemic came i take the decision of my life, and embraced the new normal, that's why I changed my career, and now I'm ready to beat the edge. Resourceful, creative and enthusiastic: always find a way to achieve the goal.
                </p>
                <p><strong>What would I bring to your company?</strong>
                    . Enthusiasm, empathy and creativity.
                    . High learning capacity and rapid adaptation to change.
                    . Experience in managing multinational/multicultural and multidisciplinary teams, interpersonal skills, ability to analyze complex problems, prioritization, and task management.</p>
            </div>

            <img src="img/IMG_4710.jpg" alt="Nuno thinking about life" className="about-me__img"/>
        </div>
  
        <div className="my-skills" id="skills">
            <h2 className="section_title section__title--skill">My skills</h2>
            <p className="section__subtitle section__subtitle--skill">Some of my Skills</p>
            <ul className="skill-list">
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-react skill-list__icon"></i>
                        <p>ReactJS</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-html5"></i>
                        <p>HTML5</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-node"></i>
                        <p>NodeJS</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fas fa-database"></i>
                        <p>MongoDB</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-git-square"></i>
                        <p>GIT</p>
                    </div>
                </li>
                <li className="skill-list__item">
                    <div className="skill-list__link">
                        <i className="fab fa-github"></i>
                        <p>GITHUB</p>
                    </div>
                </li>
            </ul>
        </div>

        <div className="my-work" id="work">
            <h2 className="section_title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">Some of my Work</p>

            <div className="portfolio">
                <Link to="/work1" className="portfolio__item">
                    <img src="../images/img/Portfolio_item1.png" alt="Work_1"/>
                </Link>

                <Link to="/work2" className="portfolio__item">
                    <img src="../images/img/Portfolio_item3.png" alt="Work_2"/>
                </Link>

                <Link to="/work3" className="portfolio__item">
                    <img src="../images/img/Portfolio_item2.png" alt="Work_3"/>
                </Link>

                <Link to="/work4" className="portfolio__item">
                    <img src="../images/img/Portfolio_item4.png" alt="Work_4"/>
                </Link>

            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default HomeScreen
