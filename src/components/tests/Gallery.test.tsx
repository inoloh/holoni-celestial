import { render, screen } from '@testing-library/react';
import Gallery from '../Gallery';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('Gallery', () => {
  it('renders a grid of artworks', () => {
    const artworks = [
      { id: 1, url: '/image1.jpg', title: 'Something great' },
      { id: 2, url: '/image2.jpg', title: 'Something OK' },
    ];
    render(
      <MemoryRouter>
        <Gallery artworks={artworks} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Something great')).toBeInTheDocument();
    expect(screen.getByAltText('Something OK')).toBeInTheDocument();
  });

    it('renders without crashing when list is empty', () => {
    render(
      <MemoryRouter>
        <Gallery artworks={[]} />
      </MemoryRouter>
    );

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    // TODO what is showing if no artworks? test that
  });

  // TODO test the fetch part
  // TODO test what happens if one artwork fails, should it render the others

});