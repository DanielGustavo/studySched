<template>
  <div class="container">
    <button @click="onClickButton('calendar')">
      <vue-feather type="calendar" />
    </button>

    <button
      :class="{ active: activeButton === 'home' }"
      @click="onClickButton('home')"
    >
      <vue-feather type="home" />
    </button>

    <button
      :class="{ active: activeButton === 'topic' }"
      @click="onClickButton('addTopic')"
    >
      <vue-feather type="book" />
    </button>

    <button
      :class="{ active: activeButton === 'topicsBoxes' }"
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
  watch: {
    routerPath(newPath) {
      if (newPath === '/') {
        this.activeButton = 'home';
      }

      if (/^\/topic/.test(newPath)) {
        this.activeButton = 'topic';
      }

      if (/^\/(topicsBoxes|topicsBox)/.test(newPath)) {
        this.activeButton = 'topicsBoxes';
      }
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
