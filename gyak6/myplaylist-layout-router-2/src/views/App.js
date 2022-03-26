import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import { Layout } from "./layouts/Layout";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
