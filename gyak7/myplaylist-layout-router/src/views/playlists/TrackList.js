import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

export function TrackList({ playlist, selectedTrackId, onSelect }) {
  // console.log(playlist);

  if (playlist == null) return <></>;
  else
    return (
      <>
        <h3>{playlist.title}</h3>
        <div className="ui very relaxed selection list">
          {playlist.tracks.map((track) => (
            <Link
              className={cn("item", { active: track.id === selectedTrackId })}
              key={track.id}
              onClick={() => onSelect(track.id)}
              to={`/playlists/${playlist.id}/${track.id}`}
            >
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <div className="header">{track.title}</div>
                <div className="description">{track.artist}</div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
}
