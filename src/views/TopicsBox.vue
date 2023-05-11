<template>
  <Form @submit="onSubmit">
    <div class="inputs">
      <div class="inputTitle">
        <Field
          class="h1"
          placeholder="Topics box"
          name="title"
          rules="required"
          v-model="title"
        />
        <Error name="title" />
      </div>

      <Input
        class="input"
        label="subject"
        name="subject"
        placeholder="Biology, math..."
        v-model="subject"
      />

      <TopicsSection
        class="topicsSection"
        title="topics"
        :topics="[]"
        :addeable="addeableUrl"
      />
    </div>

    <Button>add topics box</Button>
  </Form>
</template>

<script>
import { Field, Form } from 'vee-validate';

import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Error from '../components/Error.vue';
import TopicsSection from '../components/TopicsSection.vue';

import createQueryString from '../utils/createQueryString';

export default {
  name: 'TopicsBox',
  data() {
    return {
      addeableUrlBase: '/topicsBox/topic',
      title: undefined,
      subject: undefined,
    };
  },
  computed: {
    addeableUrl() {
      const params = {
        subject: this.subject,
        topicsBoxTitle: this.title,
      };

      const paramsString = createQueryString(params);

      return `${this.addeableUrlBase}${paramsString}`;
    },
  },
  mounted() {
    this.subject = this.$route.query?.subject;
    this.title = this.$route.query?.topicsBoxTitle;
  },
  methods: {
    onSubmit() {
      //
    },
  },
  components: { Input, Button, Form, Field, Error, TopicsSection },
};
</script>

<style lang="scss" scoped>
.inputTitle {
  margin-bottom: 24px;

  input {
    border: none;
    background: rgba(0, 0, 0, 0);
    color: $black;
    width: 100%;
    font-weight: 500;

    &::placeholder {
      color: $black50;
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  div.inputs {
    .input + .input {
      margin-top: 8px;
    }
  }
}

.topicsSection {
  margin-top: 24px;
}
</style>
