import topicsRepository from '../repositories/topicsRepository';

export default function addTopic(topic) {
  const dateISO = new Date(topic?.date).toISOString();
  const dateTimestamp = new Date(dateISO).getTime();

  topicsRepository.insert({
    title: topic.title,
    date: dateTimestamp,
    subject: topic?.subject,
    importance: topic.importance,
  });
}
