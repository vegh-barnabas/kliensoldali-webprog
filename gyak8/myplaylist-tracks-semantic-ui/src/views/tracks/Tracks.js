import React, { useState } from "react";
import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";

export function Tracks() {
  const [open, setOpen] = useState(false);
  const [tracks, setTracks] = useState(exampleTracks);
  const [editedTrack, setEditedTrack] = useState({});

  // Event handlers
  const handleSetOpen = () => {
    setEditedTrack({});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (track) => {
    if (track.id) {
      setTracks(tracks.map((tr) => (tr.id !== track.id ? tr : track)));
    } else {
      console.log(track);
      track.id = Math.random().toString();
      setTracks([...tracks, track]);
    }
  };

  const handleDelete = (track) => {
    setTracks(tracks.filter((tr) => tr.id !== track.id));
  };

  const handleEdit = (track) => {
    // console.log(track);

    setEditedTrack(track);
    setOpen(true);
  };

  return (
    <>
      <div className="ui container">
        <button onClick={handleSetOpen} className="ui right floated green button" id="newModal">
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track key={track.id} track={track} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm open={open} onClose={handleClose} onSubmit={handleSubmit} track={editedTrack} />
    </>
  );
}
