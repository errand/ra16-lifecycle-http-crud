import {nanoid} from 'nanoid';

export default class Note {
  constructor(text) {
    this.id = nanoid();
    this.text = text;
  }
}
