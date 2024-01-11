import React from 'react'
import styles from './button.module.css'

export type ButtonProps = {
    label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button className={styles.button}>{label}</button>
}