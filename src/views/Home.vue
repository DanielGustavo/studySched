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

import usefiltersStore from '../stores/filtersStore';

export default {
  name: 'Home',
  components: {
    TopicsSection,
  },
  data() {
    return {
      date: undefined,
      topics: [],
      filtersStore: undefined,
    };
  },
  created() {
    this.filtersStore = usefiltersStore();

    this.date = this.filtersStore.date ?? new Date().getTime();

    this.filtersStore.$subscribe((_, state) => {
      this.date = state.date ?? this.date;
    });
  },
  watch: {
    date(newDate) {
      this.topics = getTopics({ day: newDate });
    },
  },
};
</script>

<style lang="scss" scoped>
.topicsSection + .topicsSection {
  margin-top: 24px;
}
</style>
