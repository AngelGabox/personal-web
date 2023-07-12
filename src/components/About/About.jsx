import React from 'react'
import "./About.css"

function About() {
  return (
    <section className='about'>
      <h2 className='about--title'>About me</h2>
            <p>Welcome to my website! I'm a passionate web developer with experience in building websites and applications. My goal is to create innovative and functional digital solutions that satisfy my clients.</p>
            
            <br />
            <div className='about-divider'></div> 
            <br />
            
            <p>With strong skills in programming languages such as <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> , as well as popular framework <strong>React</strong>, I can create dynamic and engaging websites that provide an excellent user experience. </p>            
            <br />
            <div className='about-divider'></div>
            <br/>
           <p>I take pride in providing reliable and dedicated service. If you're looking for a trustworthy web developer, you've come to the right place.</p>
           
           <br />
           <div className='about-divider'></div>
           <br />
            <p>
            Feel free to explore my portfolio to see some of my previous work, and don't hesitate to contact me to discuss how I can help you achieve your online goals. I'm excited to work with you and take your project to the next level.
            </p>
        </section> 
  )
}

export default About