<template>
  <button @click.prevent="goToTopicsBox">
    <Card :title="topicsBox?.title" icon="archive" class="card" />
  </button>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Topic',
  props: {
    topicsBox: Object,
  },
  methods: {
    goToTopicsBox() {
      this.$router.push(`/topicsBox/${this.$props.topicsBox?.id}`);
    },
  },
  components: { Card },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
}

.card {
  justify-content: center !important;
}
</style>
