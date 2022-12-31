import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../../images/mainPic1.jpg";
import slide2 from "../../images/mainPic2.jpg";
import slide3 from "../../images/mainPic3.jpg";
import slide4 from "../../images/mainPic4.jpg";
import slide5 from "../../images/mainPic5.jpg";
import slide6 from "../../images/mainPic6.jpg";
import slide7 from "../../images/mainPic7.jpg";
import slide8 from "../../images/mainPic8.jpg";
// import $ from "jquery";
// import jQuery from "jquery";
// import "./jquery.galleriffic";

// import "./jquery.opacityrollover";

const AppBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="app__banner">
      {/* <div class="main_slider_page">
        <div class="indent-bot1 main_slider">
          <div id="gallery" class="content">
            <div class="slideshow-container">
              <div id="slideshow" class="slideshow"></div>
            </div>
          </div>
          <div id="slide1">
            <div id="thumbs" class="navigation">
              <ul class="thumbs noscript">
                <li>
                   
                  <a class="thumb" href={slide1}>
                     
                    <img src={slide1} alt="" />
                    <span></span> 
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic2.jpg">
                     
                    <img src="../../images/mainPic22.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic3.jpg">
                     
                    <img src="../../images/mainPic33.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic4.jpg">
                     
                    <img src="../../images/mainPic44.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic5.jpg">
                     
                    <img src="../../images/mainPic55.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic6.jpg">
                     
                    <img src="../../images/mainPic66.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic7.jpg">
                     
                    <img src="../../images/mainPic77.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
                <li>
                   
                  <a class="thumb" href="../../images/mainPic8.jpg">
                     
                    <img src="../../images/mainPic88.jpg" alt="" /> 
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div class="main_slider_adaptive_base">
        <Slider {...settings} class="main_slider_adaptive">
          <div class="main_slider_adaptive_item">
            <img src={slide1} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide2} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide3} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide4} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide5} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide6} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide7} alt="" />
          </div>
          <div class="main_slider_adaptive_item">
            <img src={slide8} alt="" />
          </div>
        </Slider>
      </div>
      <div class="gallery p3 gallery_React">
        <div class="inner">
          <div class="wrapper">
            <span class="title1 img-indent3">Мебель на заказ</span>
            <div class="extra-wrap indent-top2 indent_React">
              <span>
                ME<strong>B</strong>ELcenter
              </span>
              <span>
                производит качественные корпусные мебели на заказ. Наши
                дизайнеры и менеджеры составят вам по вашим индивидуальным
                размерам неповторимый, изысканный дизайн мебели. Наша компания
                изготавливает мебель в широком ассортименте:
                <a class="color-3" href="prixozhie.html">
                  Прихожие
                </a>
                ,
                <a class="color-3" href="kuhni.html">
                  Кухни
                </a>
                ,
                <a class="color-3" href="gostinye.html">
                  Гостиные
                </a>
                ,
                <a class="color-3" href="detskie.html">
                  Детские
                </a>
                ,
                <a class="color-3" href="spalni.html">
                  Спальни
                </a>
                а также
                <a class="color-3" href="ofisnaya-mebel.html">
                  Офисная мебель
                </a>
                и
                <a class="color-3" href="mebel-butik.html">
                  Коммерческая мебель
                </a>
              </span>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
