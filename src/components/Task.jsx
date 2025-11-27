export default function Task({ task: { id, title, state } }) {
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor='checked' className='checkbox'>
        <input type='checkbox' name='checked' />
      </label>
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
