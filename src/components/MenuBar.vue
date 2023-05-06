<template>
  <div class="container">
    <button
      :class="{ active: activeButton === 'Calendar' }"
      @click="setActiveButton('Calendar')"
    >
      <vue-feather type="calendar" />
    </button>

    <button
      :class="{ active: activeButton === 'Home' }"
      @click="setActiveButton('Home')"
    >
      <vue-feather type="home" />
    </button>

    <button
      :class="{ active: activeButton === 'AddTopic' }"
      @click="setActiveButton('AddTopic')"
    >
      <vue-feather type="plus" />
    </button>

    <button
      :class="{ active: activeButton === 'TopicsBoxes' }"
      @click="setActiveButton('TopicsBoxes')"
    >
      <vue-feather type="archive" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      activeButton: 'Home',
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
    },
  },
};
</script>

<style lang="scss" scoped>
div.container {
  padding: 8px;
  background-color: $black;
  display: flex;
  justify-content: center;

  button {
    border: none;
    border-radius: 10px;
    background-color: $black90;
    color: $white;
    padding: 16px;
  }

  button.active {
    color: $black90;
    background: $white;
  }

  button + button {
    margin-left: 8px;
  }
}
</style>
