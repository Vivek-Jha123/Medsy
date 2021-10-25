import React, { Component } from "react";
import Slider from "react-slick";
import "./swipetoslide.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";


export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="swipetoslide main-slide">
        <Slider {...settings}>
          <div>
            <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img1.png" alt="" />
          </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img2.png" alt="" />
          </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img3.png" alt="" />
       </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img4.png" alt="" />
          </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img1.png" alt="" />
          </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img2.png" alt="" />
          </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img3.png" alt="" />
          </div>
          <div>
          <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/img4.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}