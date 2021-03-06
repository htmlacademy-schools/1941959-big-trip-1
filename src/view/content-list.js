import {creatElement} from '../render';

const contentList = () => (`<ul class="trip-events__list">
          </ul>`);

export default class ContentList {
  #element = null;
  get element() {
    if (!this.#element) {
      this.#element = creatElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return contentList();
  }

  removeElement() {
    this.#element = null;
  }
}
