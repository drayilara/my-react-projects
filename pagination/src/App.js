import React from "react";
import Pages from "./Pages";
import Profiles from "./Profiles";
import Heading from "./Heading"
import { PaginationProvider } from "./Context";

function App() {
      
      return(
      <>
      <PaginationProvider>
        <Heading />
        <Profiles />
        <Pages />
      </PaginationProvider>
      </>
      )
}

export default App;
