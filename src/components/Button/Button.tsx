import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'

interface Button {
    text: string
    url: string
}

function Button({text, url}: Button) {
  return (
    <Link href={url}>
        <button className={styles.container}>
            {text}
        </button>
    </Link>
  )
}

export default Button