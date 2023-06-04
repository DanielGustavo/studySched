import { defineStore } from 'pinia';

export default defineStore('filtersStore', {
  state: () => ({ date: undefined, showCalendarModal: false }),
});
