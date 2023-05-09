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
      <h2>Добавить точку загрязнения</h2>
      51.53, 45.9535
      <label for="">Координаты</label>
      <input v-model="inputValue" />

      <div>
        <h2>объем выброса в м³</h2>
        <label for="">Координаты</label>
        <input v-model="inputValue" />

        <label for="">площадь источника выброса в м²</label>
        <input v-model="inputValue" />

        <label for="">высота источника выброса в м</label>
        <input v-model="inputValue" />

        <label for=""
          >удельный выброс (количество CO2, выбрасываемое на единицу времени на
          единицу площади)</label
        >
        <input v-model="inputValue" />
      </div>

      <button @click="addMarker">Добавить маркер</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Modal",
  props: ["value"],
  data() {
    return {
      inputValue: "",
    };
  },
  //   computed: {
  //     isModalVisible: {
  //       get() {
  //         return this.value;
  //       },
  //       set(value) {
  //         this.$emit("input", value);
  //       },
  //     },
  //   },
  methods: {
    addMarker() {
      this.$store.dispatch("changeMarkers", [
        ...this.$store.state.markers,
        { coords: this.inputValue.split(",").map(parseFloat) }, //51.53, 45.9535
      ]);
    },
    closeModal() {
      console.log("closeModal");
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
  color: black;
}

.modal-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  max-width: 800px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
  height: 60%;
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
