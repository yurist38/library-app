import React, { Component } from 'react';
import { connect } from 'react-redux';
import IBook from '../interfaces/book';
import { IGlobalState } from '../reducers';

export interface IBrowseReduxProps {
  books: IBook[];
}

// export interface IBrowse

class Browse extends Component<IBrowseReduxProps> {
  public render() {
    return <div>Homepage</div>;
  }
}

const mapStateToProps = (state: IGlobalState): IBrowseReduxProps => ({
  books: state.books,
});

export default connect(mapStateToProps)(Browse);
