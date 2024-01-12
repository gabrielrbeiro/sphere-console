import React from 'react'
import styles from './text-input.module.css'

export type TextInputProps = {
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
}

export const TextInput: React.FC<TextInputProps> = ({
                                                      type = 'text'
                                                    }) => {

  return (
    <input className={styles.textInput} type={type}/>
  )
}
