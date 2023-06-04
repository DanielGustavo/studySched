<template>
  <DatePickerModal
    v-if="showCalendarModal"
    :highlightedDate="filtersStore.date"
    @dayclick="onSelectDate"
    @closeModal="closeModal"
  />

  <div class="view">
    <router-view />
  </div>

  <MenuBar class="menuBar" />
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import DatePickerModal from './components/DatePickerModal.vue';

import useFiltersStore from './stores/filtersStore';

export default {
  name: 'App',
  data() {
    return {
      showCalendarModal: false,
      filtersStore: undefined,
    };
  },
  components: { MenuBar, DatePickerModal },
  methods: {
    onSelectDate(date) {
      const timestamp = date.startDate.getTime();
      this.filtersStore.date = timestamp;

      this.filtersStore.showCalendarModal = false;
    },
    closeModal() {
      this.filtersStore.showCalendarModal = false;
    },
  },
  created() {
    this.filtersStore = useFiltersStore();

    this.filtersStore.$subscribe((_, state) => {
      this.showCalendarModal = state.showCalendarModal;
    });
  },
};
</script>

<style lang="scss" scoped>
div.view {
  padding: 8px;
  height: 100%;
  overflow-y: auto;
}
</style>
