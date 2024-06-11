import './Delivery.css';
import Delivery1 from '../../img/Delivery/delivery-1.svg'
import Delivery2 from '../../img/Delivery/delivery-2.svg'
import Delivery3 from '../../img/Delivery/delivery-3.svg'
import Delivery4 from '../../img/Delivery/delivery-4.svg'
import delivery1 from '../../img/Delivery/delivery-1.webp'
import Title from '../../Components/Title/Title';

function Delivery() {
  return (
    <div className='Delivery'>
      <div className="container">
        <Title>DELIVERY</Title>
        <div className="Delivery_in">
        <div className="Delivery_grid">
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src={Delivery1} alt="" />
            </div>
            <h1 className="Delivery_tit">Free Shipping</h1>
            <p className="Delivery_txt">Order above $200</p>
          </div>
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src={Delivery2} alt="" />
            </div>
            <h1 className="Delivery_tit">Money-back</h1>
            <p className="Delivery_txt">30 days guarantee</p>
          </div>
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src={Delivery3} alt="" />
            </div>
            <h1 className="Delivery_tit">Secure-Pay</h1>
            <p className="Delivery_txt">Secured by Stripe</p>
          </div>
          <div className="Delivery_option">
            <div className="Delivery_img">
              <img src={Delivery4} alt="" />
            </div>
            <h1 className="Delivery_tit">24/7 Support</h1>
            <p className="Delivery_txt">Phone and Email support</p>
          </div>
        </div>
        <div className="Delivery_content">
          <div className="delivery_img">
            <img src={delivery1} alt="" />
          </div>
          <div className="Delivery_desc">
            <h1 className='Delivery_tit'> A GLOBAL COMPANY

</h1>
            <p className="Delivery_txt">
            ESTABLISHED IN 1927 BY ALDO FURLANETTO IN BOLOGNA, FURLA LOOKS 
            TO THE FUTURE WITH A FOOT GROUNDED IN A SOLID PAST OF TIME-HONORED CRAFTSMANSHIP,
ARTISANAL EXPERTISE, A SENSE OF BEAUTY AND INNOVATIVE DESIGNS.
AN ITALIAN COMPANY WITH AN INTERNATIONAL ORGANIZATION: THIS BLENDING OF PEOPLE AND CULTURES ENSURES FURLA’S SUCCESS AROUND THE<br/>AN ITALIAN COMPANY WITH AN INTERNATIONAL ORGANIZATION: THIS BLENDING OF PEOPLE AND CULTURES ENSURES FURLA’S SUCCESS AROUND THE
WORLD WHILE ENSURING THE COMPANY’S COMMITMENT TO TRADITION AND INNOVATION.
            </p>
            <h1 className="Delivery_tit">
            RESPONSIBILITY
            </h1>
            <p className="Delivery_txt">
            AT THE END OF 2017, FURLA SET UP A SUSTAINABILITY & CSR DEPARTMENT AND SINCE THEN, THE COMPANY HAS IMPLEMENTED A SET OF INSTRUMENTS SUCH AS
ITS NEW CODE OF ETHICS, ITS SUPPLIERS' MANUAL, AND SEVERAL POLICIES THAT LAY DOWN THE COMPANY'S VALUES, AS WELL AS A STRATEGY TO
DRIVE NEW SOCIAL AND ENVIRONMENTAL RESPONSIBILITY PROJECTS.
            </p>
            <h1 className="Delivery_tit">
            FONDAZIONE FURLA

            </h1>
            <p className="Delivery_txt">
            WHEN FASHION MEETS ART - FURLA HAS ALWAYS BEEN STRONGLY COMMITTED TO DEVELOPING 
            AND FOSTERING CREATIVE MINDS, PROPELLING THEM TO
INTERNATIONAL PROMINENCE AND CONTINUING OUR DEDICATION TO CONTEMPORARY ART.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;