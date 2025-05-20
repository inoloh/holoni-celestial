const About = () => {
  return (
    <section aria-labelledby="about-heading" className="max-w-md mx-auto px-6 py-20 text-white text-center flex flex-col items-center gap-6">
      <h2 id="about-heading" className="sr-only">About the artist</h2>
      <div className="bg-pink-500 w-full aspect-square rounded shadow-lg"></div>
      <p className="text-lg leading-relaxed">
        Jag heter Helena och det här är min konst.
      </p>
    </section>
  );
};


export default About;
