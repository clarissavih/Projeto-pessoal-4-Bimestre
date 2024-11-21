import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.bloco}>
            <img src={props.img} />
            <h1 className={styles.name}>{props.name}</h1>
            <hr className={styles.primeiro}/>
            <p className={styles.bio} >{props.bio}</p>
            <hr className={styles.segundo}/>
            <p className={styles.contact}>{props.contact}</p>
            <hr className={styles.terceiro} />
            <p className={styles.email}>{props.email}</p>
            <button><a href={props.instagramUrl}>Instagram</a></button>
        </div>
    )
}