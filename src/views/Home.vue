<template>
  <TopicsSection
    class="topicsSection"
    title="to-do"
    :date="date"
    :topics="topics"
    addeable
  />

  <TopicsSection class="topicsSection" title="in progress" :date="date" />

  <TopicsSection class="topicsSection" title="done" :date="date" />
</template>

<script>
import getTopics from '../usecases/getTopics';

import TopicsSection from '../components/TopicsSection.vue';

export default {
  name: 'Home',
  components: {
    TopicsSection,
  },
  data() {
    return {
      date: new Date().getTime(),
      topics: [],
    };
  },
  mounted() {
    this.topics = getTopics({ day: this.date });
  },
};
</script>

<style lang="scss" scoped>
.topicsSection + .topicsSection {
  margin-top: 24px;
}
</style>
