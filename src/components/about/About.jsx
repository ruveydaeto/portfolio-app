import React from 'react';
import './about.css';
import Image from '../../assets/ruveyda.svg';


export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__area grid">
          <div className="about__info">
            <p className="about__desc">
             <div className='first__line' >Welcome to my portfolio,</div>

               I am a web developer with a passion for creating beautiful and functional websites.
              I have a strong background in web development and I am always looking to learn new technologies.
            
            </p>

          
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend Development</h3>
                <span className="skills__percentage  ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend Development</h3>
                <span className="skills__percentage  ">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </section>
  );
}
