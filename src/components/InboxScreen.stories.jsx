import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from 'storybook/internal/test';
import store from '../lib/store';
import TInboxScreen from './InboxScreen';
import store from './lib/store';
import { MockedState } from './TaskList.stories';
import { rest } from 'msw';

export default {
  Components: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findAllByTestId('loading'));
    await waitFor(async () => {
      await fireEvent.click(canvas.getAllByText('pinTask-1'));
      await fireEvent.click(canvas.getAllByText('pinTask-3'));
      await fireEvent.click(canvas.getAllByText('archiveTask-5'));
    });
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, ctx) => {
            return res(ctx.status(403));
          }
        ),
      ],
    },
  },
};
