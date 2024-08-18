import { TBookmark } from "../types";

export interface IBookmarkState {
  bookmarks: TBookmark[];
}

const initialState: IBookmarkState = {
  bookmarks: [],
};

export default initialState;
