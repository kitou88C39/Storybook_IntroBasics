const { createSlice, configureStore } = require('@reduxjs/toolkit');

const defaultTasks = [
  { id: '1', title: 'something 1', state: 'TASK_INBOX' },
  { id: '2', title: 'something 2', state: 'TASK_INBOX' },
  { id: '3', title: 'something 3', state: 'TASK_INBOX' },
  { id: '4', title: 'something 4', state: 'TASK_INBOX' },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

export const TaskSlice = createSlice({
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

export const { updateTaskState } = TaskSlice.actions;

const store = configureStore({
  reducer: {
    taskbox: TaskSlice.reducer,
  },
});

export default store;
