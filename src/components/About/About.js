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
import './About.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="about-page">
        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Eu lobortis elementum nibh tellus molestie nunc. Venenatis cras sed felis eget velit. Nisi porta lorem mollis aliquam ut. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Ipsum suspendisse ultrices gravida dictum fusce. Amet facilisis magna etiam tempor orci eu. Purus semper eget duis at tellus. Tristique sollicitudin nibh sit amet commodo. In fermentum posuere urna nec tincidunt praesent semper feugiat. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vestibulum morbi blandit cursus.
          </p>
          <p align="LEFT">
          Etiam tempor orci eu lobortis elementum. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Ultrices in iaculis nunc sed augue lacus. At tellus at urna condimentum mattis pellentesque id. Sit amet mauris commodo quis imperdiet massa tincidunt. Sodales ut eu sem integer vitae justo eget. Nibh nisl condimentum id venenatis a condimentum vitae. Faucibus turpis in eu mi. Ultrices mi tempus imperdiet nulla malesuada. Cum sociis natoque penatibus et. Nullam vehicula ipsum a arcu cursus vitae congue mauris.
          </p>
          <p>
            Augue ut lectus arcu bibendum at varius vel pharetra vel. Dictum non consectetur a erat nam at lectus urna. Dolor sit amet consectetur adipiscing. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Accumsan in nisl nisi scelerisque eu. Maecenas sed enim ut sem viverra. Dolor sed viverra ipsum nunc aliquet bibendum enim. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Odio pellentesque diam volutpat commodo sed.
          </p>
        </div>

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
      </div>
    </>
  )
}

export default About

