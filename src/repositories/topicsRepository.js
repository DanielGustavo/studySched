class TopicRepository {
  constructor() {
    this.tableName = 'study@topics';
  }

  getAll() {
    return JSON.parse(window.localStorage.getItem(this.tableName) ?? '[]');
  }

  find(id) {
    return this.getAll().find(
      (currentTopic) => currentTopic.id?.toString() === id?.toString()
    );
  }

  insert(topic) {
    const topics = this.getAll();

    topics.push({
      ...topic,
      id: topics.length + 1,
    });

    window.localStorage.setItem(this.tableName, JSON.stringify(topics));
  }

  update(newTopic) {
    const topic = this.find(newTopic.id);

    if (!topic) return undefined;

    Object.assign(topic, { ...newTopic });

    const topics = this.getAll();
    const topicIndex = topics.findIndex(({ id }) => newTopic.id === id);

    if (topicIndex < 0) return undefined;

    topics[topicIndex] = topic;
    window.localStorage.setItem(this.tableName, JSON.stringify(topics));

    return topic;
  }
}

export default new TopicRepository();
