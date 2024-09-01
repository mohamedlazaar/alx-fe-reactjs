// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Todo List')).toBeInTheDocument();
  });

  it('adds new todo', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('Add new todo');
    const addButton = getByText('Add');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(addButton);
    expect(getByText('New todo')).toBeInTheDocument();
  });

  it('toggles todo', () => {
    const { getByText } = render(<TodoList />);
    const todo = getByText('Buy milk');
    const toggleButton = getByText('Toggle');
    fireEvent.click(toggleButton);
    expect(todo).toHaveStyle('textDecoration: line-through');
  });

  it('deletes todo', () => {
    const { getByText, queryByText } = render(<TodoList />);
    const todo = getByText('Walk the dog');
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(queryByText('Walk the dog')).not.toBeInTheDocument();
  });
});