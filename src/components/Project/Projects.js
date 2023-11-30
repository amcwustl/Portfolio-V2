import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import tarotImage from '../../assets/images/TarotScreens.jpg';
import fridgeImage from '../../assets/images/FridgeMates.jpg';
import cineWatch from '../../assets/images/cinewatch.jpg';
import mysteryImage from '../../assets/images/MidnightMarauder.jpg';
import './Projects.scss';

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1 className="section-heading">Some of My Projects</h1>
      <div className="project-container">

        <div className="project">
          <div className="project-content">
            <div className="project-label">Android Application</div>
            <h4 className="project-title">Daily Tarot App</h4>
            <div className="project-details">
              <p>Android Tarot reading application that allows users to generate a reading and view card explanations to learn more about Tarot. Coming soon to Google Play Store.</p>
              <ul className="project-tech-list">
                <li>Java</li>
                <li>AWS Amplify</li>
                <li>SQLite</li>
              </ul>
              <div className="project-links">
                <a
                  target="_blank"
                  aria-label="External Link"
                  rel="noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.amcwustl.dailytarot"
                  title="Google Play Link"
                >
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} color="4d4d4e" />
                </a>
                <a
                  target="_blank"
                  aria-label="Github Repo"
                  rel="noreferrer"
                  href="https://github.com/JavaWookies/Daily-Tarot-V2"
                  title="View Github Repo"
                >
                  <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-img">
            <a 
            target="_blank"
            aria-label="Link to App on Google Play"
            rel="noreferrer"
            href='https://play.google.com/store/apps/details?id=com.amcwustl.dailytarot'
            title="Daily Tarot"
            >
              <img src={tarotImage} alt="Screenshots of Daily Tarot App" />
            </a>

          </div>
        </div>

        <div className="project">
          <div className="project-content">
            <div className="project-label">Browser Game Application</div>
            <h4 className="project-title">Mystery Game</h4>
            <div className="project-details">
              <p>Browser based choose your own adventure murder mystery game. Allows users to interactively search for evidence and alibis of characters to solve a murder mystery on a steam punk airship.</p>
              <ul className="project-tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className="project-links">
                <a
                  target="_blank"
                  aria-label="External Link to Game"
                  rel="noreferrer"
                  href="https://amcwustl.github.io/MysteryGame/"
                  title="Link to Game"
                >
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} color="4d4d4e" />
                </a>
                <a
                  target="_blank"
                  aria-label="Github Repo"
                  rel="noreferrer"
                  href="https://github.com/amcwustl/MysteryGame"
                  title="View Github Repo"
                >
                  <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-img">
            <a 
            target="_blank"
            aria-label="External Link to Game"
            rel="noreferrer"
            href="https://amcwustl.github.io/MysteryGame/"
            title="Midnight Marauder"
            >
              <img src={mysteryImage} alt="Screenshot of Midnight Marauder Game" />
            </a>
          </div>
        </div>



        <div className="project">
          <div className="project-content">
            <div className="project-label">React Application</div>
            <h4 className="project-title">CinewatchAI</h4>
            <div className="project-details">
              <p>OpenAI integrated movie content reviewer that allows users to assess the maturity levels of movie content for children across a number of different categories.</p>
              <ul className="project-tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
              <div className="project-links">
                <a 
                target="_blank" 
                aria-label="External Link" 
                rel="noreferrer" 
                href="https://cinewatch-ai.netlify.app/"
                title="Cinewatch AI">
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} color="4d4d4e" />
                </a>
                <a 
                target="_blank" 
                aria-label="Github Repo" 
                rel="noreferrer" 
                href="https://github.com/AIOpenWorkSpace"
                title="Github Repo">
                  <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-img">
            <a 
            target="_blank" 
            aria-label="External Link" 
            rel="noreferrer" 
            href='https://cinewatch-ai.netlify.app/'
            title="Cinewatch AI">
              <img src={cineWatch} alt="Home page of CineWatch Application" />
            </a>
            
          </div>
        </div>

        <div className="project">
          <div className="project-content">
            <div className="project-label">Spring Boot Application</div>
            <h4 className="project-title">Fridge Mates</h4>
            <div className="project-details">
              <p>Refrigerator content tracking social application allowing users to track expiration dates on ingredients, find other users in their area and propose trades and exchanges.</p>
              <ul className="project-tech-list">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>PostgreSQL</li>
              </ul>
              <div className="project-links">
                <a 
                target="_blank" 
                aria-label="Github Repo" 
                rel="noreferrer" 
                href="https://github.com/RAD-Fellows/fridgemates">
                  <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-img">
            <a 
            target="_blank" 
            aria-label="Github Repo" 
            rel="noreferrer" 
            href='https://github.com/RAD-Fellows/fridgemates'
            title="FridgeMates Repo">
             <img src={fridgeImage} alt="Home page of Fridge Mates Application" /> 
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects