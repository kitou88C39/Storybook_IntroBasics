import TaskList from './TaskList';
import * as TaskStories from './Task.stories';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { TaskSlice } from '../lib/store';

export default {
  Components: TaskList,
  title: 'TaskList',
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: TaskSlice.reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export const Default = {
  decorators: [(story) => <Mockstore>{story()}</Mockstore>],
};

export const withPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      {
        id: '6',
        title: 'Task 6(pinned)',
        state: 'TASK_PINNED',
      },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
