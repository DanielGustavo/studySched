import topicsRepository from '../repositories/topicsRepository';

export default function editTopicInTopicsBox(newTopic) {
  if (newTopic.id === undefined) return undefined;

  const dateISO = newTopic?.date
    ? new Date(newTopic?.date).toISOString()
    : undefined;

  const dateTimestamp =
    dateISO === undefined ? undefined : new Date(dateISO).getTime();

  if (newTopic.date !== undefined) {
    Object.assign(newTopic, { date: dateTimestamp });
  }

  const topic = topicsRepository.update(newTopic);

  return topic;
}
