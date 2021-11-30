import React from 'react';
import styles from './UserCard.module.scss';
import { LangContext, UserContext } from '../../../context';
import CONSTANTS from '../../../constants';
const { TITLES } = CONSTANTS;

const UserCard = () => {
  const renderProps = (user) => {
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

  return <UserContext.Consumer>{renderProps}</UserContext.Consumer>;
};

export default UserCard;
