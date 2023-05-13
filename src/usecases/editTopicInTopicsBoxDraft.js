import topicsBoxDraftRepository from '../repositories/topicsBoxDraftRepository';

export default function editTopicInTopicsBoxDraft(newTopic) {
  if (newTopic.id === undefined) return undefined;

  const dateISO = newTopic?.date
    ? new Date(newTopic?.date).toISOString()
    : undefined;

  const dateTimestamp =
    dateISO === undefined ? undefined : new Date(dateISO).getTime();

  Object.assign(newTopic, { date: dateTimestamp });

  const topic = topicsBoxDraftRepository.updateTopic(newTopic);

  return topic;
}
