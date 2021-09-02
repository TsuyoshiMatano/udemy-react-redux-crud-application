import { react } from "@babel/types";
import React from "react";

function App() {
 return(
  <React.Fragment>
  <input type="text" onChange={() => {console.log("I am clicked!!")}} />;
  </React.Fragment>
 )
}

export default App;