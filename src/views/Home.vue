<template>
  <TopicsSection
    class="topicsSection"
    title="to-do"
    :date="Date.now()"
    :topics="topics"
    addeable
  />

  <TopicsSection class="topicsSection" title="in progress" :date="Date.now()" />

  <TopicsSection class="topicsSection" title="done" :date="Date.now()" />
</template>

<script>
import TopicsSection from '../components/TopicsSection.vue';

const topics = [
  {
    title: 'Analise combinatoria',
    subject: 'Matematica',
    importance: 'low',
  },
  {
    title: 'Genetica GeneticaGeneticaGeneticaGenetica',
    subject: 'Biologia',
    importance: 'medium',
  },
  {
    title: 'Genetica',
    subject: 'Biologia',
    importance: 'high',
  },
];

export default {
  name: 'Home',
  components: {
    TopicsSection,
  },
  data() {
    return {
      topics,
    };
  },
};
</script>

<style lang="scss" scoped>
.topicsSection + .topicsSection {
  margin-top: 24px;
}
</style>
