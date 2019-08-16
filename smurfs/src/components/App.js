import React, { useEffect, useReducer } from "react";
import axios from "axios"

// components
import SmurfForm from "./SmurfForm"
import SmurfList from "./SmurfList"

// reducer
import { initialState, reducer } from "../reducers"
import { FETCH_SMURFS_DATA_FAILURE, FETCH_SMURFS_DATA_SUCCESS, FETCH_SMURFS_DATA_START } from "../reducers"
import "./App.css";

// Steps for useReducer for state management

// 1. in App.js, import useReducer from react && {initialState, reducer} from reducers
// 2. create initial state and reducer in reducer > reducer.js
// 3. 

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const { smurfsArray, isLoading, error, test } = state
  console.log(smurfsArray)

  // const getSmurfs = () => {
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("API RESPONSE", res.data)
        dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log("API ERROR: ", err)
        dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err.response })
      }
      )
  }, [])
  // }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfForm />
      <SmurfList smurfsArray={smurfsArray} />
    </div>
  );

}

export default App;

