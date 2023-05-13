<template>
  <button class="container" @click.prevent="goToTopicPage">
    <Card :title="topic?.title" icon="book">
      <Badge
        :title="topic?.subject"
        :class="{
          subjectBadge: true,
          small: true,
          low: topic.importance === 0,
          medium: topic.importance === 1,
          high: topic.importance === 2,
        }"
        >{{ topic?.subject || '???' }}</Badge
      >
    </Card>
  </button>
</template>

<script>
import Badge from './Badge.vue';
import Card from './Card.vue';

export default {
  name: 'Topic',
  props: {
    topic: Object,
    url: {
      type: String,
      default: '/topic',
    },
  },
  methods: {
    goToTopicPage() {
      const endsWithBar = /\/$/g;
      const shouldAddBarInBaseUrl = !endsWithBar.test(this.url);

      const baseUrl = `${this.$props.url}${shouldAddBarInBaseUrl ? '/' : ''}`;

      this.$router.push(`${baseUrl}${this.topic.id}`);
    },
  },
  components: { Badge, Card },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
}

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
