<template>
  <div class="container">
    <TopicsBoxesList :topicsBoxes="topicsBoxes" />
  </div>
</template>

<script>
import TopicsBoxesList from '../components/TopicsBoxesList.vue';

export default {
  name: 'TopicsBoxes',
  data() {
    return {
      topicsBoxes: [],
    };
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
