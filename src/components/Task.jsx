export default function Task({ task: { id, title, state } }) {
  return (
    <div className='list-item'>
      <label htmlFor='title' className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          placeholder='Input title'
        />
      </label>
    </div>
  );
}
