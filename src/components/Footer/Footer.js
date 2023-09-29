import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-icons">
                <li>
                    <a href="https://github.com/amcwustl/" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aaron-michael-clark/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aaronmiclark/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
