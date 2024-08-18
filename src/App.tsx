import Home from "@/modules/Home/Home";
import BookmarkProvider from "./core/store/provider";

function App() {
  return (
    <BookmarkProvider>
      <Home />
    </BookmarkProvider>
  );
}

export default App;
