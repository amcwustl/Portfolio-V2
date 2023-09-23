import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faAndroid,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cube.scss'

const Cube = () => {

return(
  <>
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faJava} color="#5382a1" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
        </div>
      </div>
      </div>
  </>
)
}

export default Cube