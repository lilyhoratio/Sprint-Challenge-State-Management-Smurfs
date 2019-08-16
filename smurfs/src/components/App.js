import React from "react";
import SmurfForm from "./SmurfForm"
import SmurfList from "./SmurfList"
import "./App.css";

// Steps for useReducer for state management

// 1. in App.js, import useReducer from react && {initialState, reducer} from reducers
// 2. create initial state and reducer in reducer > reducer.js
// 3. 

const App = () => {


  // function getSmurfs() {
  //   axios.get("url")
  //     .then(dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data })
  //       .catch(err => {
  //         dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err.response })
  //       }
  //       )
  //     )
  // }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfForm />
      <SmurfList />
    </div>
  );

}

export default App;

