import topicsBoxDraftRepository from '../repositories/topicsBoxDraftRepository';

export default function findTopicFromBox(id) {
  return topicsBoxDraftRepository.findTopic(id);
}
