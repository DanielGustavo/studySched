<template>
  <li class="container">
    <button>
      <vue-feather type="plus" />
    </button>

    <p>add topic</p>
  </li>
</template>

<script>
export default {
  name: 'AddTopicButton',
};
</script>

<style lang="scss" scoped>
li.container {
  background: $white;
  border-radius: 10px;

  width: 150px;
  max-width: 150px;
  min-width: 150px;

  height: 173px;
  max-height: 173px;
  min-height: 173px;

  box-sizing: border-box;
  padding: 16px;

  color: $black;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 3px dashed $black;
  transition: 200ms;

  &:hover {
    background: rgba($black, 0.1);
    cursor: pointer;
  }

  &:active {
    transition: 0ms;
    background: rgba($black, 0.4);
    cursor: pointer;
  }

  p {
    text-transform: capitalize;
  }

  button {
    border-radius: 8px;
    background-color: $black;
    color: $white;
    padding: 8px;
    margin-bottom: 8px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba($black, 0.8);
    }

    &:active {
      background: $black;
    }
  }
}
</style>
