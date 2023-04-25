import { ClipboardText, Trash } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { Task } from '../../App';

interface HeaderCounterProps {
  title: string;
  count: string;
  color: 'blue' | 'purple';
}

interface TaskListProps {
  tasks: Task[];
}

function HeaderCounter({ title, count, color }: HeaderCounterProps) {
  return (
    <div>
      <span
        className={
          color === 'blue' ? styles.headerItemBlue : styles.headerItemPurple
        }
      >
        {title}
      </span>
      <span className={styles.headerNumber}>{count}</span>
    </div>
  );
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <HeaderCounter title="Tarefas criadas" count="0" color="blue" />
        <HeaderCounter title="Concluídas" count="2 de 5" color="purple" />
      </div>
      {/* Empty View */}
      {!tasks && (
        <div className={styles.emptyView}>
          <ClipboardText size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
      {/* Task List */}
      {!!tasks && (
        <>
          {tasks.map((task) => (
            <div
              className={
                task.done
                  ? styles.taskContainerChecked
                  : styles.taskContainerUnchecked
              }
            >
              <input
                className={styles.taskCheckbox}
                type="checkbox"
                name=""
                id=""
                checked={task.done}
              />
              <p
                className={
                  task.done
                    ? styles.taskDescriptionChecked
                    : styles.taskDescriptionUnchecked
                }
              >
                {task.description}
              </p>
              <button className={styles.deleteTask}>
                <Trash size={24} />
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
