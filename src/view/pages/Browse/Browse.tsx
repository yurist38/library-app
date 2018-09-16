import React, { Component } from 'react';
import { connect } from 'react-redux';

import IBook from '../../../interfaces/book';
import { IGlobalState } from '../../../reducers';
import MainLayout from '../../layouts/MainLayout';
import Card from './../../components/Card';
import styles from './styles.css';

export interface IBrowseReduxProps {
  books: IBook[];
  filter: string;
}

class Browse extends Component<IBrowseReduxProps> {
  private renderBookCard(book: IBook, index: number) {
    return (
      <Card book={book} key={`book-card-${index}`} />
    );
  }

  private filterBook = (book: IBook) => {
    const { filter } = this.props;
    const filterLower = filter.toLowerCase();

    // Can be moved to the configuration level:
    const searchingFields = [
      'author',
      'title',
    ];

    return searchingFields.some((field) => book[field].toLowerCase().includes(filterLower));
  }

  public render() {
    const { books, filter } = this.props;
    const booksFiltered = filter ? books.filter(this.filterBook) : books;

    return (
      <MainLayout activeMenuItemId={1}>
        <div className={styles.booksContainer}>
          {booksFiltered.map(this.renderBookCard)}
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state: IGlobalState): IBrowseReduxProps => ({
  books: state.books,
  filter: state.search.filter,
});

export default connect(mapStateToProps)(Browse);
