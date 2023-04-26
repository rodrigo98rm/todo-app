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
  deleteTask: (index: number) => void;
  toggleTaskStatus: (index: number) => void;
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

export function TaskList({
  tasks,
  deleteTask,
  toggleTaskStatus,
}: TaskListProps) {
  function handleDeleteTask(index: number) {
    deleteTask(index);
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <HeaderCounter
          title="Tarefas criadas"
          count={tasks.length.toString()}
          color="blue"
        />
        <HeaderCounter
          title="Concluídas"
          count={`${tasks.filter((t) => t.done).length} de ${tasks.length}`}
          color="purple"
        />
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
          {tasks.map((task, index) => (
            <div
              key={task.description}
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
                onChange={(e) => {
                  toggleTaskStatus(index);
                }}
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
              <button
                className={styles.deleteTask}
                onClick={() => handleDeleteTask(index)}
              >
                <Trash size={24} />
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
