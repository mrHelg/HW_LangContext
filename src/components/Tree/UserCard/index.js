import React from 'react';
import styles from './UserCard.module.scss';
import { LangContext } from '../../../context';
import CONSTANTS from '../../../constants';
import { WithUser } from '../HOCs';
const { TITLES } = CONSTANTS;

const UserCard = (props) => {
  const {user} = props;
  return (
    <LangContext>
      {([lang]) => {
        return (
          <div className={styles.container}>
            <h2>{TITLES[lang].userCard}</h2>
            <p>
              {user.fname} {user.sname}
            </p>
            <img src={user.imgSrc} className={styles.img} />
          </div>
        );
      }}
    </LangContext>
  );
};

const UserCardWithUser = WithUser(UserCard);

export default UserCardWithUser;
