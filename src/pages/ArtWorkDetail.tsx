import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Artwork } from '../interfaces/Artwork';
import { fetchArtImageById } from '../services/ArtService';

const ArtWorkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArtImageById(Number(id))
      .then((data) => {
        console.log('Fetched image:', data);
        setArtwork(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!artwork) return <p>Artwork not found</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <img
        src={artwork.url}
        alt={artwork.title || `Artwork ${id}`}
        className="mx-auto mb-4 rounded shadow-md"
      />
      <div className="text-left">
        <h1 className="text-lg font-bold">{artwork.title}</h1>
        <p className="text-gray-700 text-sm">{artwork.year}</p>
        <p className="text-gray-700 text-sm">{artwork.description}</p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 hover:bg-pink-400 rounded text-sm"
      >
        ← Back to Gallery
      </button>
    </div>
  );
};

export default ArtWorkDetail;
