import { TAction } from "./actions";
import { IBookmarkState } from "./initialState";
import * as types from "./types";

const reducer = (state: IBookmarkState, action: TAction): IBookmarkState => {
  const { type } = action;
  switch (type) {
    case types.SET_BOOKMARKS_LIST:
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
