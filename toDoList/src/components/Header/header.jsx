import styles from './header.module.css'

function Header(){
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>To Do List - Lista de Afazeres</h1>
        <a href="">Concluído</a>
        <a href="">Pendente</a>
        <button>Nova Tarefa</button>
      </nav>
    </header>
  ) 
}

export default Header