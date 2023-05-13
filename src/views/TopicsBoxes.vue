<template>
  <div class="container">
    <TopicsBoxesList :topicsBoxes="topicsBoxes" />
  </div>
</template>

<script>
import TopicsBoxesList from '../components/TopicsBoxesList.vue';

import getTopicsBoxes from '../usecases/getTopicsBoxes';

export default {
  name: 'TopicsBoxes',
  data() {
    return {
      topicsBoxes: [],
    };
  },
  mounted() {
    this.topicsBoxes = getTopicsBoxes();
  },
  components: { TopicsBoxesList },
};
</script>

<style lang="scss" scoped>
div.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
