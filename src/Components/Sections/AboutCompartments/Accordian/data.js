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

const data = [
  {
    id: 1,
    title: "bio",
    content: (
      <div className="text-white"> 
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
      <div className="experience gap-3 d-flex row">
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
      <div className="d-flex justify-content-center"> 
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


      
<div className="experience gap-3 d-flex row">


<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="https://healthplan.memorialhermann.org/" title="UTH - Memorial Hermann Health System " style={{ color: '#3bc0a5' }}>
     M Hermann Health 
        </a> - Application Engineer 
  </h3>
  <span className="small text-white">Aug-24 =&gt; Oct-24, Houston</span>
</div>

<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="openstax.org" title="Rice University" style={{ color: '#3bc0a5' }}>
        OpenStax
     </a> - UI Engineer
  </h3>
  <span class="small text-white"> Oct-23 =&gt; Mar-24, Houston, Texas</span>
</div>


<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="rice.edu" title="Rice University" style={{ color: '#3bc0a5' }}>
      Rice University
    </a> - Research Assistant
  </h3>
  <span class="small text-white"> Oct-23 =&gt; Mar-24, Houston, Texas</span>
</div>


<div className="d-flex row gap-2">
  <h3 style={{ color: 'white', transition: 'color 0.3s ease-in-out' }}>
    <a href="https://www.footstepsusa.com/" title="Amazon (Footsteps LLC)" style={{ color: '#3bc0a5' }}>
      Amazon(Footsteps LLC)
    </a> - Software Engineer
  </h3>
  <span className="small text-white">Sep-21 =&gt; Jun-23, Austin, Texas</span>
</div>
</div>

    ),
  },
// Your JSX code
{
  id: 4,
  title: "Projects",
  content: (
    <div className="row" style={{ marginTop: '20px' }}>
      <div className="col-md-6 mb-3">
        <a href="https://github.com/divitcr7/Notion-Clone-FullStack-" className="image-link">
          <CustomImage
            src={two}
            alt="Projects"
            style={{ width: '90%', height: 'auto', padding: '0 2px' }}
          />
        </a>
      </div>
      <div className="col-md-6 mb-3">
        <a href="https://github.com/divitcr7/Talk-To-Your-Idol" className="image-link">
          <CustomImage
            src={three}
            alt="Projects"
            style={{ width: '90%', height: 'auto', padding: '0 2px' }}
          />
        </a>
      </div>
      <div className="col-md-6 mb-3">
        <a href="https://github.com/divitcr7/AirBnb-Clone" className="image-link">
          <CustomImage
            src={four}
            alt="Projects"
            style={{ width: '90%', height: 'auto', padding: '0 2px' }}
          />
        </a>
      </div>
      <div className="col-md-6 mb-3">
        <a href="https://github.com/divitcr7/MoviFlix-Watch-Anything" className="image-link">
          <CustomImage
            src={five}
            alt="Projects"
            style={{ width: '90%', height: 'auto', padding: '0 2px' }}
          />
        </a>
      </div>
    </div>
  )
}

  
  

];

export default data;
