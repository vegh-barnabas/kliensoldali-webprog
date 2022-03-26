import cn from "classnames";

function PlaylistList({ playlists }) {
  const active = 3;

  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {playlists.map((playlist) => (
          <div
            className={cn("item", { active: playlist.id === active })}
            key={playlist.id}
          >
            <i className="large compact disc middle aligned icon"></i>
            <div className="content">
              <p className="header">{playlist.title}</p>
              <div className="description">{playlist.tracks.length} songs</div>
            </div>
          </div>
        ))}
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <p className="header">New</p>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistList;
