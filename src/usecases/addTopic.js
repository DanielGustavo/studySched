import topicsRepository from '../repositories/topicsRepository';

export default function addTopic(topic) {
  const dateISO = topic?.date ? new Date(topic?.date).toISOString() : undefined;
  const dateTimestamp =
    dateISO === undefined ? undefined : new Date(dateISO).getTime();

  topicsRepository.insert({
    title: topic.title,
    date: dateTimestamp,
    subject: topic?.subject,
    importance: topic.importance,
    topicsBoxId: topic?.topicsBoxId,
  });
}
