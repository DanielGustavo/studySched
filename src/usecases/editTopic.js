import topicsRepository from '../repositories/topicsRepository';

export default function editTopic(newTopic) {
  if (newTopic.id === undefined) return undefined;

  const dateISO = new Date(newTopic?.date).toISOString();
  const dateTimestamp = new Date(dateISO).getTime();

  if (newTopic.date !== undefined) {
    Object.assign(newTopic, { date: dateTimestamp });
  }

  const topic = topicsRepository.update(newTopic);

  return topic;
}
