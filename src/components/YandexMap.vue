<template>
  <yandex-map style="width: 100%; height: 90vh" v-if="true" :coords="coords">
    <ymap-marker
      :coords="[51.5309, 45.9535]"
      @click.prevent="handleClickMarker([51.5309, 45.9535])"
      :options="{
        iconLayout: 'default#image',
        iconImageHref: require('@/assets/logo.png'),
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16],
      }"
    />

    <template v-for="marker in $store.state.markers" :key="marker">
      <ymap-marker
        :coords="marker.coords"
        @click.prevent="handleClickMarker(marker.coords)"
      />
    </template>
  </yandex-map>
  <Modal v-if="isModalVisible" @close="closeModal">
    <!-- <p>{{ 'salam da' }}</p> -->
  </Modal>
</template>

<script>
import Modal from "./base/Modal.vue";

export default {
  name: "MyMap",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      markerInfo: null,
      coords: [51.5308, 45.9535], //51.53652644485799, 46.023510669433556
    };
  },
  methods: {
    handleClickMarker(coords) {
      this.coords = coords;
      this.showModal();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.markerInfo = null;
      this.isModalVisible = false;
    },
  },
};
</script>
