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
        :topics="topics"
        :addeable="addeableUrl"
      />
    </div>

    <Button v-if="topicsBox === undefined">add topics box</Button>
    <Button v-else>edit topics box</Button>
  </Form>
</template>

<script>
import { Field, Form } from 'vee-validate';

import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Error from '../components/Error.vue';
import TopicsSection from '../components/TopicsSection.vue';

import saveTopicsBoxDraft from '../usecases/saveTopicsBoxDraft';
import getTopicsBoxDraft from '../usecases/getTopicsBoxDraft';
import clearTopicsBoxDraft from '../usecases/clearTopicsBoxDraft';
import addTopicsBox from '../usecases/addTopicsBox';
import addTopic from '../usecases/addTopic';
import findTopicsBoxById from '../usecases/findTopicsBoxById';
import editTopicsBox from '../usecases/editTopicsBox';

export default {
  name: 'TopicsBox',
  data() {
    return {
      addeableUrl: '/topicsBox/topic',
      title: undefined,
      subject: undefined,
      draft: undefined,
      topicsBox: undefined,
      topics: [],
    };
  },
  mounted() {
    const id = this.$route.params?.id;

    if (id === undefined) {
      const draft = getTopicsBoxDraft();

      if (draft !== undefined) {
        this.draft = draft;
        this.subject = draft?.subject;
        this.title = draft?.title;
        this.topics = draft?.topics ?? [];
      }
    }

    if (id !== undefined) {
      const topicsBox = findTopicsBoxById(id);

      this.topicsBox = topicsBox;
      this.subject = topicsBox?.subject;
      this.title = topicsBox?.title;
      this.topics = this.topicsBox?.topics ?? [];
    }
  },
  methods: {
    onSubmit(topicsBox, actions) {
      const shouldCreate = this.topicsBox?.id === undefined;
      const shouldEdit = this.topicsBox?.id !== undefined;

      if (shouldCreate) {
        const { id } = addTopicsBox(topicsBox);

        this.draft?.topics.forEach((topic) => {
          addTopic({
            ...topic,
            topicsBoxId: id,
          });
        });

        actions.resetForm();
        clearTopicsBoxDraft();
        this.draft = {};
      }

      if (shouldEdit) {
        editTopicsBox({ ...topicsBox, id: this.topicsBox.id });
        this.$router.push('/topicsBoxes');
      }
    },
  },
  watch: {
    title(newTitle) {
      if (this.topicsBox) return;

      saveTopicsBoxDraft({ title: newTitle });
    },
    subject(newSubject) {
      if (this.topicsBox) return;

      saveTopicsBoxDraft({ subject: newSubject });
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
