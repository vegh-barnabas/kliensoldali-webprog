import React from "react";

export function TrackDetails({ activeTrack }) {
  console.log(activeTrack);

  if (!activeTrack) return <></>;
  else
    return (
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img
                src={activeTrack.thumbnailURL}
                alt={activeTrack.title + " cover"}
              />
            </div>
            <div className="content">
              <div className="header">{activeTrack.title}</div>
              <div className="meta">
                <span>{activeTrack.artist}</span>
                <span>{activeTrack.length}</span>
              </div>
              <div className="extra">
                {activeTrack.spotifyURL && (
                  <a
                    href={activeTrack.spotifyURL}
                    className="ui button tiny green button"
                  >
                    <i className="spotify icon"></i>
                    Listen on Spotify
                  </a>
                )}
                {activeTrack.chordsURL && (
                  <a
                    href={activeTrack.chordsURL}
                    className="ui button tiny orange button"
                  >
                    <i className="guitar icon"></i>
                    Show chords
                  </a>
                )}
                {activeTrack.lyricsURL && (
                  <a
                    href={activeTrack.lyricsURL}
                    className="ui button tiny teal button"
                  >
                    <i className="microphone icon"></i>
                    Show lyrics
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
