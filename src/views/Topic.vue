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
        :rules="{ required: !isInTopicsBox }"
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
        v-if="isInTopicsBox"
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

import createQueryString from '../utils/createQueryString';

export default {
  name: 'Topic',
  data() {
    return {
      importance: 0,
      title: undefined,
      subject: undefined,
      date: undefined,
      topic: undefined,
      isInTopicsBox: this.$route.path === '/topicsBox/topic',
    };
  },
  methods: {
    onSubmit(topic, actions) {
      if (this.topic === undefined) {
        addTopic(topic);

        actions.resetForm();
        actions.setFieldValue('importance', 0);
        return;
      }

      editTopic({
        ...topic,
        id: this.topic.id,
      });

      this.$router.push('/');
    },
    selectTopicInput() {
      this.$refs.topicInput.focus();
    },
    setImportance(importance) {
      this.importance = importance;
    },
    goBackToTopicsBox() {
      const queryString = createQueryString(this.$route.query);

      this.$router.push(`/topicsBox${queryString}`);
    },
  },
  mounted() {
    const id = this.$route.params?.id;

    if (id !== undefined) {
      this.topic = findTopicById(id);
    }

    this.subject = this.$route.query?.subject;
  },
  watch: {
    topic(newTopic) {
      if (newTopic === undefined) return;

      this.title = newTopic.title;
      this.subject = newTopic.subject;
      this.importance = newTopic.importance;
      this.date = format(newTopic.date, "yyyy-MM-dd'T'HH:mm");
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
