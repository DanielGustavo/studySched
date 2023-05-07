class TopicRepository {
  constructor() {
    this.tableName = 'study@topics';
  }

  getAll() {
    return JSON.parse(window.localStorage.getItem(this.tableName) ?? '[]');
  }

  insert(topic) {
    const topics = this.getAll();

    topics.push({
      ...topic,
      id: topics.length + 1,
    });

    window.localStorage.setItem(this.tableName, JSON.stringify(topics));
  }
}

export default new TopicRepository();
