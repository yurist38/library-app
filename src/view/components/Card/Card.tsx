import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { booksCoversPath } from '../../../../common/constants';
import cartActions from '../../../actions/cart';
import { IBookWithId } from '../../../interfaces/book';
import { IGlobalState } from '../../../reducers/index';
import styles from './styles.css';

interface IBookCardProps {
  book: IBookWithId;
}

interface IBookCardStateProps {
  cart: number[];
  reserved: number[];
}

interface IBookCardDispatchProps {
  addToCart(bookId: number): void;
  removeFromCart(bookId: number): void;
}

class BookCard extends Component<IBookCardProps & IBookCardStateProps & IBookCardDispatchProps> {
  private addToCart = () => {
    const { addToCart, book } = this.props;
    addToCart(book.id);
  }

  private removeFromCart = () => {
    const { removeFromCart, book } = this.props;
    removeFromCart(book.id);
  }

  private renderMainButton = (): React.ReactNode => {
    const { book, cart, reserved } = this.props;

    if (reserved.indexOf(book.id) >= 0) {
      return <Button disabled>Reserved</Button>;
    }

    if (cart.indexOf(book.id) >= 0) {
      return (
        <Button
          color="primary"
          onClick={this.removeFromCart}
          variant="outlined"
        >
          Checked out
        </Button>
      );
    }

    return (
      <Button
        color="primary"
        onClick={this.addToCart}
        variant="contained"
      >
        Check Out
      </Button>
    );
  }

  public render() {
    const { author, country, imageLink, language, pages, title, year } = this.props.book;

    return (
      <Card
        className={styles.card}
      >
        <CardHeader
          className={styles.cardHeader}
          subheader={<div className={styles.author}>{author}</div>}
          title={<div className={styles.cardTitle}>{title}</div>}
        />
        <CardMedia
          className={styles.bookImage}
          image={booksCoversPath + imageLink}
          title={title}
        />
        <CardContent className={styles.detailsContainer}>
          <div><b>Language:</b> {language}</div>
          <div><b>Country:</b> {country}</div>
          <div><b>Pages:</b> {pages}</div>
          <div><b>Year:</b> {year}</div>
        </CardContent>
        <CardContent className={styles.buttonContainer}>
          {this.renderMainButton()}
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state: IGlobalState): IBookCardStateProps => ({
  cart: state.cart,
  reserved: state.reserved,
});

const mapDispatchToProps = (dispatch: Dispatch): IBookCardDispatchProps => ({
  addToCart: (bookId: number) => dispatch(cartActions.addToCart(bookId)),
  removeFromCart: (bookId: number) => dispatch(cartActions.removeFromCart(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
