import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Artwork } from '../interfaces/Artwork';
import { fetchArtImageById } from '../services/ArtService';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

const ArtWorkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null); // reset error on new fetch

    fetchArtImageById(Number(id))
      .then((data) => {
        console.log('Fetched image:', data);
        setArtwork(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load artwork.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner/>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!artwork) return <p className="text-center">Artwork not found</p>;

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
      <Button
        onClick={() => navigate(-1)}
        label={'← Back to Gallery'}
        additionalClasses="hover:bg-pink-400"
      />
    </div>
  );
};

export default ArtWorkDetail;
