import axios from 'axios';


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const LOAD_SMURFS = 'LOAD_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';

// set as variable so it's accessible below
const apiLink = 'http://localhost:3333/smurfs'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


// C - addSmurf
export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: LOAD_SMURFS }
  );

  // MVP post  
  axios.post(apiLink, newSmurf)
      .then(res => {
        dispatch({ type: GET_SMURFS, smurfs: res.data });
      })
  }
}

// R - getSmurfs
export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_SMURFS }
  );

    // MVP get
    axios.get(apiLink)
      .then(res => {
        dispatch({ type: GET_SMURFS, smurfs: res.data });
      })
  }
}

// U - updateSmurf STRETCH


// D - deleteSmurf STRETCH