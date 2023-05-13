<template>
  <Form @submit="onSubmit">
    <div class="inputs">
      <div class="inputTitle">
        <Field
          class="h1"
          placeholder="Topic"
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
      <Input
        class="input"
        label="date"
        name="date"
        type="datetime-local"
        placeholder="dd/mm/yyyy hh:mm"
        :rules="{ required: !(isInTopicsBoxDraft || isInTopicsBox) }"
        v-model="date"
      />

      <Input
        class="input importance"
        label="Importance"
        name="importance"
        type="number"
        v-model="importance"
        hidden
        rules="required|max_value:2|min_value:0"
      >
        <div>
          <button
            type="button"
            :class="{ low: true, hide: importance !== 0 }"
            @click="setImportance(0)"
          >
            Low
          </button>

          <button
            type="button"
            :class="{ medium: true, hide: importance !== 1 }"
            @click="setImportance(1)"
          >
            Medium
          </button>

          <button
            type="button"
            :class="{ high: true, hide: importance !== 2 }"
            @click="setImportance(2)"
          >
            High
          </button>
        </div>
      </Input>
    </div>

    <div class="buttons">
      <Button v-if="topic === undefined">add topic</Button>
      <Button v-else>edit topic</Button>

      <Button
        v-if="isInTopicsBoxDraft || isInTopicsBox"
        type="button"
        class="secondary"
        @click="goBackToTopicsBox"
      >
        cancel
      </Button>
    </div>
  </Form>
</template>

<script>
import { Field, Form } from 'vee-validate';
import { format } from 'date-fns';

import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Error from '../components/Error.vue';

import findTopicById from '../usecases/findTopicById';
import addTopic from '../usecases/addTopic';
import editTopic from '../usecases/editTopic';
import getTopicsBoxDraft from '../usecases/getTopicsBoxDraft';
import addTopicInTopicsBoxDraft from '../usecases/addTopicInTopicsBoxDraft';
import findTopicFromBoxDraft from '../usecases/findTopicFromBoxDraft';
import editTopicInTopicsBoxDraft from '../usecases/editTopicInTopicsBoxDraft';
import editTopicInTopicsBox from '../usecases/editTopicInTopicsBox';
import findTopicsBoxById from '../usecases/findTopicsBoxById';

export default {
  name: 'Topic',
  data() {
    return {
      importance: 0,
      title: undefined,
      subject: undefined,
      date: undefined,
      topic: undefined,
      isInTopicsBoxDraft: false,
      isInTopicsBox: false,
      topicsBox: undefined,
    };
  },
  methods: {
    onSubmit(topic, actions) {
      const shouldCreateTopic = this?.topic === undefined;
      const shouldEditTopic = this?.topic?.id !== undefined;

      if (
        shouldCreateTopic &&
        !(this.isInTopicsBoxDraft || this.isInTopicsBox)
      ) {
        addTopic(topic);

        actions.resetForm();
        actions.setFieldValue('importance', 0);
      }

      if (shouldEditTopic && !(this.isInTopicsBoxDraft || this.isInTopicsBox)) {
        editTopic({
          ...topic,
          id: this.topic.id,
        });

        this.$router.push('/');
      }

      if (shouldCreateTopic && this.isInTopicsBoxDraft) {
        addTopicInTopicsBoxDraft(topic);
        actions.resetForm({
          values: { subject: this?.subject, importance: 0 },
        });
      }

      if (shouldCreateTopic && this.isInTopicsBox) {
        addTopic({
          ...topic,
          topicsBoxId: this.$route.params?.topicsBoxId,
        });

        actions.resetForm({
          values: { subject: this?.subject, importance: 0 },
        });
      }

      if (shouldEditTopic && this.isInTopicsBoxDraft) {
        editTopicInTopicsBoxDraft({
          ...topic,
          id: this.topic.id,
        });

        this.goBackToTopicsBox();
      }

      if (shouldEditTopic && this.isInTopicsBox) {
        editTopicInTopicsBox({
          ...topic,
          id: this.topic.id,
        });

        this.goBackToTopicsBox();
      }
    },
    selectTopicInput() {
      this.$refs.topicInput.focus();
    },
    setImportance(importance) {
      this.importance = importance;
    },
    goBackToTopicsBox() {
      const topicsBoxId = this.$route.params?.topicsBoxId;

      if (topicsBoxId) {
        this.$router.push(`/topicsBox/${topicsBoxId}`);
      } else {
        this.$router.push(`/topicsBox`);
      }
    },
  },
  mounted() {
    const id = this.$route.params?.id;
    const topicsBoxId = this.$route.params?.topicsBoxId;

    this.isInTopicsBoxDraft =
      /\/topicsBox/g.test(this.$route.path) && !topicsBoxId;

    this.isInTopicsBox = /\/topicsBox/g.test(this.$route.path) && topicsBoxId;

    const shouldGetTopicFromABoxDraft =
      id !== undefined && this.isInTopicsBoxDraft && topicsBoxId === undefined;

    if (topicsBoxId !== undefined) {
      this.topicsBox = findTopicsBoxById(topicsBoxId);
    }

    if (id !== undefined && !shouldGetTopicFromABoxDraft) {
      this.topic = findTopicById(id);
    }

    if (shouldGetTopicFromABoxDraft) {
      this.topic = findTopicFromBoxDraft(id);
    }

    if (this.isInTopicsBoxDraft) {
      const topicsBoxDraft = getTopicsBoxDraft();

      this.subject = topicsBoxDraft?.subject;
    }

    if (this.isInTopicsBox) {
      const topicsBox = findTopicsBoxById(topicsBoxId);

      this.subject = topicsBox?.subject;
    }
  },
  watch: {
    topic(newTopic) {
      if (newTopic === undefined) return;

      this.title = newTopic.title;
      this.subject = newTopic.subject;
      this.importance = newTopic.importance;

      if (newTopic?.date !== undefined) {
        this.date = format(newTopic.date, "yyyy-MM-dd'T'HH:mm");
      }
    },
  },
  components: { Input, Button, Form, Field, Error },
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

  div.buttons {
    display: flex;
    flex-direction: column;

    button + button {
      margin-top: 8px;
    }
  }

  div.inputs {
    .input + .input {
      margin-top: 8px;
    }

    .input.importance {
      div {
        display: flex;
        flex-direction: row;
      }

      button {
        border: none;
        border-radius: 5px;

        padding: 4px 8px;
        color: $white;
        transition: 200ms;

        & + button {
          margin-left: 8px;
        }
      }

      button.low {
        background: $secondary;
      }

      button.medium {
        background: $primary;
      }

      button.high {
        background: $error;
      }

      button.hide {
        color: rgba(0, 0, 0, 0);
        padding: 4px 0;
      }
    }
  }
}
</style>
