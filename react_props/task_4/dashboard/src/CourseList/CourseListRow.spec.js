import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  test('renders one th with colspan=2 when isHeader=true and textSecondCell=null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Test header" />);
    const cell = screen.getByText(/test header/i);
    expect(cell.tagName).toBe('TH');
    expect(cell).toHaveAttribute('colspan', '2');
  });

  test('renders two th when isHeader=true and textSecondCell provided', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
    const cells = screen.getAllByRole('columnheader');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('Header1');
    expect(cells[1]).toHaveTextContent('Header2');
  });

  test('renders two td elements when isHeader=false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />);
    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('Data1');
    expect(cells[1]).toHaveTextContent('Data2');
  });
});
