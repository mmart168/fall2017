import React from 'react'
import styles from './Card.css'

const CardFooter = (props) =>
  <footer className='df ff-row jc-sb'>
    <div>
      <button className={'fa fa-heart-o mas f2 ' + props.iconColor} onClick={props.toggleFavorited}>
        <span className='assistive-text'>Favorite this post</span>
      </button>
      <button className='fa fa-comment-o mas f2 grey-text'>
        <span className='assistive-text'>Comment on this post</span>
      </button>
    </div>
    <button className='fa fa-ellipsis-h mas f2 grey-text'>
      <span className='assistive-text'>More options</span>
    </button>
  </footer>

export default CardFooter
