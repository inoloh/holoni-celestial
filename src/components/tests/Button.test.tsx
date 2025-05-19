import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from '../Button';

describe('Button', () => {
  it('renders the button with correct label', () => {
    render(<Button onClick={() => {}} label="Click me" />);
    expect(screen.getByText('Dont click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} label="Click me" />);
    await userEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
