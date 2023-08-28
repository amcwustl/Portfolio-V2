import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import './Sidebar.scss';

const Sidebar = () => (
  <div className = 'nav-bar'>
    <Link className='logo' to='/'>
      <FontAwesomeIcon className='logo-icon' icon={faMicrochip} size='2x' aria-label='Microchip Icon' />
    </Link>
    <nav>
      <NavLink exact="true" activeClassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color ="4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color ="4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color ="4d4d4e" />
      </NavLink>
    </nav>
    <ul className="social">
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aaron-michael-clark/">
          <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/amcwustl">
          <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
        </a>
      </li>
    </ul>

  </div>
)

export default Sidebar