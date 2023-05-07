<template>
  <Card :title="topicsBox?.title" icon="archive" class="container" />
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Topic',
  props: {
    topicsBox: Object,
  },
  components: { Card },
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: center !important;
}
</style>
