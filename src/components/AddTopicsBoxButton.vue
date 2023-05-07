<template>
  <AddCardButton title="add topics box" @click="goToTopicsBoxPage" />
</template>

<script>
import AddCardButton from './AddCardButton.vue';

export default {
  name: 'AddTopicsBoxButton',
  methods: {
    goToTopicsBoxPage() {
      this.$router.push('/topicsBox');
    },
  },
  components: { AddCardButton },
};
</script>
