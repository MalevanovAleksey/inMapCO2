<template>
  <yandex-map style="width: 100%; height: 90vh" v-if="true" :coords="coords">
    <ymap-marker
      :coords="[51.55472204849689, 45.94214317675754]"
      @click.prevent="handleClickMarker([51.5309, 45.9535])"
      :options="{
        iconLayout: 'default#image',
        iconImageHref: require('@/assets/markers/fiol.png'),
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16],
      }"
    />

    <ymap-marker
      :coords="[51.530316859714716, 46.02110741015518]"
      @click.prevent="handleClickMarker([51.5309, 45.9535])"
      :options="{
        iconLayout: 'default#image',
        iconImageHref: require('@/assets/markers/1.gif'),
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16],
      }"
    />

    <ymap-marker
      :coords="[51.432, 45.9535]"
      @click.prevent="handleClickMarker([51.432, 45.9535])"
      :options="{
        iconLayout: 'default#image',
        iconImageHref: 'https://www.iqair.com/assets/img/map-clusterer/c1.svg',
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16],
      }"
    />

    <ymap-marker
      :coords="[51.540166150855185, 46.06093284960848]"
      @click.prevent="
        handleClickMarker([51.540166150855185, 46.06093284960848])
      "
      :options="{
        iconLayout: 'default#image',
        iconImageHref: require('@/assets/markers/yellow.png'),
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16],
      }"
    />

    <template v-for="marker in $store.state.markers" :key="marker">
      <ymap-marker
        :coords="marker.coords"
        :options="{
          iconLayout: 'default#image',
          iconImageHref: `https://www.iqair.com/assets/img/map-clusterer/c${marker.iconType}.svg`,
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16],
        }"
        @click.prevent="handleClickMarker(marker.coords)"
      />
    </template>
  </yandex-map>
  <Modal v-if="isModalVisible" @close="closeModal"> </Modal>
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
