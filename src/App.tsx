import { Link, Navigate, Route, Routes } from 'react-router-dom';
import {
  AppStyled,
  ContainerStyled,
  ContentContainerStyled,
  NavInner,
  NavStyled,
} from './App.styled';
import { Home } from './pages/Home/Home';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => {
  return (
    <AppStyled>
      {/* <ContainerStyled>
        <ContentContainerStyled> */}
      <NavStyled>
        <NavInner>
          <Link to="/">Home</Link>
          <Link to="catalog">Catalog</Link>
          <Link to="favorites">Favorites</Link>
        </NavInner>
      </NavStyled>
      {/* </ContentContainerStyled>
      </ContainerStyled> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ContainerStyled>
          <ContentContainerStyled>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ContentContainerStyled>
        </ContainerStyled>
      </Suspense>
      <ToastContainer />
    </AppStyled>
  );
};
