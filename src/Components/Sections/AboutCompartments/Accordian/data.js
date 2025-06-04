import React from 'react';
import skills from '../../../assets/Skills.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import four from '../../../assets/4.png';
import five from '../../../assets/5.png';
import './data.css';

const CustomImage = ({ src, alt, style }) => (
  <img 
    src={src}
    alt={alt}
    style={style}
  />
);

const ProjectImage = ({ src, alt, style, projectKey }) => (
  <img 
    src={src}
    alt={alt}
    style={{...style, cursor: 'pointer'}}
    onClick={() => window.openProjectExplorer && window.openProjectExplorer(projectKey)}
    title="Click to explore project"
  />
);

const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div className="text-white" id="bio"> 
        <p>
        As a Software Engineer, I've worked at various companies where i learnt & crafted software that's not just stashed away.

        </p>
        <p>
        * Hire me! I'm not just fluent in coding , but also in the art of turning coffee into code *
        </p>
        <p>
        Open Source? I'm building one Right Now!!!
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Education",
    content: (
      <div className="experience gap-3 d-flex row" id="education">
      <div className="d-flex row gap-2">
        <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
          <a href="rice.edu" title="Rice University" style={{ color: '#eecda3' }}>
            Rice University
          </a> - Masters Computer Science
        </h3>
        <span className="small text-white">Aug 23 => Dec 24 (Texas, USA)</span>
      </div>
      <div className="d-flex row gap-2">
        <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
          <a href="gitam.edu" title="GITAM University" style={{ color: '#eecda3' }}>
          GITAM University
          </a> - BTech Computer Science
        </h3>
        <span className="small text-white">Jul 19 => Mar 23</span>
      </div>      
      </div>
    )
  },
  {
    id: 2,
    title: "Skills",
    content: (
      <div className="d-flex justify-content-center" id="skills"> 
        <CustomImage 
          src={skills}
          alt="Skills" 
          style={{ width: '105%', height: 'auto' }}
        />
      </div>
    )
  },
  {
    id: 3,
    title: "experience",
    content: (


      
<div className="experience gap-3 d-flex row" id="experience">


<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="https://www.buckfund.com/" title="Buck Fund " style={{ color: '#3bc0a5' }}>
    Buck Fund  
        </a> - Full Stack Developer (co-op) 
  </h3>
  <span className="small text-white">Aug-24 =&gt; Present, Houston</span>
</div>

<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="openstax.org" title="Rice University" style={{ color: '#3bc0a5' }}>
        NSF(OpenStax)
     </a> - Software Engineer Intern
  </h3>
  <span class="small text-white"> May-24 =&gt; Aug-24, Houston, Texas</span>
</div>


<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="rice.edu" title="Rice University" style={{ color: '#3bc0a5' }}>
      Rice Computing Lab
    </a> - Research & Developer
  </h3>
  <span class="small text-white"> Oct-23 =&gt; Mar-24, Houston, Texas</span>
</div>


<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="https://logistics.amazon.com/" title="Amazon (Footsteps LLC)" style={{ color: '#3bc0a5' }}>
      Amazon
    </a> - Full Stack Developer
  </h3>
  <span className="small text-white">Jan-21 =&gt; Jun-23, Austin, Texas</span>
</div>
</div>

    ),
  },
  {
    id: 7,
    title: "GitHub Stats",
    content: (
      <div id="github-stats" style={{ width: '100%', color: 'white', fontFamily: 'monospace' }}>
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#eecda3', marginBottom: '15px' }}>📊 GitHub Statistics</h4>
          
          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '15px', 
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>📁 Repositories:</span>
              <span style={{ color: '#ff8c00' }}>33</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>⭐ Stars Earned:</span>
              <span style={{ color: '#ff8c00' }}>3</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>🍴 Forks:</span>
              <span style={{ color: '#ff8c00' }}>1</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>👥 Followers:</span>
              <span style={{ color: '#ff8c00' }}>14</span>
            </div>
          </div>

          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '15px', 
            borderRadius: '8px',
            marginBottom: '15px'
          }}>
            <h5 style={{ color: '#eecda3', marginBottom: '10px' }}>💻 Languages</h5>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>TypeScript</span>
                <span style={{ color: '#3178c6' }}>8 repos</span>
              </div>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>JavaScript</span>
                <span style={{ color: '#f1e05a' }}>6 repos</span>
              </div>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Python</span>
                <span style={{ color: '#3572a5' }}>2 repos</span>
              </div>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>CSS</span>
                <span style={{ color: '#563d7c' }}>3 repos</span>
              </div>
            </div>
          </div>

          <div style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '15px', 
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '12px', color: '#888' }}>
              💡 "Developer since 2019"
            </div>
          </div>

          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <a 
              href="https://github.com/divitcr7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#eecda3', 
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              🔗 View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Projects",
    content: (
      <div className="row" id="projects" style={{ marginTop: '20px' }}>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <ProjectImage
              src={two}
              alt="Advanced Banking Architecture"
              style={{ width: '90%', height: 'auto', padding: '0 2px' }}
              projectKey="Advanced-Banking-Architecture---eBanking"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a href="https://github.com/divitcr7/Advanced-Banking-Architecture---eBanking" 
             className="github-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <ProjectImage
              src={three}
              alt="Health Appointment Architecture"
              style={{ width: '90%', height: 'auto', padding: '0 2px' }}
              projectKey="Health-Appointment-Architecture"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a href="https://github.com/divitcr7/Health-Appointment-Architecture" 
             className="github-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <ProjectImage
              src={four}
              alt="Trackify"
              style={{ width: '90%', height: 'auto', padding: '0 2px' }}
              projectKey="Trackify-"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a href="https://github.com/divitcr7/Trackify-" 
             className="github-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
        <div className="col-md-6 mb-3">
          <div className="project-card">
            <ProjectImage
              src={five}
              alt="Stegano-LLM"
              style={{ width: '90%', height: 'auto', padding: '0 2px' }}
              projectKey="Stegano-LLM"
            />
            <div className="project-overlay">
              <i className="bi bi-eye"></i>
              <span>Explore Project</span>
            </div>
          </div>
          <a href="https://github.com/divitcr7/Stegano-LLM" 
             className="github-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i> View on GitHub
          </a>
        </div>
      </div>
    )
  }
];

export default data;
