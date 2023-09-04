import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-a2.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'o', 'n', ',']
  const jobArray = ['s','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.']

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
        <div className = "container home-page">
      <div className="text-zone">
        <h1> 
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt="Capital A" />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
        </h1>
        <h2>Frontend Developer / Javascript and Java specialist</h2>
        <Link to="/contact" className = 'flat-button'>CONTACT ME</Link>
      </div>
    </div>
    <Loader type="cube-transition" />
    </>

  )
}

export default Home