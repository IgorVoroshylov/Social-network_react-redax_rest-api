import React from 'react'
import styles from './form.module.css'

export const InputForm = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={styles.form_control + " " + (hasError ? styles.error : "")} >
         <div>
            { hasError && <span>{meta.error}</span> }
         </div>
         <input {...input} {...props}/>
      </div>
   )
}

//! for example
export const TextAreaForm = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={styles.form_control + " " + (hasError ? styles.error : "")} >
         <div>
            { hasError && <span>{meta.error}</span> }
         </div>
         <textarea {...input} {...props}/>
      </div>
   )
}