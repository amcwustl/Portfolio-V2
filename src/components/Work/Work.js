import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workExperienceData from '../../content/workExperience.json'
import './Work.scss';



const Work = React.forwardRef((props, ref) => {

  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    setWorkExperience(workExperienceData);
  }, []);
  
  return (
    <Container className='work-container' ref={ref}>
      <h1 className="section-heading">Where I've Worked</h1>
      {workExperience.map((experience) => (
        <Row className="work-experience" key={experience.id}>
          <Col xs={3}>
            <p className="date">{experience.date}</p>
          </Col>
          <Col xs={9}>
            <h1>{experience.company}</h1>
            <h2>{experience.position}</h2>
            <p>{experience.description}</p>
            <Stack className="custom-stack" gap={2}>
              {experience.skills.map((skill) => (
                <Badge key={skill} pill bg="secondary" className="custom-pill">
                  {skill}
                </Badge>
              ))}
            </Stack>
          </Col>
        </Row>
      ))}
    </Container>
  );
});

export default Work;