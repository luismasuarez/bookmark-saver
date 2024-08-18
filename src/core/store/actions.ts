import { TBookmark } from "../types";
import * as types from "./types";

export type ISetBookmarkList = {
  type: types.SET_BOOKMARKS_LIST;
  payload: TBookmark[];
};

export type TAction = ISetBookmarkList;
