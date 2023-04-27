import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useEffect, useState } from 'react';

export interface Task {
  description: string;
  done: boolean;
}

const LOCAL_STORAGE_TASKS = 'rodrigo98rm-todo-app-tasks';

function App() {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    const rawTasks = localStorage.getItem(LOCAL_STORAGE_TASKS);
    if (rawTasks) {
      const tasks = JSON.parse(rawTasks);
      setTasks(tasks);
    } else {
      localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify([]));
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    if (tasks !== null) {
      localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(tasks));
    }
  }, [tasks]);

  function addTask(description: string) {
    const newTask = {
      description,
      done: false,
    };

    setTasks((oldTasks) => {
      if (oldTasks === null) return null;
      return [newTask, ...oldTasks];
    });
  }

  function deleteTask(index: number) {
    if (tasks === null) return;

    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  function toggleTaskStatus(index: number) {
    if (tasks === null) return;

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
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      )}
    </div>
  );
}

export default App;
