import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import { fetchArtImages } from '../services/ArtService';
import type { Artwork } from '../interfaces/Artwork';

const Art = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    fetchArtImages()
      .then((data) => {
        console.log('Fetched images:', data);
        setArtworks(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <Gallery artworks={artworks}></Gallery>
      </div>
    </>
  );
};

export default Art;
