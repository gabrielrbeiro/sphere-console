import React, { ChangeEventHandler } from 'react'
import styles from './text-input.module.css'

export type TextInputProps = {
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
  label?: string
  id: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  icon?: string
}

export const TextInput: React.FC<TextInputProps> = ({
                                                      type = 'text',
                                                      label,
                                                      id,
                                                      onChange,
                                                      disabled = false,
                                                      icon
                                                    }) => {

  return (
    <div className={`${styles.textInputContainer} ${disabled && styles.textInputContainerDisabled} group`}>
      {label &&
        <label htmlFor={id} className={`${styles.textInputLabel} group-focus-within:text-primary-700`}>{label}</label>}
      <div className={`${styles.textInputWrapper}`}>
        {icon && <span className={`${styles.textInputIcon} group-focus-within:text-primary-700`}>
        <i className={icon}/>
        </span>}
        <input
          type={type}
          id={id}
          className={styles.textInput}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
