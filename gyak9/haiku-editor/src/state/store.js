import { configureStore, createAction } from "@reduxjs/toolkit";

const initialState = {
  editor: "",
  selectedIndex: null,
  haikus: [
    `Téged vártalak
  Mint hajnali fényt éjjel
  Félve-remélve`,
  ],
};

export const changeText = createAction("haiku/changeText");
// console.log(changeText("valami"));

const reducer = (state = initialState, action) => {
  // if (action.type === "CHANGE_TEXT") {
  //   return {
  //     ...state,
  //     editor: action.payload,
  //   };
  // }

  if (action.type === changeText.toString()) {
    return {
      ...state,
      editor: action.payload,
    };
  }

  return state;
};

export const store = configureStore({
  reducer,
});
