import {
   
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
  } from './constants';
  

  
  export const requestRobots =()=> (dispatch) =>{
    dispatch({type:REQUEST_ROBOTS_PENDING});
  
    fetch('https://api.spacexdata.com/v3/launches?limit=100')
        .then((response) => response.json())
        .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
        .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
  }

    
  export const requestSuccessfullLaunch =()=> (dispatch) =>{
    dispatch({type:REQUEST_ROBOTS_PENDING});
  
    fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true')
        .then((response) => response.json())
        .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
        .catch(error=>dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
  }