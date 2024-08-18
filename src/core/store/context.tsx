import { Dispatch, createContext } from "react";
import { TAction } from "./actions";
import initialState, { IBookmarkState } from "./initialState";

interface IBookmarkContextProps {
  state: IBookmarkState;
  dispatch: Dispatch<TAction>;
}

const BookmarkContext = createContext<IBookmarkContextProps>({
  state: initialState,
  dispatch: () => {},
});

export default BookmarkContext;
