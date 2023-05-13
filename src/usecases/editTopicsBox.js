import topicsBoxesRepository from '../repositories/topicsBoxesRepository';

export default function editTopicsBox(newTopicsBox) {
  if (newTopicsBox.id === undefined) return undefined;

  const topicsBox = topicsBoxesRepository.update(newTopicsBox);

  return topicsBox;
}
