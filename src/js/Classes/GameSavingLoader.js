import json from '../parser';
import read from '../reader';

export default class GameSavingLoader {
  constructor() {
    this.user = '';
  }

  async load() {
    try {
      const response = await read();
      const data = await json(response);
      this.user = await JSON.parse(data);
      return this.user;
    } catch (error) {
      return 'Произошла ошибка';
    }
  }
}
