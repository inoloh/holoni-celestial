import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <div className="space-y-2 text-center sm:text-left">
          <p className="">hello and welcome to helenas world</p>
          <div className="card">
            <button
              className="border-purple-1000 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..."
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
