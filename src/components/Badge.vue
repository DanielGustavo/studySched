<template>
  <span class="container">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge',
};
</script>

<style lang="scss" scoped>
span.container {
  background-color: $black;
  color: $white;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  font-weight: 500;
}
</style>
