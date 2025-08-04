import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

const testList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Latest notification</strong>' } }
];

describe('Notifications component', () => {
  test('renders notifications paragraph', () => {
    const { getByText } = render(<Notifications list={testList}/>);
    const title = getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications list={testList}/>);
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    render(<Notifications list={testList}/>);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  test('logs to console when clic close button', () => {
    console.log = jest.fn();
    render(<Notifications list={testList}/>);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
