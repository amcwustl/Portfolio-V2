import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'
import About from '../About/About'
import LogoTitle from '../../assets/images/logo-a2.png';

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

  return (
    <>
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
          {/* <img src={LogoTitle} alt="Capital A" /> */}
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
          </Col>
      </Row>
      
      </Container>
    <Loader type="cube-transition" />
    </>

  )
}

export default Home

// <Container>
//       <Row>
//         <Col xs={12} md={8}>
//           xs=12 md=8
//         </Col>
//         <Col xs={6} md={4}>
//           xs=6 md=4
//         </Col>
//       </Row>
//       <div className = "container home-page">
//         <div className="text-zone">
//           <h1> 
//             <span className={letterClass}>H</span>
//             <span className={`${letterClass} _12`}>i,</span>
//             <br />
//             <span className={`${letterClass} _13`}>I</span>
//             <span className={`${letterClass} _14`}>'m</span>
//             <span className="space">&nbsp;</span>
//           {/* <img src={LogoTitle} alt="Capital A" /> */}
//           <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12}/>
//           <br />
//           <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
//           <span className="space">&nbsp;</span>
//           <AnimatedLetters letterClass={letterClass} strArray={jobArrayTwo} idx={20} />

//           </h1>
//           <h2>Frontend Developer / Javascript and Java specialist</h2>
//           <Link to="/contact" className = 'flat-button'>CONTACT ME</Link>
//         </div>
//       </div>