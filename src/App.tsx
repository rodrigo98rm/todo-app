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
    done: true,
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

  function toggleTaskStatus(index: number) {
    const [taskToModify] = tasks.splice(index, 1);

    taskToModify.done = !taskToModify.done;

    if (!taskToModify.done) {
      // Task not done, put it back on top of the list
      setTasks([taskToModify, ...tasks]);
    } else {
      // Send task to bottom of the list
      setTasks([...tasks, taskToModify]);
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <CreateTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </div>
  );
}

export default App;
