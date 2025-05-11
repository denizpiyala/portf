import type React from 'react';
import './About.css';
import profile2 from '../../assets/profile2.jpg';
import folder from '../../assets/folder.png';

const About: React.FC = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile2} alt='profile' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Deniz Piyala — a junior frontend developer passionate about turning ideas into interactive and beautiful digital experiences.</p>
                        <p>I’m especially proud of the projects I’ve built individually: a Netflix clone, a simple pixel art game, an e-commerce website for my mom’s knitting business, and even a taxi booking site. These experiences taught me both problem-solving and how to creatively approach challenges.</p>
                        <p>While I’ve mostly worked independently, I love learning from others and aspire to work in multi-disciplinary teams. I'm currently diving into backend technologies to become a fullstack developer. Outside of coding, I enjoy illustration and design — anything visual inspires me!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: '90%' }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: '75%' }} />
                        </div>
                        <div className="about-skill">
                            <p>React.js</p><hr style={{ width: '65%' }} />
                        </div>
                        <div className="about-skill">
                            <p>Firebase</p><hr style={{ width: '45%' }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
