import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders a div wrapping BodySection', () => {
  const { container } = render(
    <BodySectionWithMarginBottom title="Test">
      <p>Test child</p>
    </BodySectionWithMarginBottom>
  );
  const wrapperDiv = container.firstChild;
  expect(wrapperDiv.tagName).toBe('DIV');
  expect(screen.getByText('Test child')).toBeInTheDocument();
});

test('renders BodySection component inside', () => {
  render(
    <BodySectionWithMarginBottom title="Test">
      <p>Inner content</p>
    </BodySectionWithMarginBottom>
  );
  expect(screen.getByText('Inner content')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test');
});
