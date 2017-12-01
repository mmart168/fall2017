import React from 'react'
import styles from './Card.css'

const CardHeader = (props) =>
  <header className={styles.header}>
    <div className={styles.userInfo}>
      <div className={styles.avatar}>
        <img src={props.avatar} alt='user photo' className={styles.avatarImage}/>
      </div>
      <a href='#' className={styles.username}>{props.name}</a>
    </div>
    <p className='helvetica grey-text'>{props.timestamp}</p>
  </header>

export default CardHeader
