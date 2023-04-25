import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
