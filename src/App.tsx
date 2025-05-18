import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layout/MainLayout';
import Art from './pages/Art';
import ArtWorkDetail from './pages/ArtWorkDetail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="art" element={<Art />} />
          <Route path="art/:id" element={<ArtWorkDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
