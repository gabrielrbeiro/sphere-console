import React, { MouseEventHandler, useEffect, useState } from 'react'
import styles from "./module-selector.module.css";

export type ModuleSelectorProps = {
  title: string;
  modules?: Module[];
}

export type Module = {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({title, modules = []}) => {

  const [visible, setVisible] = useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setVisible(!visible);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button className={styles.selector} onClick={handleClick} tabIndex={-1}>
        <span>{title}</span>
        <i className="ri-arrow-down-s-line"></i>
      </button>
      <div className={`${styles.dropdown} ${visible && styles.dropdownVisible}`}>

        {modules.map((module, index) => (
          <a href={module.url} className={`${styles.module} group`} key={index}>
            <div className={`${styles.moduleIcon} group-hover:text-primary-600 group-hover:bg-primary-100`}>
              <i className={module.icon}></i>
            </div>
            <div className={styles.moduleInfo}>
              <span className={styles.moduleTitle}>{module.title}</span>
              <span className={styles.moduleDescription}>{module.description}</span>
            </div>
          </a>
        ))}

      </div>
    </div>
  )
}
