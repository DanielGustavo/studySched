class TopicsBoxDraftRepository {
  constructor() {
    this.tableName = 'study@topicsBoxDraft';
  }

  saveDraft(draft) {
    const stringifiedJson = JSON.stringify(draft);

    window.localStorage.setItem(this.tableName, stringifiedJson);
  }

  getDraft() {
    const stringifiedJson = window.localStorage.getItem(this.tableName);

    return JSON.parse(stringifiedJson);
  }

  addTopic(topic) {
    const draft = this.getDraft();
    draft.topics ??= [];

    draft.topics.push(topic);

    const stringifiedJson = JSON.stringify(draft);
    window.localStorage.setItem(this.tableName, stringifiedJson);
  }

  findTopic(id) {
    const topics = this.getDraft()?.topics ?? [];

    const topic = topics.find((currentTopic) => id === currentTopic.id);

    return topic;
  }

  updateTopic(newTopic) {
    const topic = this.findTopic(newTopic.id);

    if (!topic) return undefined;

    const draft = this.getDraft();
    const topics = draft?.topics;

    Object.assign(topic, { ...newTopic });

    const topicIndex = topics?.findIndex(({ id }) => newTopic.id === id);

    if (topicIndex < 0) return undefined;

    topics[topicIndex] = topic;
    this.saveDraft({ ...draft, topics });

    return topic;
  }

  clear() {
    window.localStorage.setItem(this.tableName, '{}');
  }
}

export default new TopicsBoxDraftRepository();
