import React from "react";
import Header from "./components/Header";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";

function App() {
  return (
        <main>
            <Header />
            <div className="wrapper">
            <Markdown />
            <Preview />
            </div>
        </main>
  );
}

export default App;
