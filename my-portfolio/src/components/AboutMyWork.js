import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';



function AboutMyWork() {
    return (
        <div>
         <Navbar/>
        <section className="my-skills" id="skills">
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
        </section>

        <section className="my-work" id="work">
            <h2 className="section_title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">Some of my Work</p>

            <div className="portfolio">
                <Link to="/work1" className="portfolio__item">
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item1_pb8rzu.png" alt="Work_1"/>
                </Link>

                <Link to="/work2" className="portfolio__item">
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item3_pp8yfh.png" alt="Work_2"/>
                </Link>

                <Link to="/work3" className="portfolio__item">
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item2_iy6ut2.png" alt="Work_3"/>
                </Link>

                <Link to="/work4" className="portfolio__item">
                    <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1611913718/portfolio/Portfolio_item4_islt3x.png" alt="Work_4"/>
                </Link>
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default AboutMyWork