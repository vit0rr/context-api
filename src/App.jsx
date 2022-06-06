import { useState } from "react";

import Context from "./Context";
import Counter from "./Counter";

function App() {
  const [total, setTotal] = useState(0);


  return (
    <Context.Provider value={[total, setTotal]}>
      <div>
        <p>App.js: {total}</p>
        <p>Context API</p>
        <Counter />
      </div>
    </Context.Provider>
  )
}

export default App;
