<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close" @click="$emit('close')">&times;</button>
      <h2 style="text-align: center">Добавить точку загрязнения</h2>
      <swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
      >
        <swiper-slide>
          <div class="column-center" style="height: 350px">
            <h2>Объем выброса в м³</h2>
            <div class="column">
              <label for="">Координаты</label>
              <Input placeholder="51.5302, 45.9535" v-model="coordsInput" />
              <!-- <div>{{ coordsInput }}</div> -->
            </div>

            <div class="column mt-10">
              <label for="">Площадь источника выброса в м²</label>
              <Input placeholder="100" v-model="area" />
            </div>

            <div class="column mt-10">
              <label for="">Высота источника выброса в м</label>
              <Input placeholder="5" v-model="height" />
            </div>

            <div class="column mt-10">
              <label for="">Удельный выброс</label>
              <Input placeholder="0.01" v-model="emissions" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="column-center">
            <h2>Скорость потока выбросов</h2>
            <div class="column"></div>
            <label for="">скорость воздуха в м/с</label>
            <Input placeholder="2" v-model="velocity" />
            <div class="column mt-10"></div>
            <label for="">площадь сечения потока выбросов в м²</label>
            <Input placeholder="10" v-model="areaFlow" />
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="column-center">
            <h2>Концентрация выбросов в атмосфере:</h2>

            <div class="column mt-10">
              <label for="">скорость воздуха в м/с</label>
              <Input placeholder="2" v-model="velocity" />
            </div>

            <div class="column mt-10">
              <label for="">площадь сечения потока выбросов в м²</label>
              <Input placeholder="10" v-model="area" />
            </div>

            <div class="column mt-10">
              <label for="">атмосферное давление в Па</label>
              <Input placeholder="101325" v-model="pressure" />
            </div>

            <div class="column mt-10">
              <label for="">коэффициент диффузии в м²/с</label>
              <Input placeholder="0.2" v-model="diffusionCoefficient" />
            </div>

            <div class="column mt-10">
              <label for="">время, прошедшее с момента выброса в с</label>
              <Input placeholder="600" v-model="time" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="btn-block">
        <div class="swiper-button-prev">Назад</div>
        <div class="swiper-button-next">Далее</div>
      </div>

      <Button
        class="add-marker"
        title="Добавить маркер"
        :onClick="addMarker"
      ></Button>
    </div>
  </div>
</template>

<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Button from "../base/Button.vue";
import Input from "../base/Input.vue";

// import swiper module styles
import "swiper/css";
import "swiper/css/navigation";
// more module style...
import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Button,
    Input,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      coordsInput: "51.5302, 45.9535",
      //volume = area * height * emissions;
      volume: null, // V
      area: "100", // A
      height: "5", // H
      emissions: "0.01", // E

      //flowRate = velocity * areaFlow;
      flowRate: null, // Q
      velocity: 2, // u
      areaFlow: 10, // A

      //concentration = (flowRate / (velocity * area)) * (pressure / diffusionCoefficient) * (1 - Math.exp(-diffusionCoefficient * time));
      concentration: null, // C
      pressure: 101325, // P
      diffusionCoefficient: 0.2, // R
      time: 600, // t
    };
  },
  methods: {
    addMarker() {
      axios
        .post("http://localhost:3000/markers", {
          coords: [51.5302, 45.9535],
          volume: null,
          flowRate: null,
          concentration: null,
          iconType: 1,
        })
        .then((response) => {
          this.$store.dispatch("changeMarkers", [
            ...this.$store.state.markers,
            response.data,
          ]);
        });

      this.calculateFormulas();
      console.log(this.volume, this.flowRate, this.concentration);
      console.log(-this.diffusionCoefficient);
      this.$emit("close");
    },

    calculateFormulas() {
      this.volume = this.area * this.height * this.emissions;
      this.flowRate = this.velocity * this.areaFlow;
      this.concentration =
        ((this.flowRate / (this.velocity * this.areaFlow)) *
          (this.pressure / this.diffusionCoefficient) *
          (1 - Math.exp(-this.diffusionCoefficient * this.time))) /
        1000;
    },
  },
};
</script>

<style lang="scss">
.column {
  display: flex;
  flex-direction: column;
  &-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.mt-10 {
  margin-top: 10px;
}
.swiper {
  height: 100%;
}
.modal {
  color: black;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  min-height: 600px;
  width: 550px;
}

.btn-block {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  right: 50px;
  top: 545px;
}

.swiper-button-prev,
.swiper-button-next {
  position: static;
  border: 1px solid blue;
  width: 100px;
  border-radius: 10px;

  &::after {
    content: "";
  }
}

.swiper-button-prev {
  margin-right: 20px;
}

.swiper-button-prev {
  left: 20px;
}

.swiper-button-next {
  right: 20px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
}
.add-marker {
  position: absolute;
  top: 513px;
}
.input {
  height: 20px;
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
