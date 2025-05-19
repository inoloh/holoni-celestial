import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const assetUrl: string = import.meta.env.VITE_UI_ASSETS_BASE_URL as string;
const bgUrl: string = assetUrl + 'background-home.png';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgUrl})`, backgroundPosition: 'center 25%' }}
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
