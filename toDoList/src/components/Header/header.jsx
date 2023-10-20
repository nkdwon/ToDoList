import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header(){
  return (
    <header className={styles.header}>
      <h1>To Do List - Lista de Afazeres</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/Concluido">Concluído</Link>
        <Link to="/Pendente">Pendente</Link>
        <Link to="/NewTask">Nova Tarefa</Link>
      </nav>
    </header>
  ) 
}

export default Header