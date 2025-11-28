const { createSlice } = require('@reduxjs/toolkit');
const { create } = require('storybook/internal/theming');

const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

const TaskSlice = createSlice({
  name: 'taskbox',
  initialState: {},
});
