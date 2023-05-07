<template>
  <div class="container">
    <button @click="onClickButton('calendar')">
      <vue-feather type="calendar" />
    </button>

    <button
      :class="{ active: routerPath === '/' }"
      @click="onClickButton('home')"
    >
      <vue-feather type="home" />
    </button>

    <button
      :class="{ active: routerPath === '/topic' }"
      @click="onClickButton('addTopic')"
    >
      <vue-feather type="plus" />
    </button>

    <button
      :class="{ active: routerPath === '/topicsBoxes' }"
      @click="onClickButton('topicsBoxes')"
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
      activeButton: 'home',
      routerPath: window.location.pathname ?? '/',
    };
  },
  methods: {
    onClickButton(buttonName) {
      const buttonNameToAction = {
        calendar: () => {},
        home: () => this.$router.push('/'),
        addTopic: () => this.$router.push('/topic'),
        topicsBoxes: () => this.$router.push('/topicsBoxes'),
      };

      const action = buttonNameToAction[buttonName];

      if (!action) return;

      action();
    },
  },
  created() {
    this.$router.afterEach((e) => {
      this.routerPath = e.path;
    });
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
