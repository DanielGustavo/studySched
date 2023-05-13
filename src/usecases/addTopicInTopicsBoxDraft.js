import topicsBoxDraft from '../repositories/topicsBoxDraftRepository';

export default function addTopicInTopicsBoxDraft(topic) {
  const defaultTopic = {
    title: undefined,
    subject: undefined,
    date: undefined,
    importance: 0,
  };

  const dateISO =
    topic?.date === undefined ? undefined : new Date(topic?.date).toISOString();

  const dateTimestamp =
    dateISO === undefined ? undefined : new Date(dateISO).getTime();

  const topicToSave = {
    ...defaultTopic,
    ...topic,
    date: dateTimestamp,
  };

  topicsBoxDraft.addTopic(topicToSave);
}
