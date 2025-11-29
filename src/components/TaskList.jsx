import { useSelector } from 'react-redux';
import Task from './Task';
import PropType from 'prop-types';

export default function TaskList({ Loading, tasks }) {
  const tasks = useSelector((state) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((task) => task.id === 'TASK_PINNED'),
      ...state.taskbox.tasks.filter((task) => task.id !== 'TASK_PINNED'),
    ];
  });

  const loadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox'></span>
      <span className='glow-text'>
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (Loading) {
    return (
      <div className='list-items'>
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className='list-items'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <p className='title-message'>You have no tasks</p>
          <p className='subtitle-message'>Sit back and relax</p>
        </div>
      </div>
    );
  }
  return (
    <div className='list-item'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.PropTypes.task).isRequired,
};

TaskList.defaultProps = {
  loading: false,
};
