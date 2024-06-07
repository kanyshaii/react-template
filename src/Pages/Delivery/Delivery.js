import './Delivery.css';
import Delivery1 from '../../img/Delivery/delivery-1.svg'
import Delivery2 from '../../img/Delivery/delivery-2.svg'
import Delivery3 from '../../img/Delivery/delivery-3.svg'
import Delivery4 from '../../img/Delivery/delivery-4.svg'
import delivery1 from '../../img/Delivery/delivery-1.webp'

import Title from '../../Components/Title/Title';

function Delivery() {
  return (
    <section className='Delivery'>
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
            <h1 className="Delivery_tit">Secure Payments</h1>
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
            <h1 className='.delivery_tit'> A GLOBAL COMPANY

</h1>
            <p className="Delivery_txt">
            ESTABLISHED IN 1927 BY ALDO FURLANETTO IN BOLOGNA, FURLA LOOKS 
            TO THE FUTURE WITH A FOOT GROUNDED IN A SOLID PAST OF TIME-HONORED CRAFTSMANSHIP,
ARTISANAL EXPERTISE, A SENSE OF BEAUTY AND INNOVATIVE DESIGNS.
AN ITALIAN COMPANY WITH AN INTERNATIONAL ORGANIZATION: THIS BLENDING OF PEOPLE AND CULTURES ENSURES FURLA’S SUCCESS AROUND THE
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;