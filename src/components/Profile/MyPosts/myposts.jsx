import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from '../profile.module.css'
import Post from './Post/post'

const NewPostsForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.field} >
         <Field component='textarea' name='newPost' />
         <button>Add new post</button>
      </form>
   )
}

const NewPostsFormRedux = reduxForm({form: 'newPost'})(NewPostsForm); //обертка над формой redux-form

const MyPosts = (props) => {
   const image = props.userProfile.photos.small;
   const postsElement = props.postsData.map(item => <Post key={item.id} message={item.message} userPhoto={image} like={item.like}/>);

   const submit = (formData) => {
      props.addPost(formData.newPost);
      formData.newPost = '';
   }

   return (
      <div className={styles.my_post}>
         <hr/>
         <h3>My post</h3>
         <NewPostsFormRedux onSubmit={submit} />
         <div className={styles.posts}>
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts;
