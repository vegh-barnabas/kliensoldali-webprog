import React from "react";

import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
import { Layout } from "./layouts/Layout";

export function App() {
  return (
    <Layout>
      <Home />
      <Playlists />
      <Tracks />
      <Search />
    </Layout>
  );
}
