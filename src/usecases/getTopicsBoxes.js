import topicsBoxesRepository from '../repositories/topicsBoxesRepository';

export default function getTopicsBoxes() {
  return topicsBoxesRepository.getAll();
}
