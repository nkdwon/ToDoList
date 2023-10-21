import styles from './TaskApp.module.css'
/* import { useState } from 'react' */

function Container(){
   /*  const [tasks, setTask] = useState([]) */

    return (
        <div className={styles.section}>
            <h2>Tasks</h2>
            <form className={styles.Form}>
                <input type="text" id='textTask' placeholder='Digite a Tarefa'/>
                <button onClick=''>+</button>
            </form>
        </div>
    )
}

export default Container