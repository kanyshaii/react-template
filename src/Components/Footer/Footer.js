import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Site Map</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to={"/categories/tote-bags"}>Tote</Link>
              </li>
              <li>
                <Link to={"/categories/backpacks"}>Backpacks</Link>
              </li>
              <li>
                <Link to={"/categories/shoulder-bags"}>Shoulder bags</Link>
              </li>
              <li>
                <Link to={"/categories/bucket-bags"}> Bucket bags</Link>
              </li>
              <li>
                <Link to={"/categories/top-handles"}> Top handles</Link>
              </li>
              <li>
                <Link to={"/categories/mini-bags"}> Mini bags</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            Address:
            <a
              className="Tel"
              target="_blank"
              rel="noreferrer"
              href="tel: "
            >
              <br />
              43 Akyikat Karakol, Kyrgyzstan
            </a>
            <p>
              Phone:
              <br />
              <a
                className="Tel"
                target="_blank"
                rel="noreferrer"
                href="tel:  +996 707 504 599"
              >
                +996 707 504 599
              </a>
              <br /> Email:    <a
                className="Tel"
                target="_blank"
                rel="noreferrer"
                href="kanyshaibaktybekova07@gmail.com"
              >
                kanyshaibaktybekova07@gmail.com
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li>
                <a href="https://facebook.com">
                <i class="fa-brands fa-facebook"></i>                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                <i class="fa-brands fa-twitter"></i>                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/qanyshaii/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;