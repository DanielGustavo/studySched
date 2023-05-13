<template>
  <ul class="container" v-if="topics.length > 0 || addeable">
    <li v-if="addeable">
      <AddTopicButton class="topic" :url="url" />
    </li>

    <li v-for="(topic, index) of topics" :key="index">
      <Topic :topic="topic" class="topic" :url="url" />
    </li>
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
    addeable: [Boolean, String],
  },
  computed: {
    url() {
      return typeof this.addeable === 'string' ? this.addeable : undefined;
    },
  },
  components: { AddTopicButton, Topic },
};
</script>

<style lang="scss" scoped>
ul.container {
  display: flex;
  overflow-x: auto;
  list-style: none;

  .topic {
    height: 100%;
  }

  li + li {
    margin-left: 8px;
  }

  .emptyMessage {
    color: $black75;
  }
}
</style>
