import React from 'react';
import './Home.css';
import  homeBg from '../../img/home.bg-1.webp';

import promoImg from '../../img/promo.png';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import video from '../../img/video.mp4'
// Пример изображений для слайдера
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

const images = [slide1, slide2, slide3, shoulder1, shoulder2, shoulder3, shoulder4];

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
        {/* <div class="replicas">
			<div class="replicas_in flex">
				<div class="replicas_img">
					<img src={homebg} alt=""/>
				</div>
				<div class="replicas_content">
					<h2 class="replicas_tit">Реплики картин от<span class="dib"  > Ink. House</span></h2>
					<p class="replicas_txt">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
					<button class="btn">Продукция</button>
		</div>
    </div>
	</div> */}
 <div className="intro-section">
            <img src={homeBg} alt="Intro Image" className="intro-img" />
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

          {/* <div className="promo__content">
            <div className="promo__text">
              <div className="promo__title">
                <span className="highlight">
                  <span>LET’S</span>
                </span>
                EXPLORE
                <span className="highlight highlight--yellow">
                  <span>UNIQUE</span>
                </span>
                BAGS.
              </div>
              <div className="promo__desc">
                Live for Influential and Innovative fashion!
              </div>
              <div className="promo__btn-wrapper">
                <a href="/about" className="promo__btn">
                  Read On
                </a>
              </div>
            </div>
            <div className="promo__img">
              <img src={promoImg} alt="Promo" />
            </div>
          </div> */}
          <div className="Home_video">
            <video width="100%" height="auto" autoPlay muted loop>
              <source src={video} type="video/mp4"/>
            </video>
          </div>
          <div className="Home_slider">
            <Slider {...sliderSettings}>
              {images.map((img, index) => (
                <div key={index} className="slide">
                  <div className="overlay">
                    <a href="/shop" className="shop-link">Shop</a>
                  </div>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
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
