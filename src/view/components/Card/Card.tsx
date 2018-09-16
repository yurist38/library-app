import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';

import { imgUrl } from '../../../../common/constants';
import IBook from '../../../interfaces/book';
import styles from './styles.css';

interface IBookCardProps {
  book: IBook;
}

const BookCard: React.SFC<IBookCardProps> = ({ book }: IBookCardProps): React.ReactElement<any> => {
  const { author, imageLink, title } = book;

  return (
    <Card
      className={styles.card}
    >
      <CardHeader
        className={styles.cardHeader}
        subheader={author}
        title={<div className={styles.cardTitle}>{title}</div>}
      />
      <CardMedia
        className={styles.bookImage}
        image={imgUrl + imageLink}
        title={title}
      />
    </Card>
  );
};

export default BookCard;
