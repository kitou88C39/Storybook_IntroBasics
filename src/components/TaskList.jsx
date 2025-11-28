export default function TaskList({ Loading, tasks }) {
  if (Loading) {
    return <div className='list-item'>Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div className='list-item'>Empty...</div>;
  }
  return <div></div>;
}
