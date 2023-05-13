<template>
  <ul class="container">
    <li>
      <AddTopicsBoxButton class="topicsBox" />
    </li>

    <li v-for="(topicsBox, index) of topicsBoxes" :key="index">
      <TopicsBox :topicsBox="topicsBox" class="topicsBox" />
    </li>
  </ul>
</template>

<script>
import AddTopicsBoxButton from './AddTopicsBoxButton.vue';
import TopicsBox from './TopicsBox.vue';

export default {
  name: 'TopicsBoxesList',
  props: {
    topicsBoxes: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { AddTopicsBoxButton, TopicsBox },
};
</script>

<style lang="scss" scoped>
ul.container {
  display: grid;
  grid-gap: 8px;
  justify-content: space-around;

  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 475px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 790px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: repeat(7, 1fr);
  }

  list-style: none;

  .topicsBox {
    height: 100%;
  }
}
</style>
