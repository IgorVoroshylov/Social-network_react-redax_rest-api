import React from 'react'
import styles from './post.module.css';

function Post(props) {
   return (
      <div>
         <div className={styles.item}>
            <img src={props.userPhoto} alt="oh no..." />
            <p className={styles.post_text}>{props.message}</p>
         </div>
         <span className={styles.likeCount}>Like {props.like}</span>
      </div>
   )
}

export default Post;