import { useEffect, useState } from "react";
import { exampleTracks } from "../domain/track";

const { createContext } = require("react");

export const tracksServiceContext = createContext();

// console.log(tracksServiceContext);

const useTracksService = () => {
  // Data
  const [tracks, setTracks] = useState([]);

  // Effects
  useEffect(() => {
    const loadedTracks = JSON.parse(window.localStorage.getItem("tracks")) || exampleTracks;
    setTracks(loadedTracks);
  }, []);

  // Operations
  const addTrack = (track) => {
    console.log(track);
    track.id = Math.random().toString();
    setTracks([...tracks, track]);
  };

  useEffect(() => {
    window.localStorage.setItem("tracks", JSON.stringify(tracks));
  }, [tracks]);

  const editTrack = (track) => {
    setTracks(tracks.map((tr) => (tr.id !== track.id ? tr : track)));
  };

  const deleteTrack = (track) => {
    setTracks(tracks.filter((tr) => tr.id !== track.id));
  };

  // Service
  const service = { tracks, addTrack, editTrack, deleteTrack };

  return service;
};

export const TracksServiceProvider = ({ children }) => {
  const service = useTracksService();
  return <tracksServiceContext.Provider value={service}>{children}</tracksServiceContext.Provider>;
};
