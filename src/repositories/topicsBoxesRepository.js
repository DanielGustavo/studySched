import { v4 as uuid } from 'uuid';

class TopicsBoxesRepository {
  constructor() {
    this.tableName = 'study@topicsBoxes';
  }

  getAll() {
    return JSON.parse(window.localStorage.getItem(this.tableName) ?? '[]');
  }

  find(id) {
    return this.getAll().find(
      (currentTopicsBox) => currentTopicsBox.id?.toString() === id?.toString()
    );
  }

  insert(topicsBox) {
    const topicsBoxes = this.getAll();

    const newTopicsBox = {
      ...topicsBox,
      id: uuid(),
    };

    topicsBoxes.push(newTopicsBox);

    window.localStorage.setItem(this.tableName, JSON.stringify(topicsBoxes));

    return newTopicsBox;
  }

  update(newTopicsBox) {
    const topicsBox = this.find(newTopicsBox.id);

    if (!topicsBox) return undefined;

    Object.assign(topicsBox, { ...newTopicsBox });

    const topicsBoxes = this.getAll();
    const topicsBoxIndex = topicsBoxes.findIndex(
      ({ id }) => newTopicsBox.id === id
    );

    if (topicsBoxIndex < 0) return undefined;

    topicsBoxes[topicsBoxIndex] = topicsBox;
    window.localStorage.setItem(this.tableName, JSON.stringify(topicsBoxes));

    return topicsBox;
  }
}

export default new TopicsBoxesRepository();
