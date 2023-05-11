<template>
  <button class="container" v-bind="{ ...$attrs }"><slot /></button>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
button.container {
  text-transform: capitalize;

  border: none;
  border-radius: 5px;
  padding: 10px;

  background-color: $primary;
  color: $white;

  transition: 200ms;

  &:hover {
    background: rgba($primary, 0.8);
  }

  &:active {
    background: darken($primary, 10);
  }
}

button.secondary {
  background-color: $error;
  color: $white;

  transition: 200ms;

  &:hover {
    background: rgba($error, 0.8);
  }

  &:active {
    background: darken($error, 10);
  }
}
</style>
