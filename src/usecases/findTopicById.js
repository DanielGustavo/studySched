import topicsRepository from '../repositories/topicsRepository';

export default function findTopicById(id) {
  const topic = topicsRepository.find(id);

  return topic;
}
