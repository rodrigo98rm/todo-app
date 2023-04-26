import { PlusCircle } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { ChangeEvent, FormEvent, useState, KeyboardEvent, useRef } from 'react';

interface CreateTaskProps {
  addTask: (description: string) => void;
}

export function CreateTask({ addTask }: CreateTaskProps) {
  const formRef = useRef(null);

  const [description, setDescription] = useState('');

  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();

    addTask(description);

    setDescription('');
  }

  function handleKeyPress(e: KeyboardEvent<HTMLTextAreaElement>) {
    console.log(e.key);
    console.log(e.shiftKey);

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current.requestSubmit();
    }
  }

  const isNewTaskEmpty = !description;

  return (
    <form
      ref={formRef}
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
        onKeyDown={handleKeyPress}
      ></textarea>
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
