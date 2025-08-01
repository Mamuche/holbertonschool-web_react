import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

const testList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Latest notification</strong>' } }
];

describe('Notifications component', () => {

  test('always displays "Your notifications" text', () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('does NOT display list, text or button when displayDrawer=false', () => {
    render(<Notifications displayDrawer={false} list={testList} />);
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('renders notifications paragraph when displayDrawer=true', () => {
    render(<Notifications displayDrawer={true} list={testList} />);
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the close button when displayDrawer=true', () => {
    render(<Notifications displayDrawer={true} list={testList} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test('renders 3 list items when displayDrawer=true', () => {
    render(<Notifications displayDrawer={true} list={testList} />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  test('logs to console when click close button', () => {
    console.log = jest.fn();
    render(<Notifications displayDrawer={true} list={testList} />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });

  test('displays "No new notification for now" when list is empty', () => {
    render(<Notifications displayDrawer={true} list={[]} />);
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
  });
});
