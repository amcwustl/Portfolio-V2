import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'
import './Spotlight.scss'
import About from '../About/About'
import Work from '../Work/Work'
import ProjectRight from '../Project/ProjectRight'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A','a', 'r', 'o', 'n', ',']
  const jobArray = ['S','o','f','t','w','a','r','e']
  const jobArrayTwo = ['D','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

const handleMouseMove = (e) => {
  if (!divRef.current || isFocused) return;

  const div = divRef.current;
  const rect = div.getBoundingClientRect();

  setPosition({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top - window.scrollY,
  });
};

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };


  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-spotlight-effect"
    >
      <Container>
        <Row className="justify-content-end">
          <Col className="home-page ml-md-4" xs={12} md={6}>
            <h1> 
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <span className="space">&nbsp;</span>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12}/>
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
              <span className="space">&nbsp;</span>
              <AnimatedLetters letterClass={letterClass} strArray={jobArrayTwo} idx={20} />
            </h1>
            <h2>Frontend Developer / Javascript and Java specialist</h2>
            <Link to="/contact" className = 'flat-button'>CONTACT ME</Link>
          </Col>
          <Col className="ml-md-12 mt-md-0 mt-2" xs={12} md={6}>
            <About />
            <Work />
            <ProjectRight />
          </Col>
      </Row>
      </Container>
      <Loader type="cube-transition" />
      <div
          className="spotlight"
          style={{
            opacity,
            background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 100%)`,
          }}
        />
        <div></div>
    </div>

  )
}

export default Home
