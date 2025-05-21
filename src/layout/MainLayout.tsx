import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center bg-gradient-to-br from-[#fff8bb] to-[#acaffe]"
    >
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
