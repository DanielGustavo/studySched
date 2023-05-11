<template>
  <section class="container">
    <header>
      <h1 class="h3">{{ title }}</h1>
      <Badge v-if="dateTitle">{{ dateTitle }}</Badge>
    </header>

    <TopicsList :topics="topics" :addeable="addeable" />
  </section>
</template>

<script>
import { isToday, isThisYear, format } from 'date-fns';

import Badge from './Badge.vue';
import TopicsList from './TopicsList.vue';

export default {
  name: 'TopicsSection',
  components: {
    Badge,
    TopicsList,
  },
  props: {
    topics: Array,
    title: String,
    date: Number,
    addeable: [Boolean, String],
  },
  computed: {
    dateTitle() {
      if (this.date === undefined) return undefined;

      const formattedDate = isThisYear(this.date)
        ? format(this.date, 'dd/MMM')
        : format(this.date, 'dd/MM/yyyy');

      return isToday(this.date) ? 'Today' : formattedDate;
    },
  },
};
</script>

<style lang="scss" scoped>
section.container {
  h1 {
    color: $black;
    font-weight: 500;
    text-transform: capitalize;
  }

  header {
    display: flex;
    margin-bottom: 8px;

    h1 {
      margin-right: 8px;
    }
  }
}
</style>
