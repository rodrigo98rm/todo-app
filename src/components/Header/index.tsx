import styles from './styles.module.css';
import todoLogo from '../../assets/todo-logo.svg';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={todoLogo} />
    </div>
  );
}
