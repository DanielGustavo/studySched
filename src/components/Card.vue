<template>
  <div class="container">
    <header>
      <div class="icon">
        <vue-feather :type="icon" />
      </div>

      <p :title="title">{{ title }}</p>
    </header>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'icon'],
};
</script>

<style lang="scss" scoped>
div.container {
  background-color: $black;
  border-radius: 10px;

  width: 150px;
  max-width: 150px;
  min-width: 150px;

  height: 173px;
  max-height: 173px;
  min-height: 173px;

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
}
</style>
