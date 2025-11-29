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
  args: {
    tasks: [
      //   {
      //     id: '1',
      //     title: 'Task 1',
      //     state: 'TASK_INBOX',
      //   },
      //   {
      //     id: '2',
      //     title: 'Task 2',
      //     state: 'TASK_INBOX',
      //   },
      //   {
      //     id: '3',
      //     title: 'Task 3',
      //     state: 'TASK_INBOX',
      //   },
      //スプレッド構文
      {
        ...TaskStories.Default.args.task,
        id: '1',
        title: 'Task 1',
      },
      {
        ...TaskStories.Default.args.task,
        id: '2',
        title: 'Task 2',
      },
      {
        ...TaskStories.Default.args.task,
        id: '3',
        title: 'Task 3',
      },
      {
        ...TaskStories.Default.args.task,
        id: '4',
        title: 'Task 4',
      },
      {
        ...TaskStories.Default.args.task,
        id: '5',
        title: 'Task 5',
      },
      {
        ...TaskStories.Default.args.task,
        id: '6',
        title: 'Task 6',
      },
    ],
  },
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
