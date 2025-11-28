import Task from './Task';

export default {
  Components: Task,
  title: 'Task',
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'test task',
      state: 'TASK_INBOX',
    },
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
