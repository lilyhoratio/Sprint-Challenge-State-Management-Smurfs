import React, { useEffect, useReducer } from "react";
import axios from "axios"

// components
import SmurfForm from "./SmurfForm"
import SmurfList from "./SmurfList"

// reducer
import { initialState, reducer } from "../reducers"
import {
  FETCH_SMURFS_DATA_FAILURE,
  FETCH_SMURFS_DATA_SUCCESS,
  FETCH_SMURFS_DATA_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from "../reducers"
import "./App.css";

// Steps for useReducer for state management

// 1. in App.js, import useReducer from react && {initialState, reducer} from reducers
// 2. create initial state and reducer in reducer > reducer.js
// 3. 

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)
  const { smurfsArray, isLoading, error, test } = state
  // console.log(smurfsArray)

  // GET REQUEST
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("API - GET:", res.data)
        dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log("API - GET ERROR: ", err)
        dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err })
      }
      )
  }, [smurfsArray.length])

  // POST REQUEST
  const addSmurf = (newSmurf) => {
    console.log("App addSmurf submit!!! ")

    axios.post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        console.log("API - POST:", res.data)
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log("API - POST ERROR:", err)
        dispatch({ type: POST_SMURF_FAILURE, payload: err })
      })
  }


  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfForm addSmurf={addSmurf} />
      <SmurfList smurfsArray={smurfsArray} isLoading={isLoading} />
    </div>
  );

}

export default App;

