import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import BallotIcon from '@material-ui/icons/Ballot';
import BookIcon from '@material-ui/icons/Book';
import classnames from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export interface IMainMenuProps {
  activeMenuItemId?: number;
}

export interface IMainMenuItem {
  icon: React.ReactElement<any>;
  id: number;
  link: string;
  name: string;
  title: string;
}

export const MainMenuItems: IMainMenuItem[] = [
  {
    icon: <BookIcon />,
    id: 1,
    link: '/',
    name: 'browse',
    title: 'Browse',
  },
  {
    icon: <ArchiveIcon />,
    id: 2,
    link: '/checked-out',
    name: 'checkedOut',
    title: 'Checked Out',
  },
  {
    icon: <BallotIcon />,
    id: 3,
    link: '/reserved',
    name: 'reserved',
    title: 'Reserved',
  },
];

class MainMenu extends Component<IMainMenuProps> {
  public renderMenuItem(item: IMainMenuItem) {
    const className = classnames(styles.menuItem, {
      [styles.active]: item.id === this.props.activeMenuItemId,
    });

    return (
      <Link key={item.name} to={item.link} className={className}>
        <ListItem button>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      </Link>
    );
  }

  public render() {
    return (
      <Drawer
        anchor="left"
        open
        variant="permanent"
      >
        <div className={styles.title}>
          Library
        </div>
        {MainMenuItems.map(this.renderMenuItem.bind(this))}
      </Drawer>
    );
  }
}

export default MainMenu;
