import React, { useContext } from "react";

//importuje Context
import { storeContext } from "./store";
import TestContext2 from "./TestContext2";

function TestContext1() {

  //useContext
  const [storeState, setStoreState] = useContext(storeContext);

  //a function that updates state and the entire context
  const handleCounter = () => {
    setStoreState({ counter: ++storeState.counter });
  };

  return (
    <>
      <div className="App">
        The contents of the store from TestContext1: {storeState.counter}
      </div>
      <button onClick={handleCounter}>Add +1</button>
      <hr />

      {/*a tutaj wrzucam sobie jeszcze drugi kompontent by zobaczyć czy mi to smiga gdzie indziej bez props drillingu (zrzucania propsów w dół)  */}
      <TestContext2 />
    </>
  );
}

export default TestContext1;
