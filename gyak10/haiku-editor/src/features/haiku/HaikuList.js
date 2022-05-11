import { useDispatch, useSelector } from "react-redux";
import { removeHaiku, selectHaiku, selectHaikus } from "./haikuSlice";

export const HaikuList = () => {
  const { haikus, selectedIndex } = useSelector(selectHaikus);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Haiku list</h2>
      <div>
        {haikus.map((haiku, i) => (
          <pre key={i} onClick={() => dispatch(selectHaiku(i))}>
            {haiku}
          </pre>
        ))}

        {selectedIndex !== null && (
          <>
            <button onClick={() => dispatch(removeHaiku())}>Remove</button>
          </>
        )}
      </div>
    </div>
  );
};
