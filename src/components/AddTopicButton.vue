<template>
  <AddCardButton title="add topic" @click="goToTopicPage" />
</template>

<script>
import AddCardButton from './AddCardButton.vue';

export default {
  name: 'AddTopicButton',
  props: {
    url: String,
  },
  methods: {
    goToTopicPage() {
      this.$router.push(this?.url ?? '/topic');
    },
  },
  components: { AddCardButton },
};
</script>
