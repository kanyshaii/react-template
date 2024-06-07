import './About.css';
import about1 from '../../img/About/about-1.jpg';
import about2 from '../../img/About/about-2.jpg';
import about3 from '../../img/About/about-3.jpg';
import about4 from '../../img/About/about-4.jpg';
import about5 from '../../img/About/about-5.png';
import aboutic1 from '../../img/About/about.ic-1.svg';
import aboutic2 from '../../img/About/about.ic-2.svg';
import aboutic3 from '../../img/About/about.ic-3.svg';

function About() {
  return (
    <section className="About">
      <div className="container">
        <h2>ABOUT US</h2>
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">Furla world</h1>
            <p className="about-description">
              Furla is an Italian brand specializing in luxury leather goods, including handbags, shoes, accessories, and clothing. Founded in 1927 by Aldo Furlanetto, the Furla company has gained international recognition for its craftsmanship in leatherwork, innovative designs, and product quality. Furla handbags represent a blend of classic and contemporary styles, making them appealing to a wide range of consumers. The brand offers various bag models, from elegant clutches and shoulder bags to spacious totes and backpacks.
            </p>
          </div>
          <div className="about-image-container">
            <img src={about4} alt="About Image" className="about-image" />
          </div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={about1} alt="Image 1" className="image" />
            <div className="image-overlay">
              <a href="#" className='overplay-txt'>Shop now</a>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={about2} alt="Image 2" className="image" />
            <div className="image-overlay">
              <a href="#">Shop now</a>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={about3} alt="Image 3" className="image" />
            <div className="image-overlay">
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="team_in flex">
          <div className="team_img">
            <img src={about5} alt="" />
          </div>
          <div className="team_content">
            <h2 className="about-title">Our team</h2>
            <p className="team_txt">
              The significance of these problems is so obvious that the basic vector of development makes it possible to assess the significance of experiments that are striking in their scale and grandeur. We are forced to proceed from the fact that the consultation is with a broad asset base.
            </p>
            <div className="team_ic">
              <img src={aboutic1} alt="" />
              <img src={aboutic2} alt="" />
              <img src={aboutic3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
