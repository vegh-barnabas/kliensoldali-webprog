/*
  Az useState nem feltétlen szükséges a 4/ii feladat után, mert
  az URL-ből olvassuk ki az aktív elemet
  az URL-be írjuk bele az aktív elemet
  tehát gyakorlatilag az URL tárolja a jelenlegi elemet, és nem a state
  ettől független nem szedtem ki a kódból, hogy látható legyen egyben a dolog
*/

import React, { useState } from "react";

import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackList } from "./TrackList";
import { TrackDetails } from "./TrackDetails";

import { examplePlaylists } from "../../domain/playlist";
import { useParams } from "react-router-dom";

export const Playlists = () => {
  const { playlist } = useParams(); // for URL
  console.log(playlist, typeof playlist);

  const [selectedPlaylistId, setSelectedPlaylistId] = useState(
    parseInt(playlist) // get selected ID from URL
  ); // for changing selected items
  console.log(selectedPlaylistId);

  const playlists = examplePlaylists;

  // Event handlers
  const handleSelectPlaylist = (newPlaylistId) => {
    setSelectedPlaylistId(newPlaylistId);
    console.log("selection event handler called by PlaylistList.js");
  }; // select handler - later it will be useful

  // Computed values
  const selectedPlaylist = playlists.find((pl) => pl.id === selectedPlaylistId);
  // console.log(selectedPlaylist);

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm />
          <PlaylistList
            playlists={playlists}
            selectedPlaylistId={selectedPlaylistId}
            onSelect={handleSelectPlaylist}
          />
        </div>
        <div className="ui ten wide column">
          <TrackList />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};
