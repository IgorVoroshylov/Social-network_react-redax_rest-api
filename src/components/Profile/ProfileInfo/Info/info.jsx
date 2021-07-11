import styles from '../../profile.module.css'

const Contact = (props) => {
   return(
      <div className={styles.contact}>
         {props.contactItem[1] ?
            <div>{props.contactItem[0]}: <a target="_blank" rel="noreferrer" href={props.contactItem[1]}>{props.contactItem[1]}</a></div>
            :
            null
         }
      </div>
   )
}

const InfoBlock = (props) => {
   return(
      <div className={styles.information}>
         <div className={styles.infoItem}><span>{props.userProfile.fullName}</span></div>
         <div className={styles.infoItem}>Id: <span>{props.userProfile.userId}</span></div>
         <div className={styles.infoItem}>aboutMe: <span>{props.userProfile.aboutMe}</span></div>
         <div className={styles.infoItem}>Looking for a job: <span>{ props.userProfile.lookingForAJob ? 'yes' : 'no' }</span></div>
         {
            props.userProfile.lookingForAJob ?
            <div className={styles.infoItem}>My skills: <span>{props.userProfile.lookingForAJobDescription}</span></div> : null
         }
         <div className={styles.infoItem}>
            <span>Contacts:</span> {Object.entries(props.userProfile.contacts).map(contact => <Contact key={contact[0]} contactItem={contact} />)}
         </div>
         {
            props.isOwner ? <div><button onClick={() => { props.setEditMode(true) }}>edit</button></div> : null
         }
      </div>
   )
}

export default InfoBlock;