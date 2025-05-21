import { getAssetByName } from '../api/artEndpoints';
import { useFetch } from '../hooks/useFetch';
import type { Asset } from '../interfaces/Asset';
import Spinner from '../components/Spinner';

const About = () => {
  const name: string = 'helena.jpeg';
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
      className="max-w-md mx-auto px-6 py-20 text-gray-700 text-center flex flex-col items-center gap-4"
    >
      <h2 id="about-heading" className="sr-only">
        About the artist
      </h2>
      <img src={asset.url} alt={'helena'} className="rounded-full scale-100 brightness-90 mb-6" />
      <p className="text-xl leading-relaxed">
        Hej jag heter Helena och det här är mitt konstgalleri.
      </p>
      <p>
        Jag byggde den här lilla sidan för att visa: driv, att jag är självgående och ja, för att
        göra något som kändes kul att bygga och för att kunna visa lite mer vem jag är.
      </p>
      <p>
        Sidan är byggd i React, deployad i Azure som en Static web app - den är headless och
        serverless. Den lilla backend jag ändå har är ett Azure functions API. Github actions tar
        hand om CI och deployment och bilder ligger i en Blob storage.
      </p>
      <p>
        Jag har fokuserat på att visa bredd - snarare än superkomplexitet. Jag har tänkt extra på
        komponenter, accessibility och på bra struktur i koden. Den här typen av minimal backend är
        ny för mig och jag tog mig an det med liv och lust. Jag tog med TailwindCSS och Vitest som
        jag aldrig använt förut, och även om inte alla delar hann få egna tester så finns det
        uppbyggt och körs i CI pipeline vid PR eller commit i Github. Prettier tar hand om
        formattering.
      </p>
      <p>
        Sidan är under utveckling, och ses bäst i chrome eller på en iphone, den är byggd för att
        vara responsiv - men OBS - Safari vill inte den här hemsidan väl ännu.
      </p>
      <p>
        Och konsten? Skapad i Blender och finns att köpa på Östhlings i Varberg.
      </p>
    </section>
  );
};

export default About;
