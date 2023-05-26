/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/indent */

import * as Interfaces from './../interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
  department: string;
  name: string;
  email: string;

  assistCustomer(custName: string, bookTitle: string) {
    console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
  }
}

export {
  UniversityLibrarian
};