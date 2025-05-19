import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import { fetchArtImages } from '../services/ArtService';
import type { Artwork } from '../interfaces/Artwork';
import Spinner from '../components/Spinner';

const Art = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtImages()
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-1">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
      <Gallery artworks={artworks} />
    </div>
  );
};

export default Art;
