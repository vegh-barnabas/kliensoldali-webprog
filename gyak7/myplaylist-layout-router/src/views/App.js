import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import { Layout } from "./layouts/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/playlists" element={<Playlists />}>
            <Route path=":playlist/" element={<Playlists />}>
              <Route path=":track" element={<Playlists />} />
            </Route>
          </Route>
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/tracks" element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
