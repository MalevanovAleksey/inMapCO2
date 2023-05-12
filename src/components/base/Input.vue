<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input class="input" :value="modelValue" :placeholder="placeholder" @click="onClick" @input="onInput" />
</template>

<script>
export default {
  props: { title: String, onClick: Function, placeholder: String, modelValue: String },
  computed: {
    currentChannelId() {
      return this.$store.state.currentChannel?.id;
    },
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    onClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
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