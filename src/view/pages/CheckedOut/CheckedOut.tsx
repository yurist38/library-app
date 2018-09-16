import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterBook } from '../../../../common/utils';
import { IBookWithId } from '../../../interfaces/book';
import { IGlobalState } from '../../../reducers';
import CardsList from '../../components/CardsList';
import MainLayout from '../../layouts/MainLayout';

export interface ICheckedOutStateProps {
  books: IBookWithId[];
  filter: string;
  cart: number[];
}

class CheckedOut extends Component<ICheckedOutStateProps> {
  private getBooksFiltered: () => IBookWithId[] = () => {
    const { books, cart, filter } = this.props;
    const booksInCart = cart.sort().map((id: number) => books[id]);

    return filter ? booksInCart.filter((b) => filterBook(b, filter)) : booksInCart;
  }

  public render() {

    return (
      <MainLayout activeMenuItemId={2}>
        <CardsList books={this.getBooksFiltered()} />
      </MainLayout>
    );
  }
}

const mapStateToProps = (state: IGlobalState): ICheckedOutStateProps => ({
  books: state.books,
  cart: state.cart,
  filter: state.search.filter,
});

export default connect(mapStateToProps)(CheckedOut);
