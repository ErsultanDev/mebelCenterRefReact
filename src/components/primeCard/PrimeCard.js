import menu11 from '../../images/menu11.png';
import menu1 from '../../images/menu1.png';
import menu2 from '../../images/menu2.png';
import menu22 from '../../images/menu22.png';
import menu3 from '../../images/menu3.png';
import menu33 from '../../images/menu33.png';
import menu4 from '../../images/menu4.png';
import menu44 from '../../images/menu44.png';
import menu5 from '../../images/menu5.png';
import menu55 from '../../images/menu55.png';
import menu6 from '../../images/menu6.png';
import menu66 from '../../images/menu66.png';


const PrimeCard = () => {
  return (
    <>
      <section class="content_prime">
        <div class="content_index">
          <div class="content_cards">
            <div class="content_card _anim-items _anim-no-hide _active">
              <a href="mebel.html">
                <div class="content_card_img">
                  <img
                    class="content_card_img_one"
                    src={menu11}
                    alt=""
                  />
                  <img
                    class="content_card_img_two"
                    src={menu1}
                    alt=""
                  />
                </div>
                <div class="content_card_text">
                  <h4>Мебель для дома</h4>
                </div>
              </a>
            </div>

            <div class="content_card _anim-items _anim-no-hide _active">
              <a href="pharmacy.html">
                <div class="content_card_img">
                  <img
                    class="content_card_img_one"
                    src={menu2}
                    alt=""
                  />
                  <img
                    class="content_card_img_two"
                    src={menu22}
                    alt=""
                  />
                </div>
                <div class="content_card_text">
                  <h4>Оборудование для аптек</h4>
                </div>
              </a>
            </div>
            <div class="content_card _anim-items _anim-no-hide _active">
              <a href="steklo.html">
                <div class="content_card_img">
                  <img
                    class="content_card_img_one"
                    src={menu3}
                    alt=""
                  />
                  <img
                    class="content_card_img_two"
                    src={menu33}
                    alt=""
                  />
                </div>
                <div class="content_card_text">
                  <h4>Стеклянные витрины</h4>
                </div>
              </a>
            </div>
            <div class="content_card _anim-items _anim-no-hide _active">
              <a href="ofisnaya-mebel.html">
                <div class="content_card_img">
                  <img
                    class="content_card_img_one"
                    src={menu44}
                    alt=""
                  />
                  <img
                    class="content_card_img_two"
                    src={menu4}
                    alt=""
                  />
                </div>
                <div class="content_card_text">
                  <h4>Офисная мебель</h4>
                </div>
              </a>
            </div>
            <div class="content_card _anim-items _anim-no-hide _active">
              <a href="mebel-butik.html">
                <div class="content_card_img">
                  <img
                    class="content_card_img_one"
                    src={menu55}
                    alt=""
                  />
                  <img
                    class="content_card_img_two"
                    src={menu5}
                    alt=""
                  />
                </div>
                <div class="content_card_text">
                  <h4>Мебель для бутика</h4>
                </div>
              </a>
            </div>
            <div class="content_card _anim-items _anim-no-hide _active">
              <a href="resepshn.html">
                <div class="content_card_img">
                  <img
                    class="content_card_img_one"
                    src={menu6}
                    alt=""
                  />
                  <img
                    class="content_card_img_two"
                    src={menu66}
                    alt=""
                  />
                </div>
                <div class="content_card_text">
                  <h4>Ресепш, барные стойки</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimeCard;
