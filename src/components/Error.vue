<template>
  <ErrorMessage v-bind="{ ...$attrs }" class="container" />
</template>

<script>
import { ErrorMessage } from 'vee-validate';

export default {
  name: 'Error',
  components: { ErrorMessage },
};
</script>

<style lang="scss" scoped>
.container {
  color: $error;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
