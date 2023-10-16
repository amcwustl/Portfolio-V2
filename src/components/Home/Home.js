import { useRef, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss'
import './Spotlight.scss'
import About from '../About/About'
import Work from '../Work/Work'
import ProjectRight from '../Project/ProjectRight';
import Footer from '../Footer/Footer';


const Home = () => {
  const nameArray = ['A', 'a', 'r', 'o', 'n'];
  const lastNameArray = ['C', 'l', 'a', 'r', 'k'];
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");
  const recipientEmail = 'amclarkwustl@gmail.com';
  const subject = 'Portfolio Referral -';


  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.13;
      const aboutPosition = aboutRef.current?.getBoundingClientRect().top;
      const workPosition = workRef.current?.getBoundingClientRect().top;
      const projectsPosition = projectsRef.current?.getBoundingClientRect().top;

      if (projectsPosition <= threshold && projectsPosition > 0) {
        setActiveSection("projects");
      } else if (workPosition <= threshold && workPosition > 0) {
        setActiveSection("work");
      } else if (aboutPosition <= threshold && aboutPosition > 0) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const smoothScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    // Prevent default behavior
    return false;
  }

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

  const composeEmail = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
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
          <Col className="home-page ml-md-4 pl-5" xs={12} md={6}>
            <h1>
              <span className="text-animate-hover">H</span>
              <span className="text-animate-hover">i</span>
              <span className="text-animate-hover">!</span>
              <span className="text-animate-hover">&nbsp;I</span>
              <span className="text-animate-hover">'m</span>
              <br />
              {nameArray.map((char, i) => (
                <span key={char + i} className="text-animate-hover">
                  {char}
                </span>
              ))}
              <span className="space">&nbsp;</span>
              {lastNameArray.map((char, i) => (
                <span key={char + i} className="text-animate-hover">
                  {char}
                </span>
              ))}


            </h1>
            <h2>Full-Stack Developer</h2>
            <ul className="nav">
              <li className="nav-item">
                <a className={`nav-link ${activeSection === "about" ? "active" : ""}`} href="#about" onClick={() => smoothScroll(aboutRef)}>About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === "work" ? "active" : ""}`} href="#work" onClick={() => smoothScroll(workRef)} >Experience</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === "projects" ? "active" : ""}`} href="#projects" onClick={() => smoothScroll(projectsRef)} >Projects</a>
              </li>
            </ul>
            <button onClick={composeEmail} className='flat-button'>CONTACT ME</button>
            <Footer />
          </Col>
          <Col className="ml-md-12 mt-md-0 mt-2" xs={12} md={6}>


            <About ref={aboutRef} id="about" />
            <Work ref={workRef} id="work" />
            <ProjectRight ref={projectsRef} id="projects" />



          </Col>
        </Row>
      </Container>
      <div
        className="spotlight"
        style={{
          opacity,
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 100%)`,
        }}
      />
    </div>

  )
}

export default Home
