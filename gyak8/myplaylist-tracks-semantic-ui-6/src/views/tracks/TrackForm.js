import { useEffect, useState } from "react";
import { Modal } from "semantic-ui-react";

const Field = ({ label, placeholder, name, onInput, ...attrs }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input name={name} onInput={onInput} type="text" placeholder={placeholder} {...attrs} />
    </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ open, onClose, onSubmit, track }) {
  const [formState, setFormState] = useState(defaultState);

  useEffect(() => {
    if (open) {
      setFormState({ ...defaultState, ...track });
    }
  }, [open, track]);

  const handleInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  // console.log(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    onSubmit(formState);
    onClose();
  };

  return (
    <Modal as="form" className="ui modal" open={open} onClose={onClose} onSubmit={handleSubmit}>
      {/* <div className="ui modal"> */}
      <i className="close icon" onClick={onClose}></i>
      <div className="header">Add new Track</div>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="three fields">
              <Field
                onInput={handleInput}
                value={formState.artist}
                label="Author"
                placeholder="John Williams"
                name="artist"
                required
              />
              <Field
                onInput={handleInput}
                value={formState.title}
                label="Track name"
                placeholder="Imperial March"
                name="title"
                required
              />
              <Field onInput={handleInput} value={formState.length} label="Length" placeholder="3:44" name="length" />
            </div>
            <div className="three fields">
              <Field
                onInput={handleInput}
                value={formState.spotifyURL}
                label="Spotify URL"
                placeholder="https://"
                name="spotifyURL"
              />
              <Field
                onInput={handleInput}
                value={formState.lyricsURL}
                label="Lyrics URL"
                placeholder="https://"
                name="lyricsURL"
              />
              <Field
                onInput={handleInput}
                value={formState.chordsURL}
                label="Guitar tab URL"
                placeholder="https://"
                name="chordsURL"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="ui black deny button" onClick={onClose}>
          Cancel
        </button>
        <button className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </button>
      </div>
      {/* </div> */}
    </Modal>
  );
}
