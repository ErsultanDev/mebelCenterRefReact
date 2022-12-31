import Slider from "react-slick";
import b4img1 from '../../images/b4img1.png';
import b4img2 from '../../images/b4img2.png';
import b4img3 from '../../images/b4img3.png';
import b4img4 from '../../images/b4img4.png';

import our1 from '../../images/our1.jpeg';
import our2 from '../../images/our2.jpg';
import our3 from '../../images/our3.jpg';
import our4 from '../../images/our4.jpeg';
import our5 from '../../images/our22.jpg';

const Major = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <>
      <div class="b4_block">
        <div class="b4_wrapper">
          <div class="b4_top">
            <h2>Наши преимущества</h2>
          </div>
          <div class="b4_inner">
            <div class="b4_items">
              <div class="b4_cards ">
                <div class="b4_item b4_cards_one _anim-items _anim-no-hide _active">
                  <div class="b4_img">
                    <img src={b4img1} alt="" />
                  </div>
                  <div class="b4_content">
                    <h4>КАЧЕСТВО ПРОВЕРЕННОЕ ВРЕМЕНЕМ</h4>
                    <p>
                      Высоким приоритетом компании является предоставления
                      непревзойденного лучшего качества - более 10 лет
                    </p>
                  </div>
                </div>
                <div class="b4_item _anim-items _anim-no-hide _active">
                  <div class="b4_img">
                    <img src={b4img2} alt="" />
                  </div>
                  <div class="b4_content">
                    <h4>КВАЛИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ</h4>
                    <p>
                      Главным фактором качества сервиса являются высоко
                      квалифицированные команда специалистов, которые проходят
                      специальное обучение
                    </p>
                  </div>
                </div>
              </div>
              <div class="b4_cards b4_cards_two ">
                <div class="b4_item _anim-items _anim-no-hide _active">
                  <div class="b4_img">
                    <img src={b4img3} alt="" />
                  </div>
                  <div class="b4_content">
                    <h4>ИЗГОТОВЛЕНИЕ МЕБЕЛИ ЛЮБОЙ СЛОЖНОСТИ</h4>
                    <p>
                      Производимая продукция из первоклассного материала и
                      любого нестандартного дизайна
                    </p>
                  </div>
                </div>
                <div class="b4_item _anim-items _anim-no-hide _active">
                  <div class="b4_img">
                    <img src={b4img4} alt="" />
                  </div>
                  <div class="b4_content">
                    <h4>ВЫСОКАЯ СКОРОСТЬ ВЫПОЛНЕНИЯ ЗАКАЗА</h4>
                    <p>
                      Имеется собственный отдел логистики, что позволяет
                      оперативно выполнять заказы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="our_work">
        <div class="page_catalog_wrapper">
          <div class="b4_top">
            <h2>Наши работы</h2>
          </div>
          <div class="our_work_inner">
            <div class="our_work_cards">
              <Slider {...settings} class="Pictures-box Pictures-box_slider">
                <figure class="Picture-wrap">
                  <img class="Picture" src={our1} />
                  <article class="Picture-description">
                    <div class="Picture-description-wrap">
                      <svg
                        class="Picture-border"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                      <h2 class="Picture-title">Кофейня Dolly&Molly</h2>
                      <p class="Picture-paragraph Picture-paragraph1">
                        Кофейня Dolly&Molly была изготовлена по уникальному
                        дизайну. Владелец Кофейни «Dolly&Molly» обратился к нам
                        за разработкой индивидуальной мебели для посетителей.
                        Для изготовления мебели был выбран современный стиль.
                      </p>
                      <div class="Picture-btn Picture-paragraph">
                        <a href="our.html">
                          <div class="btn btn__primary">
                            <p>Перейти</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                </figure>
                <figure class="Picture-wrap">
                  <img class="Picture" src={our2} />
                  <article class="Picture-description">
                    <div class="Picture-description-wrap">
                      <svg
                        class="Picture-border"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                      <h2 class="Picture-title">Кухня ЖК Ламия</h2>
                      <p class="Picture-paragraph Picture-paragraph1">
                        Why this book of whales is not denominated the Quarto is
                        very plain.
                      </p>
                      <div class="Picture-btn Picture-paragraph">
                        <a href="#">
                          <div class="btn btn__primary">
                            <p>Перейти</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </article>
                </figure>
                <figure class="Picture-wrap">
                  <img class="Picture" src={our3} />
                  <article class="Picture-description">
                    <div class="Picture-description-wrap">
                      <svg
                        class="Picture-border"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                      <h2 class="Picture-title">Магазин восточный мёд</h2>
                      <p class="Picture-paragraph Picture-paragraph1">
                        Why this book of whales is not denominated the Quarto is
                        very plain.
                      </p>
                    </div>
                  </article>
                </figure>
                <figure class="Picture-wrap">
                  <img class="Picture" src={our4} />
                  <article class="Picture-description">
                    <div class="Picture-description-wrap">
                      <svg
                        class="Picture-border"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                      <h2 class="Picture-title">Кофейня with love</h2>
                      <p class="Picture-paragraph Picture-paragraph1">
                        Why this book of whales is not denominated the Quarto is
                        very plain.
                      </p>
                    </div>
                  </article>
                </figure>
                <figure class="Picture-wrap">
                  <img class="Picture" src={our5} />
                  <article class="Picture-description">
                    <div class="Picture-description-wrap">
                      <svg
                        class="Picture-border"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0" y="0"></rect>
                      </svg>
                      <h2 class="Picture-title">Кухня ЖК Ламия</h2>
                      <p class="Picture-paragraph Picture-paragraph1">
                        Why this book of whales is not denominated the Quarto is
                        very plain.
                      </p>
                    </div>
                  </article>
                </figure>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Major;
