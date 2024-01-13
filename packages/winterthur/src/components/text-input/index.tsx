import React, { ChangeEventHandler } from 'react'
import styles from './text-input.module.css'

export type TextInputProps = {
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
  label?: string
  id: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  icon?: string
  suffix?: string
  placeholder?: string
}

export const TextInput: React.FC<TextInputProps> = ({
                                                      type = 'text',
                                                      label,
                                                      id,
                                                      onChange,
                                                      disabled = false,
                                                      icon,
                                                      suffix,
                                                      placeholder
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
          placeholder={placeholder}
        />
        {suffix && <span className={`${styles.textInputSuffix} group-focus-within:text-primary-700`}>{suffix}</span>}
      </div>
    </div>
  )
}
