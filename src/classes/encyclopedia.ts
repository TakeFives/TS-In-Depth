/* eslint-disable @typescript-eslint/indent */
import { ReferenceItem } from '../classes';

class Encyclopedia extends ReferenceItem {
  edition: number;

  constructor(id: number, title: string, year: number, edition: number) {
    super(id, title, year);
    this.edition = edition;
  }

  override printItem(): void {
    super.printItem();
    console.log(`Edition: edition ${this.year}`);
  }
  printCitation() {
    console.log(`${this.title}-${this.year}`);
  }
}

export default Encyclopedia;