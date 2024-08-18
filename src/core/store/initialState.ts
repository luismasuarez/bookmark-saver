import { TBookmark } from "../types";

export interface IBookmarkState {
  bookmarks: TBookmark[] | null;
}

const initialState: IBookmarkState = {
  bookmarks: null,
};

export default initialState;
