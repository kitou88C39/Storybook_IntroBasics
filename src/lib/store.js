const { createSlice } = require('@reduxjs/toolkit');

const defaultTasks = [
  { id: '1', title: 'something1', state: 'TASK_INBOX' },
  { id: '2', title: 'something2', state: 'TASK_INBOX' },
  { id: '3', title: 'something3', state: 'TASK_INBOX' },
  { id: '4', title: 'something4', state: 'TASK_INBOX' },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

const TaskSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const tasks = state.tasks.findIndex((task) => task.id === id);
      if (tasks >= 0) {
        state.tasks[tasks].state = newTaskState;
      }
    },
  },
});
