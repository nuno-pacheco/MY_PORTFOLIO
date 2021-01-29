import React from 'react'

function Footer() {
    return (
        <div>
        <footer className="footer">
            <a href="mailto:nunorpacheco@gmail.com" class="footer__link">nunorpacheco@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/nuno-pacheco">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.facebook.com/nuno.pacheco.5074">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/nunpacheco/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </footer>
            
        </div>
    )
}

export default Footer