<template>
  <div class="container">
    <Calendar v-bind="$attrs" :attributes="attributes" />
  </div>

  <div class="bg" @click="closeModal"></div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import 'v-calendar/style.css';
import { Calendar } from 'v-calendar';

export default {
  name: 'DatePickerModal',
  data() {
    return {
      attributes: [
        { dot: true, dates: new Date() },
        { highlight: true, dates: this.highlightedDate },
      ],
    };
  },
  props: ['highlightedDate'],
  components: {
    Calendar,
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: rgba($black, 0.5);
}

.container {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 99999999;
}
</style>
