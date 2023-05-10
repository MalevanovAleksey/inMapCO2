<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input class="input" :placeholder="placeholder" @click="onClick" />
</template>

<script>
export default {
  props: { title: String, onClick: Function, placeholder: String },
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
.input {
  height: 20px;
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
