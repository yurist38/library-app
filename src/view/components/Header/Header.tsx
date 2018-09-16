import AppBar from '@material-ui/core/AppBar';
import Input from '@material-ui/core/Input';
import classnames from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import searchActions from '../../../actions/search';
import { IGlobalState } from '../../../reducers';
import styles from './styles.css';

interface IHeaderStateProps {
  filter: string;
}

interface IHeaderDispatchProps {
  searchSetFilter(filter: string): void;
}

class Header extends Component<IHeaderStateProps & IHeaderDispatchProps> {
  private onChangeSearchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.props.searchSetFilter(value);
  }

  public render() {
    return (
      <AppBar className={classnames(styles.header, styles.bar)}>
        <Input
          className={styles.searchInput}
          disableUnderline
          onChange={this.onChangeSearchFilter}
          placeholder="Search..."
          value={this.props.filter}
        />
      </AppBar>
    );
  }
}

const mapStateToProps = (state: IGlobalState): IHeaderStateProps => ({
  filter: state.search.filter,
});

const mapDispatchToProps = (dispatch: Dispatch): IHeaderDispatchProps => ({
  searchSetFilter: (filter: string) => dispatch(searchActions.searchSetFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
