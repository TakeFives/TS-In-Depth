/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/indent */

abstract class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //     console.log('Creating a new ReferenceItem...');
  //     this.title = newTitle;
  //     this.year = newYear;
  // }
  #id: number;

  private _publisher: string;

  static department: string = 'Dep of truth';

  get publisher(): string {
    return this._publisher;
  }

  set publisher(name: string) {
    this._publisher = name;
  }

  constructor(id: number, protected title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
    this.#id = id;
  }
  printItem(): void {
    console.log((`${this.title} was published in ${this.year}`));
    console.log(ReferenceItem.department);
    console.log(Object.getPrototypeOf(this).constructor.department);
  }
  abstract printCitation(): void;

}

export {
  ReferenceItem,
};