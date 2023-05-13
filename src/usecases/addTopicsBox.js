import topicsBoxesRepository from '../repositories/topicsBoxesRepository';

export default function addTopicsBox(topicsBox) {
  return topicsBoxesRepository.insert(topicsBox);
}
