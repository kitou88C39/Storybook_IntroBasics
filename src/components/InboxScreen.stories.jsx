import store from '../lib/store';
import TInboxScreen from './InboxScreen';

export default {
  Components: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {};
