// import { useState } from "react";
import TopBar from "./components/topBar";
import Stories from "./components/Stories/Stories";
import Post from "./components/post";

import "./App.css";
import { useState } from "react";
// mock
import { usersStory } from "./components/mock/Story";
import { postsData } from "./components/mock/Post";

function App() {
  const [stories, setStories] = useState(usersStory);
  return (
    <>
      <TopBar />
      <Stories data={stories} />
      <Post post={postsData} />
    </>
  );
}

export default App;
