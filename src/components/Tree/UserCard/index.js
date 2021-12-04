import React from 'react';
import styles from './UserCard.module.scss';
import CONSTANTS from '../../../constants';
import { WithLang, WithUser } from '../HOCs';
const { TITLES } = CONSTANTS;

const UserCard = (props) => {
  const { user, lang } = props;
  return (
    <div className={styles.container}>
      <h2>{TITLES[lang].userCard}</h2>
      <p>
        {user.fname} {user.sname}
      </p>
      <img src={user.imgSrc} className={styles.img} />
    </div>
  );
};

const UserCardExportComponent = WithUser(WithLang(UserCard));

export default UserCardExportComponent;
