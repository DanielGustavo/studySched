<template>
  <div class="view">
    <Home />
  </div>

  <MenuBar class="menuBar" />
</template>

<script>
import Home from './views/Home.vue';

import MenuBar from './components/MenuBar.vue';

export default {
  name: 'App',
  components: { Home, MenuBar },
};
</script>

<style lang="scss" scoped>
div.view {
  padding: 8px;
  overflow-y: auto;
}
</style>
