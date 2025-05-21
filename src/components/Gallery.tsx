import { Link } from 'react-router-dom';
import type { Artwork } from '../interfaces/Artwork';

type GalleryProps = {
  artworks: Artwork[];
};

const Gallery = ({ artworks }: GalleryProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
      {artworks.map((art) => (
        <div key={art.id} className="relative group">
          <Link to={`/art/${art.id}`}>
            <img src={art.url} alt={art.title ?? 'Artwork'} />
            {art.title && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold text-center drop-shadow-md">
                  {art.title}
                </span>
              </div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
