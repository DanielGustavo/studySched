<template>
  <Card class="container" :title="topic?.title" icon="book">
    <Badge
      :title="topic?.subject"
      :class="{
        subjectBadge: true,
        small: true,
        low: topic.importance === 0,
        medium: topic.importance === 1,
        high: topic.importance === 2,
      }"
      >{{ topic?.subject ?? '???' }}</Badge
    >
  </Card>
</template>

<script>
import Badge from './Badge.vue';
import Card from './Card.vue';

export default {
  name: 'Topic',
  props: {
    topic: Object,
  },
  components: { Badge, Card },
};
</script>

<style lang="scss" scoped>
.subjectBadge {
  background-color: $secondary !important;
  color: $black !important;
}

.subjectBadge.low {
  background-color: $secondary !important;
}

.subjectBadge.medium {
  background-color: $primary !important;
}

.subjectBadge.high {
  background-color: $error !important;
}
</style>
