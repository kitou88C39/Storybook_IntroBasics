import TaskList from './TaskList';

export default {
  Components: TaskList,
  title: 'TaskList',
};

export const Default = {
  args: {
    tasks: [
      {
        id: '1',
        title: 'Task 1',
        state: 'TASK_INBOX',
      },
      {
        id: '2',
        title: 'Task 2',
        state: 'TASK_INBOX',
      },
      {
        id: '3',
        title: 'Task 3',
        state: 'TASK_INBOX',
      },
    ],
  },
};

export const Pinned = {
  args: {
    task: {
      //   id: '1',
      //   title: 'test task',
      //   state: 'TASK_PINNED',

      //スプレッド構文
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      //   id: '1',
      //   title: 'test task',
      //   state: 'TASK_PINNED',

      //スプレッド構文
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
