import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
   return (
      <div>
         <div>
            <img src='https://tvbrics.com/upload/resize_cache/iblock/e30/800_500_0/e30f1f825b2bf1150b77c6181d671b30.jpg'></img>
         </div>
         <div>
            ava + decc
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile;
