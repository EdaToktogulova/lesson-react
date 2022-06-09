import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

   return (
      <div className={classes.item}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU'></img>
         { props.message }
         <div>
            <span>{ props.like }</span>
         </div>
      </div>
   );
}

export default Post;
