<template>
  <label class="container">
    {{ label }}
    <Field v-bind="{ ...$attrs }" />
    <Error v-if="$attrs.name" :name="$attrs.name" />

    <slot />
  </label>
</template>

<script>
import { Field } from 'vee-validate';

import Error from './Error.vue';

export default {
  name: 'Input',
  props: {
    label: String,
  },
  components: { Field, Error },
};
</script>

<style lang="scss" scoped>
label.container {
  display: flex;
  flex-direction: column;

  color: $black90;
  font-weight: 500;
  text-transform: capitalize;

  input {
    border: none;
    border-radius: 5px;

    padding: 10px;
    background-color: rgba($black25, 0.4);
    color: $black;

    &::placeholder {
      color: $black75;
    }
  }
}
</style>
