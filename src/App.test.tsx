import React from 'react';
import { render, screen } from '@testing-library/react';
import TestingApp from './TestingApp';

test('renders learn react link', () => {
  render(<TestingApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
