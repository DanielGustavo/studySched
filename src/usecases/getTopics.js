import { isSameDay } from 'date-fns';

import topicsRepository from '../repositories/topicsRepository';

export default function getTopics(params) {
  const topics = topicsRepository.getAll().filter((topic) => {
    if (params?.day === undefined) return true;

    return isSameDay(topic.date, params.day);
  });

  return topics;
}
