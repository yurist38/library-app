import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterBook } from '../../../../common/utils';
import { IBookWithId } from '../../../interfaces/book';
import { IGlobalState } from '../../../reducers';
import CardsList from '../../components/CardsList';
import MainLayout from '../../layouts/MainLayout';

export interface IReservedStateProps {
  books: IBookWithId[];
  filter: string;
  reserved: number[];
}

class Reserved extends Component<IReservedStateProps> {
  private getReservedBooksFiltered: () => IBookWithId[] = () => {
    const { books, filter, reserved } = this.props;
    const reservedBooks = reserved.map((id: number) => books[id]);

    return filter ? reservedBooks.filter((b) => filterBook(b, filter)) : reservedBooks;
  }

  public render() {

    return (
      <MainLayout activeMenuItemId={3}>
        <CardsList books={this.getReservedBooksFiltered()} />
      </MainLayout>
    );
  }
}

const mapStateToProps = (state: IGlobalState): IReservedStateProps => ({
  books: state.books,
  filter: state.search.filter,
  reserved: state.reserved,
});

export default connect(mapStateToProps)(Reserved);
