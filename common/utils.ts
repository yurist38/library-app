import { IBookWithId } from '../src/interfaces/book';
import constants from './constants';

export function isProduction(): boolean {
  return process.env.NODE_ENV === constants.environments.prod;
}

// Since we don't have an information about reserved books we can generate randomly the list of their IDs.
// We can use book's object index in the books list as the book's ID.
export function generateReservedIDs(): number[] {
  const quantity = 30; // Let's say we want to get 30 books marked as reserved.
  const totalBooksNumber = 100; // We know that we have 100 books in our fake store so far.

  const result: number[] = [];

  while (result.length < quantity) {
    const randomInt = getRandomNumber(0, totalBooksNumber);
    if (result.indexOf(randomInt) === -1) {
      result.push(randomInt);
    }
  }

  return result.sort((a, b) => a - b);
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function filterBook(book: IBookWithId, filter: string) {
  const filterLower = filter.toLowerCase();

  // Can be moved to the configuration level:
  const searchingFields = [
    'author',
    'title',
  ];

  return searchingFields.some((field) => book[field].toLowerCase().includes(filterLower));
}
