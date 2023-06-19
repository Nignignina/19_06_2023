// import { useState } from "react";
import TopBar from "./components/topBar";
import Stories from "./components/Stories/Stories";

import "./App.css";
import { useState } from "react";
// mock

import { usersStory } from "./components/mock/Story";
function App() {
  const [stories, setStories] = useState(usersStory);
  return (
    <>
      <TopBar />
      <Stories data={stories} />
    </>
  );
}

export default App;
