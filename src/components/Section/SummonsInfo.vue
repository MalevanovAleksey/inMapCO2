<template>
  <div class="summonsInfo">
    <div class="dateTime__wrapper col">
      <div class="time">{{ localeTime }}</div>
      <div class="dateLocation">
        <div class="date">{{ localeDate }}</div>
        <div class="location">
          <img src="../../assets/icons/location.png" /> <span>Саратов</span>
        </div>
      </div>
    </div>

    <!-- <div>Уровень загрязнения атмосферы: 42</div> -->
    <!-- <div>Индекс качества воздуха: Хорошо</div> -->
    <!-- <div>Главный загрязнитель: PM2.5</div> -->

    <div class="statistics col">
      <div class="title">
        <div class="diamond green"></div>
        <div>Показатели</div>
      </div>
      <ul>
        <li>Уровень загрязнения атмосферы: 42</li>
        <li>Индекс качества воздуха: Хорошо</li>
        <li>Главный загрязнитель: PM2.5</li>
      </ul>
    </div>

    <div class="statistics col">
      <div class="title">
        <div class="diamond green"></div>
        <div>Описание</div>
      </div>
      <div class="description">
        Концентрация PM2.5 в городе Саратов сейчас в 2 раз(а) выше
        рекомендуемого ВОЗ среднегодового значения качества воздуха
      </div>
    </div>

    <div class="reference">
      <div class="title">
        <div class="diamond green"></div>
        Оценка воздуха
      </div>
      <ul>
        <li>
          <div class="circle green"></div>
          <span>Хорошо</span>
        </li>
        <li>
          <div class="circle yellow"></div>
          <span>Средне</span>
        </li>
        <li>
          <div class="circle orange"></div>
          <span>Вредно для уязвимых групп</span>
        </li>
        <li>
          <div class="circle red"></div>
          <span>Вредно</span>
        </li>
        <li>
          <div class="circle purple"></div>
          <span>Очень вредно</span>
        </li>
        <li>
          <div class="circle maroon"></div>
          <span>Опасно</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { geoFindMe } from "@/common/helpers";
export default {
  data: () => ({
    date: Date.now(),
  }),
  components: {},

  computed: {
    localeTime() {
      return new Date(this.date).toLocaleString().split(",")[1];
    },
    localeDate() {
      return new Date(this.date).toLocaleString().split(",")[0];
    },
  },

  mounted() {
    console.log(geoFindMe());
  },
  created() {
    this.intervalId = setInterval(() => (this.date = new Date()), 1000);
  },
  beforeUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  },

  methods: {},
};
</script>

<style lang="scss">
ul {
  list-style: none;
}
.summonsInfo {
  width: 32%;
  color: white;
  height: 91vh;

  .col {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid #50535d;

    .description {
      margin: 20px 0;
      padding-left: 40px;
    }
  }

  .diamond {
    width: 15px;
    height: 15px;
    background: #1eff00;
    margin-top: 5px;
    margin-right: 5px;
    /* Rotate */
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    /* Rotate Origin */
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;

    &.green {
      background: radial-gradient(rgb(255, 255, 255), #1eff00);
      box-shadow: 0px 0px 10px #1eff00;
    }
  }

  .title {
    display: flex;
    align-items: center;
  }

  .dateTime__wrapper {
    .time {
      font-size: 40px;
      padding: 10px 0;
    }

    .dateLocation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 160px;

      .location {
        display: flex;
        align-items: center;
        img {
          width: 20px;
        }
      }
    }
  }

  .statistics {
    padding: 20px 0;
    margin: 0 20px;
    font-size: 20px;
  }

  .reference {
    font-size: 20px;
    padding: 20px 0;
    margin: 0 20px;
    ul li {
      display: flex;
      align-items: center;
      font-size: 20px;
      padding: 10px 0;
    }
  }
}

.circle {
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 10px;
  background-size: cover;

  &.red {
    background-image: url(https://www.iqair.com/assets/img/map-clusterer/c4.svg);
  }

  &.green {
    background-image: url(https://www.iqair.com/assets/img/map-clusterer/c1.svg);
  }

  &.yellow {
    background-image: url(https://www.iqair.com/assets/img/map-clusterer/c2.svg);
  }

  &.orange {
    background-image: url(https://www.iqair.com/assets/img/map-clusterer/c3.svg);
  }

  &.purple {
    background-image: url(https://www.iqair.com/assets/img/map-clusterer/c5.svg);
  }

  &.maroon {
    background-image: url(https://www.iqair.com/assets/img/map-clusterer/c6.svg);
  }
}
</style>
