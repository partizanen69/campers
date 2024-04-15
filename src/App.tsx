import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AppStyled, NavStyled } from "./App.styled";
import { Home } from "./pages/Home/Home";
import { Suspense, lazy } from "react";

const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

export const App = () => {
  return (
    <AppStyled>
      <NavStyled>
        <Link to="/">Home</Link>
        <Link to="catalog">Catalog</Link>
        <Link to="favorites">Favorites</Link>
      </NavStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AppStyled>
  );
};
