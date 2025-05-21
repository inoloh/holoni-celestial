import { getAssetByName } from "../api/artEndpoints";
import { useFetch } from "../hooks/useFetch";
import type { Asset } from '../interfaces/Asset';
import Spinner from "../components/Spinner";


const About = () => {
  const name: string = "helena.jpeg";
  const apiUrl: string = getAssetByName(name!);
  const { data, loading, error } = useFetch<Asset>(apiUrl);
  
  const asset = data;

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-1">
        <Spinner />
      </div>
    );
  }
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!asset) return <p className="text-center">Asset not found</p>;

  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-md mx-auto px-6 py-20 text-white text-center flex flex-col items-center gap-6"
    >
      <h2 id="about-heading" className="sr-only">
        About the artist
      </h2>
      <img src={asset.url} alt={'helena'} className="rounded-full scale-100 brightness-90" />
      <p className="text-lg leading-relaxed">Jag heter Helena och det här är min konstsida.</p>
    </section>
  );
};

export default About;
