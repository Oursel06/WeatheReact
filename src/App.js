import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Accueil from "./component/Accueil.jsx";
import SearchCity from "./component/Searchcity.jsx";
import Meteocity from "./component/Meteocity.jsx";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Accueil />} />
        <Route path="/searchCity" element={<SearchCity />} />
        <Route path="/meteocity/:city" element={<Meteocity />} />
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}
