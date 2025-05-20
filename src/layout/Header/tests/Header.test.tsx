import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../index';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Header (mobile view)', () => {
  beforeEach(() => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
  });

  it('shows hamburger and toggles nav menu on click', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const button = screen.getByLabelText('Toggle menu');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Art' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('closes navbar when a link is clicked', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const button = screen.getByLabelText('Toggle menu');
    await userEvent.click(button);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeVisible();

    const link = screen.getByRole('link', { name: 'Art' });
    await userEvent.click(link);

    expect(nav).toHaveClass('hidden');
  });
});

describe('Header (desktop view)', () => {
  it('shows nav links', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Art' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });
});
