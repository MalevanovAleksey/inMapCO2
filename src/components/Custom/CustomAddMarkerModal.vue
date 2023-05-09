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
          <div class="column">
            <h2>Объем выброса в м³</h2>
            <label for="">Координаты</label>
            <input v-model="coordsInput" />

            <label for="">площадь источника выброса в м²</label>
            <input v-model="area" />

            <label for="">высота источника выброса в м</label>
            <input v-model="height" />

            <label for=""
              >удельный выброс (количество CO2, выбрасываемое на единицу времени
              на единицу площади)</label
            >
            <input v-model="emissions" />
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="column">
            <h2>Скорость потока выбросов</h2>
            <label for="">скорость воздуха в м/с</label>
            <input v-model="velocity" />

            <label for="">площадь сечения потока выбросов в м²</label>
            <input v-model="areaFlow" />
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="column">
            <h2>Концентрация выбросов в атмосфере:</h2>
            <label for="">скорость потока выбросов в м³/с</label>
            <input v-model="flowRate" />

            <label for="">скорость воздуха в м/с</label>
            <input v-model="velocity" />

            <label for="">площадь сечения потока выбросов в м²</label>
            <input v-model="area" />

            <label for="">атмосферное давление в Па</label>
            <input v-model="pressure" />

            <label for="">коэффициент диффузии в м²/с</label>
            <input v-model="diffusionCoefficient" />

            <label for="">время, прошедшее с момента выброса в с</label>
            <input v-model="time" />
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

// import swiper module styles
import "swiper/css";
import "swiper/css/navigation";
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide,
    Button,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      coordsInput: "",
      //volume = area * height * emissions;
      volume: null, // V
      area: null, // A
      height: null, // H
      emissions: null, // E

      //flowRate = velocity * area;
      flowRate: null, // Q
      velocity: null, // u
      areaFlow: null, // A

      //concentration = (flowRate / (velocity * area)) * (pressure / diffusionCoefficient) * (1 - Math.exp(-diffusionCoefficient * time));
      concentration: null, // C
      pressure: null, // P
      diffusionCoefficient: null, // R
      time: null, // t
    };
  },
  methods: {
    addMarker() {
      this.$store.dispatch("changeMarkers", [
        ...this.$store.state.markers,
        { coords: this.inputValue.split(",").map(parseFloat) }, //51.53, 45.9535
      ]);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.column {
  display: flex;
  flex-direction: column;
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
  width: 800px;
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
</style>
