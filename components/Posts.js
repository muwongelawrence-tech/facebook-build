import React from 'react';
import firebase from "firebase";

// import { useCollection } from  "react-firebase-hooks/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';

function Posts() {

    const [ realtimePosts ] = useCollection(
        db.collection("posts").orderBy("timestamp" , "desc"),
    );

   // console.log(realtimePosts);

    return (

        <div className = "">
            { realtimePosts.docs.map(post => (
                <Post 
                 key = {post.id}
                 name = {post.data().name}
                 message = {post.data().message}
                 email = {post.data().email}
                 image = {post.data().image}
                 timestamp = {post.data().timestamp}
                 postImage = {post.data().postImage}
                 />
            ))}
        </div>
    ); 
}

export default Posts;
