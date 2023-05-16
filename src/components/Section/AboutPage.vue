<template>
  <section>
    <div class="topContent flex-container-row">
      <div class="flex-item">
        <p class="padding paddingB font-30">Интерактивная карта InMap</p>
        <p class="paddingP paddingB font-20">
          Интерактивная карта для систем мониторинга на основе беспроводных
          сенсорных сетей.
        </p>
        <p class="paddingP font-20">
          Мы визуализируем и структурием данные , представляя их в интерактивном
          формате с возможностью выбора регионов и городов.
        </p>
      </div>
    </div>

    <div class="center-content flex-container-column white">
      <div class="paddingAll font">
        <p class="paddingB font-30 white">Ключевые параметры</p>
        <p class="font-20 white">
          по которым вы можете изучать статистику в конкретных странах и
          регионах
        </p>
      </div>
      <div class="statistic flex-container-space-around font-24">
        <div class="flex-column-center">
          <img src="../../assets/img/ball.png" />
          <p>Оценка водзуха</p>
          <div class="containerOpis">
            <p class="opis">
              Измерение и визуализация загрязнения воздуха на интерактивной
              карте
            </p>
          </div>
        </div>
        <div class="flex-column-center">
          <img src="../../assets/img/derevo.png" />
          <p class="w-500">Показатель уровня загрязнения атмосферы</p>
          <div class="containerOpis">
            <p class="opis">
              Визуальное отображение качества воздуха на интерактивной карте
            </p>
          </div>
        </div>
        <div class="flex-column-center">
          <img src="../../assets/img/graph.png" />
          <p>Графическое отображение</p>
          <div class="containerOpis">
            <p class="opis">
              Визуальное представление данных о концентрации загрязненного
              воздуха
            </p>
          </div>
        </div>
        <div class="flex-column-center">
          <img src="../../assets/img/map.png" />
          <p>Моделирование выброса</p>
          <div class="containerOpis">
            <p class="opis">
              Симуляция распространения загрязнителей воздуха на интерактивной
              карте
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-content">
      <div class="paddingAll font paddingTop">
        <p class="paddingB font-30">Смотрите актуальную статистику</p>
        <p class="font-24">
          Информация по всем показателям хранится в
          <a href="https://ru.wikipedia.org/wiki/Заглавная_страница"
            >Википедии</a
          >
        </p>
      </div>
      <div class="statistic flex-container-space-around font-24">
        <div class="flex-column-center">
          <img src="../../assets/img/world.png" />
          <a href="worldMap.html">В мире</a>
          <div class="containerOpis">
            <p class="opis">Смотрите и изучайте показатели государств</p>
          </div>
        </div>
        <div class="flex-column-center">
          <img src="../../assets/img/europe.png" />
          <a href="europeMap.html">В Европе</a>
          <div class="containerOpis">
            <p class="opis">
              Ориентируйтесь на карте Европы и сравнивайте информацию
            </p>
          </div>
        </div>
        <div class="flex-column-center">
          <img src="../../assets/img/russia.png" />
          <a href="index.html">В России</a>
          <div class="containerOpis">
            <p class="opis">Портрет каждого региона с детальной информацией</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <bottom class="white">
    <div class="btm paddingAll font paddingTop">
      <p>
        <img src="../../assets/img/location1.png" style="width: 14px" /> Карты и
        данные:
        <a href="https://mapsvg.com/maps/world"
          >https://mapsvg.com/maps/world</a
        >
        <a href="https://mapsvg.com/maps/russia"
          >, https://mapsvg.com/maps/russia</a
        >
      </p>
      <p>
        <img src="../../assets/img/mail.png" style="width: 14px" />
        <a href="gryskova.veronika@gmail.com"
          >Почта: gryskova.veronika@gmail.com
        </a>
      </p>
      <p>
        <img src="../../assets/img/copyright1.png" style="width: 14px" /> 2021
        Грыськова Вероника ЭЖД-19120
      </p>
    </div>
  </bottom>
</template>

<style scoped>
body {
  /*font-family:Arial, Helvetica, sans-serif;*/
  /*background:url(../img/grid.jpg) repeat;*/
  /* background-color: #1e2227;*/
  /*font-family: 'Montserrat', sans-serif;*/
  font-family: "Source Sans Pro", sans-serif;
  height: 100vh;
}
ol,
ul {
  list-style: none;
}

a img {
  border: none;
}

header h1 {
  text-align: center;
  color: white;
}

.containerInfo {
  display: flex;
  flex-direction: row;
}

.w-500 {
  width: 450px;
}

.headContent {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;

  background: #1b2534;
  align-items: center;
  font-size: 20px;
  width: 100%;
}

.logo {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}

a {
  text-decoration: none;
}

.white {
  color: white;
}

.logo a {
  color: white;
}

.contentMenu a {
  color: white;
}

.contentMenu a:hover {
  color: #0ec7cf;
}
.contentMenu {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 600px;
}

.dropbtn {
  color: white;
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  border: none;
  cursor: pointer;
  background: #1b2534;
}

.dropbtn:hover,
.dropbtn:focus {
  color: #0ec7cf;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -25px;
  background-color: white;
  border-radius: 5px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 180px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-family: "Montserrat", sans-serif;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

.topContent {
  width: 100%;
  height: 45vh;
  background-image: url(../../assets/img/aboutFon1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
}

.flex-container-row {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: center;
  width: 100%;
}

.flex-item {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  width: 45%;
  margin-bottom: 7%;
}

.padding {
  padding-left: 20px;
  padding-right: 20px;
}

.paddingP {
  padding-left: 20px;
  padding-right: 20px;
}

.paddingB {
  padding-bottom: 10px;
}

.font {
  font-size: 18px;
}

.center-content {
  width: 100%;
  height: 65vh;
}

.flex-container-column {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-top: 2%;
}

.statistic {
  width: 100%;
}

.paddingAll {
  padding: 0vh 5vh 10vh 17vh;
}

.flex-container-space-around {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.flex-column-center {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 20%;
}

.statistic img {
  width: 150px;
  height: 150px;
}
.font-20 {
  font-size: 20px;
}

.font-24 {
  font-size: 24px;
}

.font-30 {
  font-size: 30px;
}

.opis {
  width: 80%;
  font-size: 20px;
  text-align: center;
}
.containerOpis {
  width: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.bottom-content {
  width: 100%;
  height: 75vh;
  background-image: url(../../assets/img/bottom35.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
}

.bottom-content a {
  text-decoration: underline;
  color: white;
}

.paddingTop {
  padding-top: 50px;
}
</style>
