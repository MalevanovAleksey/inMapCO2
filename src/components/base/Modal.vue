<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <template>
        <div class="modal-wrapper" v-if="visible">
          <div class="modal">
            <button class="modal__close-btn" @click="close">&times;</button>
            <div class="modal__content"></div>
          </div>
        </div>
      </template>
      <button class="close" @click="$emit('close')">&times;</button>
      <slot />
      <h2>Уровни загрязнения</h2>
      <p>
        Уровень концентрации частиц PM2.5 и PM10 в воздухе:
        {{ "pollutionLevel" }}
      </p>
      <p>
        Уровень концентрации окиси азота (NOx) и окиси углерода (CO):
        {{ "airQuality" }}
      </p>
      <p>
        Уровень концентрации сероводорода (H2S) и аммиака (NH3):
        {{ "airQuality" }}
      </p>
      <p>
        Уровень концентрации озона (O3) и диоксида серы (SO2):
        {{ "airQuality" }}
      </p>
      <p>
        Индекс качества воздуха (AQI) и его значение на данный момент:
        {{ "airQuality" }}
      </p>
      <p>
        Видимость и погодные условия, которые могут влиять на концентрацию
        загрязнений в воздухе.: {{ "airQuality" }}
      </p>

      <!--     Общее количество выбросов CO2 в атмосферу.
    Предполагаемое влияние на климат.
    Рекомендации по действиям в случае таких ситуаций.
    Информация о текущем уровне загрязнения воздуха в районе лесного пожара и его влияние на здоровье людей и окружающей среды.
    Сведения о том, какие группы населения подвержены большему риску при вдыхании загрязненного воздуха. -->

      <h2>Прочие графики</h2>

      <ChartGpaph />
    </div>
  </div>
</template>

<script>
import ChartGpaph from "../Custom/ChartGpaph.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: ["value"],
  components: {
    ChartGpaph,
  },
  computed: {
    isModalVisible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  max-width: 800px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
  height: 80%;
  width: 100%;
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
</style>
