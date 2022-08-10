import React, { useState} from "react";
import Header from "./components/Header";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";

function App() {
  let [ content, setContent ] = useState({
    marked : "",
    preview : ""
  })

  return (
        <main>
            <Header />
            <div className="wrapper">
            <Markdown content={content} setContent={setContent}/>
            <Preview content={content} setContent={setContent}/>
            </div>
        </main>
  );
}

export default App;
