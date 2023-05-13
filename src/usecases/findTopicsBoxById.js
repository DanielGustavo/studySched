import topicsRepository from '../repositories/topicsRepository';
import topicsBoxesRepository from '../repositories/topicsBoxesRepository';

export default function findTopicsBoxById(id) {
  const topicsBox = topicsBoxesRepository.find(id);

  const topicsInBox =
    topicsRepository
      .getAll()
      ?.filter((topic) => topic?.topicsBoxId === topicsBox.id) ?? [];

  return {
    ...topicsBox,
    topics: topicsInBox,
  };
}
