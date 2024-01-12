import React from 'react'
import styles from './button.module.css'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger';

export type ButtonProps = {
  label: string,
  icon?: string,
  variant?: ButtonVariant
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({label, disabled = false, icon = undefined, variant = 'default'}) => {
  const classes = [styles.button, styles[ `button_${variant}` ]].join(' ')
  return (
    <button disabled={disabled} className={classes}>
      {(icon && icon !== '') && <span className={styles.button_iconContainer}>
        <i className={icon}></i>
      </span>}
      {label}
    </button>
  )
}
