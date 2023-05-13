import topicsBoxDraftRepository from '../repositories/topicsBoxDraftRepository';

export default function findTopicFromBoxDraft(id) {
  return topicsBoxDraftRepository.findTopic(id);
}
