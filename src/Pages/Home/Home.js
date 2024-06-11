import React from 'react';
import './Home.css';
import  homeBg from '../../img/home.bg-1.webp';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import video from '../../img/video.mp4'
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import shoulder1 from '../../img/shoulder-1.jpg';
import shoulder2 from '../../img/shoulder-2.jpg';
import shoulder3 from '../../img/shoulder-3.jpg';
import shoulder4 from '../../img/shoulder-4.jpg';
import three1 from '../../img/slide1.webp';
import three2 from '../../img/slide2.webp';
import three3 from '../../img/slide3.webp';

const images = [
  { image: slide1, link: "/products/furla-glove" },
  { image: slide2, link: "/products/furla-glove-tote-m-nero" },
  { image: slide3, link: "/products/furla-glove-tote-celestial-mediterra" },
  { image: shoulder1, link: "/products/furla-club-2" },
  { image: shoulder2, link: "/products/furla-nuvola-shoulder-bag-l-marshmallow" },
  { image: shoulder3, link: "/products/furla-diamante-shoulder-bag-mini-ivy" },
  { image: shoulder4, link: "/products/furla-club-2" }
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="Home">
        <div className="container">
        
 <div className="intro-section">
            <img src={homeBg} alt="Intro" className="intro-img" />
            <div className="intro-content">
              <h2 className="intro-title">FURLA PRE-FALL 2024 COLLECTION</h2>
              <p className="intro-text">The excellence of Venice's renowned craftsmanship and 
              <br/>
              the enchanting allure of its surroundings are the key inspirations <br/>behind the Furla
               Prefall 2024 collection.
              <br/>A place of tradition, innovation, art and architecture.</p>
              <a href='/about'     className="intro-btn">LEARN MORE</a>
            </div>
          </div>
          <div className="Home_video">
            <video width="100%" height="auto" autoPlay muted loop>
              <source src={video} type="video/mp4"/>
            </video>
          </div>
          <div className="Home_slider">
            <Slider {...sliderSettings}>
              {images.map((slide, index) => (
                <div key={index} className="slide">
                  <div className="overlay">
                    <a href= {slide.link} className="shop-link">Shop now</a>
                  </div>
                  <img src={slide.image} alt={`Slide ${index + 1}`} />                </div>
              ))}
            </Slider>
          </div>
          <div className="Delivery_desc">
            <h1 className='delivery_tit'> ITALIAN HERITAGE


</h1>
            <p className="Delivery_txt">
            Established in 1927 by aldo furlanetto in bologna, furla looks to the
             future with a foot grounded in a solid past of time-honored craftsmanship,
              artisanal expertise, a sense of beauty and innovative designs. an italian 
              company with an international organization: this blending of people and cultures
               ensures furla’s success around the
            </p>
            <p className="Delivery_txt">Stitch after stitch, expert artisans bring the 
            furla collections to life using time-honored techniques that have elevated the 
            brand’s quality standards to its now renowned levels of excellence in every corner
             of the world.
</p>
<p className="Delivery_txt">
at the end of 2017, furla set up a sustainability & csr department 
and since then, the company has implemented a set of instruments such as
 its new code of ethics, its suppliers' manual, and several policies that lay
  down the company's values, as well as a strategy to drive new social and environmental 
  responsibility projects.


</p>
          </div>
          <div className="three-images">
            <img src={three1} alt="Slide 1" />
            <img src={three2} alt="Slide 2" />
            <img src={three3} alt="Slide 3" />
          </div>
        </div>
      </div>
  </>
  );
}

export default Home;






