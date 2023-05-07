<template>
  <form @submit.prevent>
    <div class="inputs">
      <input class="inputTitle h1" placeholder="Topic" name="topic" />

      <Input
        class="input"
        label="subject"
        name="subject"
        placeholder="Biology, math..."
      />
      <Input
        class="input"
        label="type"
        name="type"
        placeholder="Study, work, exercise..."
      />
      <Input
        class="input"
        label="date"
        name="date"
        type="datetime-local"
        placeholder="dd/mm/yyyy hh:mm"
      />

      <Input
        class="input importance"
        label="Importance"
        name="importance"
        type="number"
        hidden
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

    <Button>add topic</Button>
  </form>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
  name: 'Topic',
  data() {
    return {
      importance: 0,
    };
  },
  methods: {
    selectTopicInput() {
      this.$refs.topicInput.focus();
    },
    setImportance(importance) {
      this.importance = importance;
    },
  },
  components: { Input, Button },
};
</script>

<style lang="scss" scoped>
.h1 {
  margin-bottom: 24px;
}

input.inputTitle {
  border: none;
  background: rgba(0, 0, 0, 0);
  color: $black;
  width: 100%;
  font-weight: 500;

  &::placeholder {
    color: $black50;
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