import React from 'react';
import styles from "./user-info.module.css";

export type UserInfoProps = {
  loading?: boolean;
  name?: string;
  email?: string;
  avatar?: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({
                                                    loading = false,
                                                    name,
                                                    email,
                                                    avatar
                                                  }) => {
  return (
    <div className={`${styles.wrapper} ${loading && styles.loading}`}>
      <button className={styles.avatar}>
        {avatar && <img alt="profile avatar" src={avatar}/>}
      </button>
      {
        (name || email) && (
          <div className={styles.info}>
            {name && <span className={styles.name}>{name}</span>}
            {email && <span className={styles.email}>{email}</span>}
          </div>
        )
      }
    </div>
  )
}
