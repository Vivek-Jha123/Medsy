import React, { Component } from "react";
import Slider from "react-slick";
import "./slider2.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
import IMG7 from "../../assets/img7.png";
import IMG8 from "../../assets/img8.png";
import IMG9 from "../../assets/img9.png";
import IMG10 from "../../assets/img10.png";
import IMG11 from "../../assets/img11.png";
import IMG12 from "../../assets/img12.png";
import IMG13 from "../../assets/img13.png";
import IMG14 from "../../assets/img14.png";
import IMG15 from "../../assets/img15.png";
import IMG16 from "../../assets/img16.png";


export default class Slider2 extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 8,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="slider2">
        <Slider {...settings}>
          <div>
            <img src={IMG5} alt="" />
            <h3>Household</h3>
          </div>
          <div>
          <img src={IMG6} alt="" />
          <h3>Sexual Well-Being</h3>
          </div>
          <div>
          <img src={IMG7} alt="" />
          <h3>Pregnency</h3>
       </div>
          <div>
          <img src={IMG8} alt="" />
          <h3>Oral Care</h3>
          </div>
          <div>
          <img src={IMG9} alt="" />
          <h3>Medecine & First Aid</h3>
          </div>
          <div>
          <img src={IMG10} alt="" />
          <h3>Health And Wellness</h3>
          </div>
          <div>
          <img src={IMG11} alt="" />
          <h3>Health And Protein</h3>
          </div>
          <div>
          <img src={IMG12} alt="" />
          <h3>Feminine Heigyne</h3>
          </div>
          <div>
          <img src={IMG13} alt="" />
          <h3>Baby Care</h3>
          </div>
          <div>
          <img src={IMG14} alt="" />
          <h3>Beauty Care</h3>
          </div>
          <div>
          <img src={IMG15} alt="" />
          <h3>Contraceptive</h3>
          </div>
          <div>
          <img src={IMG16} alt="" />
          <h3>Face & Skin Care</h3>
          </div>
        </Slider>
      </div>
    );
  }
}