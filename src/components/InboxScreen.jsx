import { useEffect } from 'react';
import TaskList from './TaskList';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../lib/store';

export default function InboxScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div className='page lists-show'>
      <nav>
        <h1 className='title-page'>Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  );
}
