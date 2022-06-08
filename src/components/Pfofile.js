import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
   return (
      <div className={classes.content}>
         <div>
            <img src='https://tvbrics.com/upload/resize_cache/iblock/e30/800_500_0/e30f1f825b2bf1150b77c6181d671b30.jpg'></img>
         </div>
         <div>
            ava + decc
         </div>
         <div>
            My post
            <div>
               New post
            </div>
            <div className={classes.posts}>
               <div className={classes.item}>
                  post1
               </div>
               <div className={classes.item}>
                  post2
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile;
