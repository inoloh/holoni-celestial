const assetUrl: string = import.meta.env.VITE_UI_ASSETS_BASE_URL as string;
const aboutUrl: string = assetUrl + 'helena.jpeg';

const About = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-md mx-auto px-6 py-20 text-white text-center flex flex-col items-center gap-6"
    >
      <h2 id="about-heading" className="sr-only">
        About the artist
      </h2>
      <img src={aboutUrl} alt={'helena'} className="rounded scale-100" />
      <p className="text-lg leading-relaxed">Jag heter Helena och det här är min konst.</p>
    </section>
  );
};

export default About;
