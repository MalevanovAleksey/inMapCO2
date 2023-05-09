<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="btn" @click="onClick">{{ title }}</button>
</template>

<script>
export default {
  props: { title: String, onClick: Function },
  computed: {
    currentChannelId() {
      return this.$store.state.currentChannel?.id;
    },
  },
  methods: {
    getChannelData(channel) {
      this.$store.dispatch("changeCurrentChannel", channel);
    },
  },
};
</script>

<style lang="scss">
.btn {
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(
    150deg,
    #25abdf,
    #3fe396
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 10px 11px 31px 18px rgba(63, 225, 152, 0.2);
}
</style>
