import React from 'react'
import styles from './Card.css'

const CardHeader = () => 
  <header className='df ff-row ff-vcenter jc-sb'>
    <div className='df ff-row ff-vcenter'>
      <img src={'assets/userAvatars/' + this.props.avatar + '.jpg'} alt='user photo' className='sq-50px ovf-hidden br-circle mas'/>
      <a href='#' className='helvetica blue-text'>{this.props.name}</a>
    </div>
    <p className='helvetica grey-text'>{this.props.timestamp}</p>
  </header>

export default CardHeader
