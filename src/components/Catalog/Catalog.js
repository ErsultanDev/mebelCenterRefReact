import pageArrow from "../../images/pageArrow.png";
import catalog1 from "../../images/catalog4.png";
import catalog2 from "../../images/catalog66.png";
import catalog3 from "../../images/catalog99.png";
import catalog4 from "../../images/catalog5.png";
import catalog5 from "../../images/catalog777.png";
import catalog6 from "../../images/catalog9999.png";
const Catalog = () => {
  return (
    <section class="page_catalog">
      <div class="page_catalog_wrapper">
        <h2>Каталог</h2>
        <div class="page_catalog_inner">
          <div class="page_catalog_cards">
            <div class="page_catalog_item">
              <a href="steklo.html">
                <div class="page_catalog_item_img_wrap">
                  <div class="page_catalog_item_img btn-hover-shine">
                    <img src={catalog1} alt="" />
                  </div>
                </div>
                <div class="page_catalog_btn">
                  <div class="page_catalog_btn_inner">
                    <div class="page_catalog_btn_start">Стеклянные витрины</div>
                    <div class="page_catalog_btn_center">
                      <img src={pageArrow} alt="" />
                    </div>
                    <div class="page_catalog_btn_end"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="page_catalog_item">
              <a href="mebel-butik.html">
                <div class="page_catalog_item_img_wrap">
                  <div class="page_catalog_item_img btn-hover-shine">
                    <img src={catalog2} alt="" />
                  </div>
                </div>
                <div class="page_catalog_btn">
                  <div class="page_catalog_btn_inner">
                    <div class="page_catalog_btn_start">Мебель для бутика</div>
                    <div class="page_catalog_btn_center">
                      <img src={pageArrow} alt="" />
                    </div>
                    <div class="page_catalog_btn_end"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="page_catalog_item">
              <a href="pharmacy.html">
                <div class="page_catalog_item_img_wrap">
                  <div class="page_catalog_item_img btn-hover-shine">
                    <img src={catalog3} alt="" />
                  </div>
                </div>
                <div class="page_catalog_btn">
                  <div class="page_catalog_btn_inner">
                    <div class="page_catalog_btn_start">
                      Оборудование для аптек
                    </div>
                    <div class="page_catalog_btn_center">
                      <img src={pageArrow} alt="" />
                    </div>
                    <div class="page_catalog_btn_end"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="page_catalog_cards">
            <div class="page_catalog_item">
              <a href="ofisnaya-mebel.html">
                <div class="page_catalog_item_img_wrap">
                  <div class="page_catalog_item_img btn-hover-shine">
                    <img src={catalog4} alt="" />
                  </div>
                </div>
                <div class="page_catalog_btn">
                  <div class="page_catalog_btn_inner">
                    <div class="page_catalog_btn_start">Офисная мебель</div>
                    <div class="page_catalog_btn_center">
                      <img src={pageArrow} alt="" />
                    </div>
                    <div class="page_catalog_btn_end"></div>
                  </div>
                </div>
              </a>
            </div>

            <div class="page_catalog_item">
              <a href="resepshn.html">
                <div class="page_catalog_item_img_wrap">
                  <div class="page_catalog_item_img btn-hover-shine">
                    <img src={catalog5} alt="" />
                  </div>
                </div>
                <div class="page_catalog_btn">
                  <div class="page_catalog_btn_inner">
                    <div class="page_catalog_btn_start">
                      Ресепшн, барные стойки
                    </div>
                    <div class="page_catalog_btn_center">
                      <img src={pageArrow} alt="" />
                    </div>
                    <div class="page_catalog_btn_end"></div>
                  </div>
                </div>
              </a>
            </div>
            <div class="page_catalog_item">
              <a href="mebel.html">
                <div class="page_catalog_item_img_wrap">
                  <div class="btn-hover-shine page_catalog_item_img">
                    <img  src={catalog6} alt="" />
                  </div>
                </div>
                <div class="page_catalog_btn">
                  <div class="page_catalog_btn_inner">
                    <div class="page_catalog_btn_start">Мебель для дома</div>
                    <div class="page_catalog_btn_center">
                      <img src={pageArrow} alt="" />
                    </div>
                    <div class="page_catalog_btn_end"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
