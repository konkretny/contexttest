import React, { useContext } from "react";
import { storeContext } from "./store";

function TestContext2() {
  //useContext
  const [storeState, setStoreState] = useContext(storeContext);

  //a function that updates state and the entire context
  const handleCounter = () => {
    setStoreState({ counter: --storeState.counter });
  };

  return (
    <>
      <div className="App">
        The store content from TestContent2, which is contained in TestContent1:&nbsp;
         {storeState.counter}
      </div>
      <button onClick={handleCounter}>Subtract -1</button>
    </>
  );
}

export default TestContext2;
