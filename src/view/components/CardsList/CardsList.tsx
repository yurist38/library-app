import React from 'react';

import { IBookWithId } from '../../../interfaces/book';
import Card from './../../components/Card';
import styles from './styles.css';

interface ICardsListProps {
  books: IBookWithId[];
}

const CardsList: React.SFC<ICardsListProps> = ({ books}: ICardsListProps): React.ReactElement<any> => {
  const renderBookCard = (book: IBookWithId, index: number) => (
    <Card book={book} key={`book-card-${index}`} />
  );

  return (
    <div className={styles.cardsContainer}>
      {books.map(renderBookCard)}
    </div>
  );
};

export default CardsList;
