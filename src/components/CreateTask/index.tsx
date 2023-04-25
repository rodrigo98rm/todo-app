import { PlusCircle } from '@phosphor-icons/react';
import styles from './styles.module.css';

export function CreateTask() {
  return (
    <form className={styles.container}>
      <textarea placeholder="Adicione uma nova tarefa"></textarea>
      <button>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
