import "./appHeader.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import mebel from  '../../images/mebelcenter2.svg'

const arrowRight = <FontAwesomeIcon icon={faArrowRight} />
const search = <FontAwesomeIcon icon={faSearch} />

const AppHeader = () => {
  return (
    <header id="header">
      <div class="header_wrapper">
        <div class="menu_burger">
          <div class="menu_burger_logo">
            <a href="index.html">
              <div>
                <img src={mebel} alt="" />
              </div>
            </a>
          </div>
          <div class="menu_burger_number">
            <a href="87273449900">+7 727 344 99 00</a>
          </div>
          <div class="menu_burger_sub">
            <a class="opener">
              <span class="opener_burger">Opener</span>
            </a>
          </div>
          <ul class="nav">
            <div class="nav_menu_item">
              <div class="accordions">
                <div class="accordion">
                  <div class="accordion__slot_sub">
                    <div>
                      <img src="images/msub3.svg" alt="" />
                    </div>
                    <button class="accordion__button">
                      Стеклянные витрины
                    </button>
                  </div>
                  <div class="accordion__slot">
                    <div class="accordion__panel">
                      <p class="accordion-panel__content">
                        <a href="kuhni.html">Островные витрины</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Стеклянные витрины</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Островные торговые модули</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Стеклянные витрины</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Островные витрины</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Островные витрины</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion">
                  <div class="accordion__slot_sub">
                    <div>
                      <img src="images/msub5.svg" alt="" />
                    </div>
                    <button class="accordion__button">Мебель для бутика</button>
                  </div>
                  <div class="accordion__slot">
                    <div class="accordion__panel">
                      <p class="accordion-panel__content">
                        <a href="kuhni.html">Одежда и аксессуары</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Аксессуары, Парфюмерия, Косметика
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Ювелирные изделия и бижутерия
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Обувь и аксессуары</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion">
                  <div class="accordion__slot_sub">
                    <div>
                      <img src="images/msub2.svg" alt="" />
                    </div>
                    <button class="accordion__button">
                      Оборудование для аптек
                    </button>
                  </div>
                  <div class="accordion__slot">
                    <div class="accordion__panel">
                      <p class="accordion-panel__content">
                        <a href="kuhni.html">
                          Оборудование для аптеки Мегаполис
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Оборудование для аптеки Грин
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Оборудование для аптеки Массив
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Оборудование для аптеки Глянец
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Оборудование для аптеки Модерн
                        </a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">
                          Оборудование для аптеки Премиум
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion">
                  <div class="accordion__slot_sub">
                    <div>
                      <img src="images/msub4.svg" alt="" />
                    </div>
                    <button class="accordion__button">Офисная мебель</button>
                  </div>
                  <div class="accordion__slot">
                    <div class="accordion__panel">
                      <p class="accordion-panel__content">
                        <a href="kuhni.html">Офисная мебель Агат</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Аккорд</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Аксиома</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Блиц</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Формат</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Гамма</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Нортон</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Прего</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Смарт</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Спектр</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Статус</a>
                      </p>
                      <p class="accordion-panel__content">
                        <a href="prixozhie.html">Офисная мебель Тандем</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion">
                <div class="accordion__slot_sub">
                  <div>
                    <img src="images/msub6.svg" alt="" />
                  </div>
                  <button class="accordion__button">
                    Ресепшн, барные стойки
                  </button>
                </div>
                <div class="accordion__slot">
                  <div class="accordion__panel">
                    <p class="accordion-panel__content">
                      <a href="kuhni.html">Барные стойки</a>
                    </p>
                    <p class="accordion-panel__content">
                      <a href="prixozhie.html">Ресепшн</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion">
                <div class="accordion__slot_sub">
                  <div>
                    <img src="images/msub1.svg" alt="" />
                  </div>
                  <button class="accordion__button">Мебель для дома</button>
                </div>
                <div class="accordion__slot">
                  <div class="accordion__panel">
                    <p class="accordion-panel__content">
                      <a href="kuhni.html">Кухни</a>
                    </p>
                    <p class="accordion-panel__content">
                      <a href="prixozhie.html">Прихожие</a>
                    </p>
                    <p class="accordion-panel__content">
                      <a href="prixozhie.html">Спальни</a>
                    </p>
                    <p class="accordion-panel__content">
                      <a href="prixozhie.html">Детские</a>
                    </p>
                    <p class="accordion-panel__content">
                      <a href="prixozhie.html">Гостиные</a>
                    </p>
                    <p class="accordion-panel__content">
                      <a href="prixozhie.html">Шкафы и Гардеробные</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="menu_burger_nav_phone">
              <div>
                <i class="fa fa-phone"></i>
              </div>
              <div>
                <a href="87273449900">+7 727 344 99 00</a>
              </div>
            </div>
            <div class="menu_burger_nav_social">
              <div class="menu_burger_nav_social_item">
                <a href="https://www.instagram.com/idiamarket/">
                  <object type="image/svg+xml" data="images/inst.svg"></object>
                </a>
              </div>
              <div class="menu_burger_nav_social_item">
                <a href="https://t.me/Raihan_106">
                  <img src="images/telegran-icon.svg" alt="" />
                </a>
              </div>
              <div class="menu_burger_nav_social_item">
                <a href="https://api.whatsapp.com/send/?phone=77015993322&text&app_absent=0">
                  <img src="images/whatsapp-icon.svg" alt="" />
                </a>
              </div>
              <div class="menu_burger_nav_social_item">
                <a href="">
                  <img src="images/youtube-icon.svg" alt="" />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div class="header_menu_main">
        <div class="main">
          <div class="header_menu_main_wrapper">
            <div class="header_menu_main_start">
              <a href="index.html">
                <img src={mebel} alt="" />
              </a>
            </div>
            <div class="header_menu_main_end">
              <a href="index.html">
                <div class="header_menu_main_item">Главная</div>
              </a>
              <a href="catalog.html">
                <div class="header_menu_main_item">Каталог Товаров</div>
              </a>
              <a href="dostavka.html">
                <div class="header_menu_main_item">Доставка</div>
              </a>
              <a href="portfolio.html">
                <div class="header_menu_main_item">Наши работы</div>
              </a>
              <a href="otzovik.php">
                <div class="header_menu_main_item">Отзывы</div>
              </a>
              <a href="about-us.html">
                <div class="header_menu_main_item">О нас</div>
              </a>
              <a href="contact.html">
                <div class="header_menu_main_item">Контакты</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="header_wrapper_bottom">
        <div class="header_wrapper_bottom_inner">
          <div class="header_wrapper_bottom_item">
            <a href="index.html">
              <div class="header_wrapper_bottom_item_img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8Zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"
                  />
                </svg>
              </div>
              <div class="header_wrapper_bottom_item_text">
                <p>Главная</p>
              </div>
            </a>
          </div>
          <div class="header_wrapper_bottom_item">
            <a href="catalog.html">
              <div class="header_wrapper_bottom_item_img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z"
                  />
                </svg>
              </div>
              <div class="header_wrapper_bottom_item_text">
                <p>Каталог</p>
              </div>
            </a>
          </div>
          <div class="header_wrapper_bottom_item">
            <a href="dostavka.html">
              <div class="header_wrapper_bottom_item_img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M1 12.5v5a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-12a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2H6a3 3 0 0 0-2.4 1.2l-2.4 3.2a.61.61 0 0 0-.07.14l-.06.11a1 1 0 0 0-.07.35Zm16 6a1 1 0 1 1 1 1a1 1 0 0 1-1-1Zm-7-13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11h-.78a3 3 0 0 0-4.44 0H10Zm-2 6H4l1.2-1.6a1 1 0 0 1 .8-.4h2Zm-3 7a1 1 0 1 1 1 1a1 1 0 0 1-1-1Zm-2-5h5v2.78a3 3 0 0 0-4.22.22H3Z"
                  />
                </svg>
              </div>
              <div class="header_wrapper_bottom_item_text">
                <p>Доставка</p>
              </div>
            </a>
          </div>
          <div class="header_wrapper_bottom_item">
            <a href="contact.html">
              <div class="header_wrapper_bottom_item_img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
              </div>
              <div class="header_wrapper_bottom_item_text">
                <p>Контакты</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="header_main_bottom">
        <div class="main">
          <div class="header_main_bottom_inner">
            <div class="header_main_bottom_start">
              <div class="header_menu_main_burger">
                <section class="top-nav">
                  <input id="menu-toggle" type="checkbox" />
                  <label class="menu-button-container" for="menu-toggle">
                    <div class="menu-button"></div>
                  </label>
                  <p class="top-nav_text"> Каталог</p>
                  <ul class="menu">
                    <div class="header_menu_main_burger_wrapper">
                      <div class="header_menu_main_burger_inner">
                        <div class="header_menu_main_burger_item">
                          <h3>Мебель для дома</h3>
                          <div class="header_menu_main_burger_content">
                            <div class="header_menu_main_burger_link">
                              <a href="kuhni.html">Кухни</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="prixozhie.html">Прихожие</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="spalni.html">Спальни</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="detskie.html">Детские</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="gostinye.html">Гостиные</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="shkafy.html">
                                Купе, Шкафы и Гардеробные
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="header_menu_main_burger_item">
                          <h3>Оборудование для аптек</h3>
                          <div class="header_menu_main_burger_content">
                            <div class="header_menu_main_burger_link">
                              <a href="megapolis-apteka.html">
                                Мебель для аптеки Мегаполис
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="green-apteka.html">
                                Оборудование для аптеки Грин
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="massiv-apteka.html">
                                Оборудование для аптеки Массив
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="glianec-apteka.html">
                                Оборудование для аптеки Глянец
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="modern-apteka.html">
                                Оборудование для аптеки Модерн
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="premium-apteka.html">
                                Оборудование для аптеки Премиум
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="header_menu_main_burger_item">
                          <h3>Офисная мебель</h3>
                          <div class="header_menu_main_burger_content">
                            <div class="header_menu_main_burger_link">
                              <a href="agat.html">Офисная мебель Агат</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="akkord.html">Офисная мебель Аккорд</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="aksioma.html">Офисная мебель Аксиома</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="blic.html">Офисная мебель Блиц</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="format.html">Офисная мебель Формат</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="gamma.html">Офисная мебель Гамма</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="norton.html">Офисная мебель Нортон</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="prego.html">Офисная мебель Прего</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="smart.html">Офисная мебель Смарт</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="spektr.html">Офисная мебель Спектр</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="status.html">Офисная мебель Статус</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="tandem.html">Офисная мебель Тандем</a>
                            </div>
                          </div>
                        </div>
                        <div class="header_menu_main_burger_item">
                          <h3>Мебель для бутика</h3>
                          <div class="header_menu_main_burger_content">
                            <div class="header_menu_main_burger_link">
                              <a href="odejda.html">Одежда и аксессуары</a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="accessories.html">
                                Аксессуары, Парфюмерия, Косметика
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="jeweler.html">
                                Ювелирные изделия и бижутерия
                              </a>
                            </div>
                            <div class="header_menu_main_burger_link">
                              <a href="obuv.html">Обувь и аксессуары</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </section>
              </div>
            </div>
            <div class="header_main_bottom_center">
              <div class="searchLogParent searchLogParentFeatured">
                <div class="search_log">
                  <div class="sample eight search-box">
                    <div class="search_log_inner">
                      <div class="search_log_icon search-btn search-btn2">
                      {search}
                      </div>
                      <input
                        type="text"
                        name=""
                        autocomplete="off"
                        id="txtSearch"
                        placeholder="Введите запрос..."
                        class="sampleSearch search-txt"
                      />
                      <input
                        type="text"
                        name=""
                        autocomplete="off"
                        id="txtSearch2"
                        placeholder="Введите запрос..."
                        class="sampleSearch sampleSearch2 search-txt"
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        class="btn btn-search search-btn search-btn2"
                      >
                  {arrowRight}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header_main_bottom_end">
                <a>
                  <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div class="coccoc-alo-ph-circle"></div>
                    <div class="coccoc-alo-ph-circle-fill"></div>
                    <div class="coccoc-alo-ph-img-circle"></div>
                  </div>
                </a>
                <div class="header_main_bottom_end_phone">
                  <div>
                    <a href="tel:87273449900">+7 (727) 344 99 00</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
