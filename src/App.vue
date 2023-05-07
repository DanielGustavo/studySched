<template>
  <div class="view">
    <router-view />
  </div>

  <MenuBar class="menuBar" />
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: { MenuBar },
};
</script>

<style lang="scss" scoped>
div.view {
  padding: 8px;
  overflow-y: auto;
}
</style>
