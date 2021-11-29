import React, { Component } from 'react';
import {UserContext} from '../../context';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    const user = this.context;
    console.log(this.context)
    return (
      <div className={styles.container}>
        <p>{user.fname} {user.sname} </p>
      </div>
    );
  }
}

Header.contextType = UserContext;

export default Header;
