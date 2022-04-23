import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../state/store";
import styles from "./Editor.module.css";

export const Editor = () => {
  const isHaiku = false;

  const text = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    // dispatch({
    //   type: "CHANGE_TEXT",
    //   payload: e.target.value,
    // });

    dispatch(changeText(e.target.value));
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
        onInput={handleInput}
      ></textarea>
      <p>Vowels per row: 1,2,3</p>
      <button>Add</button>
      <button>Save</button>
    </div>
  );
};
