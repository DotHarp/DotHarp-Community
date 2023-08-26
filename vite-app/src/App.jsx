
// export default App
import React from "react";
import Page from "./components/page.jsx";
import ContextStore from './context.jsx'

const App = () => {
  return (
    <ContextStore >
      <Page/>
      {/* <h2 className="text-green-600 ">okok</h2> */}
    </ContextStore>
  )
}

export default App
