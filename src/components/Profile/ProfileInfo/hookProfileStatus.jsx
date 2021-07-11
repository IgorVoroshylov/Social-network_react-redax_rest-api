import React, { useEffect, useState } from 'react'
import styles from '../profile.module.css'

const StatusWithHook = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect( () => {
      setStatus(props.status);
   }, [props.status] );

   const activeteEditMode = () => {
      setEditMode(true);
   };

   const deactiveteEditMode = () => {
      setEditMode(false);
      props.updateUserStatusThunkCreator(status);
   };

   const onStatusChenge = (e) => {
      setStatus(e.target.value);
   };

   return (
      <div className={styles.status}>
         {!editMode && <div onDoubleClick={activeteEditMode}>{props.status}</div> }

         {editMode && <input type="text" autoFocus={true}
                                          onChange={onStatusChenge}
                                          onBlur={deactiveteEditMode}
                                          value={status}
                                          onKeyDown={ (e) => {e.code === 'Enter' && deactiveteEditMode()} }
                                          /> }
      </div>
   )
}

export default StatusWithHook;