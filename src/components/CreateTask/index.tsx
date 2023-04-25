import { PlusCircle } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface CreateTaskProps {
  addTask: (description: string) => void;
}

export function CreateTask({ addTask }: CreateTaskProps) {
  const [description, setDescription] = useState('');

  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();

    addTask(description);

    setDescription('');
  }

  const isNewTaskEmpty = !description;

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        handleCreateTask(e);
      }}
    >
      <textarea
        placeholder="Adicione uma nova tarefa"
        onChange={handleDescriptionChange}
        value={description}
        required
      ></textarea>
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
