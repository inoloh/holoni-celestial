import Sphere from '../components/Sphere';

const Home = () => {
  return (
    <section
      aria-labelledby="home-heading"
      className="flex-1 flex items-center justify-center text-center p-4"
    >
      <div className="relative flex items-center justify-center">
        <Sphere
          size="size-40"
          color="from-pink-400 from-40% to-fuchsia-700"
          className="hidden md:block absolute -top-20 left-120"
        />
        <Sphere
          size="size-20"
          color="from-pink-400 from-40% to-fuchsia-700"
          className="hidden md:block absolute bottom-[-4rem] left-100"
        />
        <Sphere
          size="size-[400px]"
          color="from-pink-400 from-40% to-fuchsia-700"
          className="hidden md:block mr-10"
        />
        <h1 id="home-heading" className="hidden md:block text-[15rem] text-white">
          holoni
        </h1>
        <Sphere
          size="size-[250px]"
          color="from-pink-400 from-40% to-fuchsia-700"
          className="md:hidden flex items-center justify-center -mt-50"
        >
          <h1 id="home-heading" className="text-5xl sm:text-6xl text-white">
            holoni
          </h1>
        </Sphere>
      </div>
    </section>
  );
};
export default Home;
