import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import './ProjectRight.scss';

const ProjectRight = () => {
  return (
    <>
      <h1 className="section-heading">Projects</h1>
      <div className="project-container">
        <div className="project">
          <div className="project-content">
            <div className="project-label">Game of Thrones</div>
            <h4 className="project-title">A Clash of Kings</h4>
            <div className="project-details">
              <p>Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level.</p>
              <ul className="project-tech-list">
                <li>Shadow</li>
                <li>Demon</li>
                <li>Baby</li>
              </ul>
              <div className="project-links">
                <a target="_blank" aria-label="External Link" rel="noreferrer" href="https://github.com/amcwustl">
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} color="4d4d4e" />
                </a>
                <a target="_blank" aria-label="Github Repo" rel="noreferrer" href="https://github.com/amcwustl">
                  <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-img">
            <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
          </div>
        </div>

        <div className="project">
          <div className="project-content">
            <div className="project-label">Game of Thrones</div>
            <h4 className="project-title">A Clash of Kings</h4>
            <div className="project-details">
              <p>Lorem ipsum dolor amet you probably haven't heard of them bitters selvage listicle heirloom. Locavore kombucha street art ennui 90's, organic food truck hell of seitan skateboard literally hexagon fixie next level.</p>
              <ul className="project-tech-list">
                <li>Shadow</li>
                <li>Demon</li>
                <li>Baby</li>
              </ul>
              <div className="project-links">
                <a target="_blank" aria-label="External Link" rel="noreferrer" href="https://github.com/amcwustl">
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} color="4d4d4e" />
                </a>
                <a target="_blank" aria-label="Github Repo" rel="noreferrer" href="https://github.com/amcwustl">
                  <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-img">
            <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectRight