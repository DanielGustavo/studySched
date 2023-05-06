<template>
  <ul class="container" v-if="topics.length > 0">
    <AddTopicButton v-if="addeable" class="topic" />

    <Topic
      v-for="(topic, index) of topics"
      :key="index"
      :topic="topic"
      class="topic"
    />
  </ul>

  <p class="emptyMessage" v-else-if="!addeable">You can do it! Let's study.</p>
</template>

<script>
import AddTopicButton from './AddTopicButton.vue';
import Topic from './Topic.vue';

export default {
  name: 'TopicsList',
  props: {
    topics: {
      type: Array,
      default() {
        return [];
      },
    },
    addeable: {
      type: Boolean,
      default: false,
    },
  },
  components: { AddTopicButton, Topic },
};
</script>

<style lang="scss" scoped>
ul.container {
  display: flex;
  overflow-x: auto;

  .topic + .topic {
    margin-left: 8px;
  }

  .emptyMessage {
    color: $black75;
  }
}
</style>
