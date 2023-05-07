<template>
  <label class="container">
    {{ label }}
    <input v-bind="{ ...$attrs }" />
    <slot />
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
label.container {
  display: flex;
  flex-direction: column;

  color: $black90;
  font-weight: 500;
  text-transform: capitalize;

  input {
    border: none;
    border-radius: 5px;

    padding: 10px;
    background-color: rgba($black25, 0.4);
    color: $black;

    &::placeholder {
      color: $black75;
    }
  }
}
</style>
