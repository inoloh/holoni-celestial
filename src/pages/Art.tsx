import Gallery from '../components/Gallery';
import { getAllArtworksUrl } from '../api/artEndpoints';
import type { Artwork } from '../interfaces/Artwork';
import Spinner from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';
import { useCallback } from 'react';

const Art = () => {
  const apiUrl: string = getAllArtworksUrl();
  const transform = useCallback((data: { artworks: Artwork[] }) => data.artworks, []);
  const { data, loading, error } = useFetch<Artwork[], { artworks: Artwork[] }>(apiUrl, transform);

  const artworks = data ?? [];

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (loading) {
    return (
      <div className="flex justify-center items-center flex-1">
        <Spinner />
      </div>
    );
  }

  return (
    <section
      aria-labelledby="gallery-heading"
      className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4"
    >
      <h2 id="gallery-heading" className="sr-only">
        Artwork Gallery
      </h2>
      <Gallery artworks={artworks!} />
    </section>
  );
};

export default Art;
