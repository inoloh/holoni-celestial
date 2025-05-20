/* eslint-disable react-refresh/only-export-components */
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useFetch } from '../useFetch';
import { describe, it, expect, afterEach } from 'vitest';

function TestComponent({
  url,
  transform,
}: {
  url: string;
  transform?: (data: unknown) => unknown;
}) {
  const { data, loading, error } = useFetch(url, transform);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <pre>{JSON.stringify(data)}</pre>;
}

describe('useFetch', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows loading initially and then renders fetched data', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ foo: 'bar' }),
        }),
      ),
    );

    render(<TestComponent url="/test-url" />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/bar/)).toBeInTheDocument());
  });

  it('renders error message if fetch fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: false,
        }),
      ),
    );

    render(<TestComponent url="/error-url" />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/network response was not ok/i)).toBeInTheDocument(),
    );
  });

  it('applies transform function to fetched data', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ value: 5 }),
        }),
      ),
    );

    const transform = (data: unknown) => {
      const typedData = data as { value: number };
      return { doubled: typedData.value * 2 };
    };

    render(<TestComponent url="/transform-url" transform={transform} />);

    await waitFor(() => expect(screen.getByText(/doubled/i)).toBeInTheDocument());
    expect(screen.getByText(/10/)).toBeInTheDocument();
  });
});
