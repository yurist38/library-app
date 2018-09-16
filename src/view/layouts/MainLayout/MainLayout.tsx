import React, { Component } from 'react';

import Header from '../../components/Header';
import MainMenu from '../../components/MainMenu';
import styles from './styles.css';

export interface IMainLayoutProps {
  activeMenuItemId?: number;
}

class MainLayout extends Component<IMainLayoutProps> {
  public render() {
    const { activeMenuItemId } = this.props;
    return (
      <div>
        <Header />
        <MainMenu activeMenuItemId={activeMenuItemId} />
        <main className={styles.mainContent}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;
