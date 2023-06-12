<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close" @click="$emit('close')">&times;</button>
      <h2 style="text-align: center">Фильтр маркеров</h2>
      <section>
        <div>
          <Checkbox
            label="Хорошо"
            v-model="checkboxValue[0]"
            id="checkbox-rect1"
            className="circle green"
          />
        </div>
        <div>
          <Checkbox
            label="Средне"
            v-model="checkboxValue[1]"
            id="checkbox-rect2"
            className="circle yellow"
          />
        </div>
        <div>
          <Checkbox
            label="Вредно для уязвимых групп"
            v-model="checkboxValue[2]"
            id="checkbox-rect3"
            className="circle orange"
          />
        </div>
        <div>
          <Checkbox
            label="Вредно"
            v-model="checkboxValue[3]"
            id="checkbox-rect4"
            className="circle red"
          />
        </div>
        <div>
          <Checkbox
            label="Очень вредно"
            v-model="checkboxValue[4]"
            id="checkbox-rect5"
            className="circle purple"
          />
        </div>
        <div>
          <Checkbox
            label="Опасно"
            v-model="checkboxValue[5]"
            id="checkbox-rect6"
            className="circle maroon"
          />
        </div>
      </section>
      <Button
        class="add-marker"
        :value="true"
        title="Применить фильтр"
        :onClick="addMarker"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "../base/Button.vue";
import Checkbox from "../base/Checkbox.vue";
// import PrettyCheckbox from "pretty-checkbox-vue";
// import swiper module styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
// more module style...
// import axios from "axios";
export default {
  components: {
    Button,
    Checkbox,
    // PrettyCheckbox,
  },
  setup() {
    return {};
  },
  data() {
    return {
      checkboxValue: [true, true, true, true, true, true],
    };
  },
  watch: {
    checkboxValue() {
      console.log(this.checkboxValue);
    },
  },
  methods: {
    addMarker() {
      axios.get("http://localhost:3000/markers").then((response) => {
        console.log(response.data);
        const filteredMarkers = response.data.filter(
          (marker) => this.checkboxValue[marker.iconType - 1]
        );
        this.$store.dispatch("changeMarkers", filteredMarkers);
        this.$emit("close");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-marker {
  left: 175px;
}

section {
  padding: 20px;
}
</style>
