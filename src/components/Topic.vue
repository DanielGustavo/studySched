<template>
  <li class="container">
    <header>
      <div class="icon">
        <vue-feather type="book" />
      </div>

      <p :title="topic?.title">{{ topic?.title }}</p>
    </header>

    <Badge :title="topic?.subject" class="subjectBadge small">{{
      topic?.subject
    }}</Badge>
  </li>
</template>

<script>
import Badge from './Badge.vue';

export default {
  name: 'Topic',
  props: {
    topic: Object,
  },
  components: { Badge },
};
</script>

<style lang="scss" scoped>
li.container {
  background-color: $black;
  border-radius: 10px;
  width: 150px;
  max-width: 150px;
  min-width: 150px;

  box-sizing: border-box;
  padding: 16px;

  color: $white;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  header {
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      width: 100%;

      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 2.6rem;
      line-height: 1.3rem;
    }
  }

  .icon {
    border-radius: 10px;
    background-color: $white;
    color: $black;
    padding: 16px;
    margin-bottom: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .subjectBadge {
    background-color: $secondary;
    color: $black;
  }
}
</style>
