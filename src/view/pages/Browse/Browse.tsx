import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterBook } from '../../../../common/utils';
import { IBookWithId } from '../../../interfaces/book';
import { IGlobalState } from '../../../reducers';
import CardsList from '../../components/CardsList';
import MainLayout from '../../layouts/MainLayout';

export interface IBrowseStateProps {
  books: IBookWithId[];
  filter: string;
}

class Browse extends Component<IBrowseStateProps> {
  private getBooksFiltered: () => IBookWithId[] = () => {
    const { books, filter } = this.props;

    return filter ? books.filter((b) => filterBook(b, filter)) : books;
  }

  public render() {

    return (
      <MainLayout activeMenuItemId={1}>
        <CardsList books={this.getBooksFiltered()} />
      </MainLayout>
    );
  }
}

const mapStateToProps = (state: IGlobalState): IBrowseStateProps => ({
  books: state.books,
  filter: state.search.filter,
});

export default connect(mapStateToProps)(Browse);
