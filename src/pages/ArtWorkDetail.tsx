import { useParams, useNavigate } from 'react-router-dom';
import type { Artwork } from '../interfaces/Artwork';
import { getArtworkByIdUrl } from '../api/artEndpoints';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';

const ArtWorkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl: string = getArtworkByIdUrl(id!);
  const { data: artwork, loading, error } = useFetch<Artwork>(apiUrl);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!artwork) return <p className="text-center">Artwork not found</p>;

  return (
    <section aria-labelledby="detail-heading" className="max-w-xl mx-auto p-4">
      <h2 id="detail-heading" className="sr-only">Details about artwork {artwork.title}</h2>
      <img
        src={artwork.url}
        alt={artwork.title || `Artwork ${id}`}
        className="mx-auto mb-4 rounded shadow-md"
      />
      <div className="text-left text-gray-700">
        <h1 className="text-lg font-bold">{artwork.title}</h1>
        <p className=" text-sm">{artwork.year}</p>
        <p className="text-gray-700 text-sm">{artwork.description}</p>
      </div>
      <Button
        onClick={() => navigate(-1)}
        label={'← Back to Gallery'}
        additionalClasses="hover:bg-pink-400"
      />
    </section>
  );
};

export default ArtWorkDetail;
