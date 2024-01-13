import React, { MouseEventHandler } from 'react'
import styles from './header.module.css'
import { Module, ModuleSelector } from "../module-selector";
import { UserInfo } from "../user-info";

export type HeaderProps = {
  moduleTitle: string;
  pageTitle: string;
  onMenuButtonClick?: MouseEventHandler<HTMLButtonElement>;
  user?: HeaderUserProps;
  modules?: Module[];
}

export type HeaderUserProps = {
  name?: string;
  email?: string;
  avatar?: string;
}

export const Header: React.FC<HeaderProps> = ({
                                                moduleTitle,
                                                pageTitle,
                                                onMenuButtonClick,
                                                user,
                                                modules
                                              }) => {
  return (
    <header className={styles.header}>
      <HeaderMenuButton onClick={onMenuButtonClick}/>
      <span className={styles.divider}></span>
      <ModuleSelector title={moduleTitle} modules={modules}/>
      <span className={styles.divider}></span>
      <h1 className={styles.sectionTitle}>{pageTitle}</h1>

      <div className={styles.rightMenu}>
        {user && <UserInfo name={user.name} email={user.email} avatar={user.avatar}/>}
      </div>
    </header>
  )
}

export const HeaderMenuButton: React.FC<{ onClick?: MouseEventHandler<HTMLButtonElement> }> = ({onClick}) => {
  return (
    <button className={styles.headerMenuButton} onClick={onClick}>
      <i className="ri-menu-2-line"></i>
    </button>
  )
}
