import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

export interface Task {
  description: string;
  done: boolean;
}

const tasksMock: Task[] = [
  {
    description: 'Send emails',
    done: false,
  },
  {
    description: 'Wash dishes',
    done: true,
  },
  {
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(tasksMock);

  function addTask(description: string) {
    const newTask = {
      description,
      done: false,
    };

    setTasks((oldTasks) => {
      return [newTask, ...oldTasks];
    });
  }

  function deleteTask(index: number) {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <div className={styles.container}>
      <Header />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
