<template>
  <Card class="container" :title="topic?.title" icon="book">
    <Badge :title="topic?.subject" class="subjectBadge small">{{
      topic?.subject
    }}</Badge>
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
</style>
