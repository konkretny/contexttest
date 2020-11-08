import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TestContext1 from './TestContext1';

//import store
import {storeContext, store} from './store'

function App() {

  //I create a state that I will update etc.
  const [storeState,setStoreState] = useState(store);

  //destructurizes state into one value to be able to pass it in the provider, i.e. the content of the store and functions that allow other components to change state
  const value = [storeState,setStoreState]
  
  return (
    <storeContext.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <TestContext1 />
        </header>
      </div>
    </storeContext.Provider>
  );
}

export default App;
