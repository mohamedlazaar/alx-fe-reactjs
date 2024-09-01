import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoElements = screen.getAllByRole('listitem');
  expect(todoElements.length).toBe(3);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: 'Add Todo' });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoElements = screen.getAllByRole('listitem');
  expect(todoElements.length).toBe(4);
  expect(todoElements[3].textContent).toContain('New Todo');
});

// ... other tests for toggling and deleting todos