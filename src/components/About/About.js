import React from 'react';
import './About.scss'

const About = React.forwardRef((props, ref) => {

  return (
    
      <div className="about-page" ref={ref}>
        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <p>
          My journey into software development began with my first job in the SaaS space, working on a <a href='https://www.navigatorcre.com/'>data visualization app</a> for commercial real estate as a project manager. I have always been the kind of person who needs to understand the technical details of what I am working on so I took a <a href='https://www.edx.org/learn/computer-programming/massachusetts-institute-of-technology-introduction-to-computer-science-and-programming-7'>MIT python course</a> through EdX so that I could work more effectively with my data engineer teammates. It was this class that really opened my eyes to all the possibilities in software development and first started my desire to one day be an engineer working on a cutting edge project.  I carried on my learning through Harvard's <a href='https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?utm_source=google&utm_campaign=19322989673&utm_medium=cpc&utm_term=edx%20cs50&hsa_acc=7245054034&hsa_cam=19322989673&hsa_grp=146273875324&hsa_ad=642047721501&hsa_src=g&hsa_tgt=kwd-354272008720&hsa_kw=edx%20cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwgsqoBhBNEiwAwe5w0xP5BiDhzBKJcDwue856umPqqdkT-JKnFXj5B3rc-mW9YXy2g881BhoCXk4QAvD_BwE'>Introduction to Computer Science</a> also through EdX and later in 2023 jumped in with both feet by quitting my job and joining Code Fellows <a href='https://www.codefellows.org/'>Software Development bootcamp.</a>
          </p>
          <p>
          These days I am carrying on my learning through <a href='https://frontendmasters.com/'>Front End Masters</a>, practicing data structures and algorithms, and working on personal projects while I look for a position as a full-time developer.
          </p>
          <p>
            When I'm not at my desk improving my skills you can find me outdoors rock climbing, skiing, or hiking with my wife and my dog!  If you would like to chat more about any of my projects, interests, or just connect to network, please feel free to reach out via LinkedIn or my email!
          </p>
        </div>
      </div>
    
  );
});

export default About

