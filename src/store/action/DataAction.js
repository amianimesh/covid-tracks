import axios from "axios"
import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes"

export const fetchDataRequest = () => {
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = cases => {
    return{
        type: FETCH_DATA_SUCCESS,
        payload: cases
    }
}


export const fetchDataError = error => {
    return{
        type: FETCH_DATA_ERROR,
        payload: error
    }
}


export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest)
        axios.get('http://localhost:8080/cases')
            .then(response =>{
                let cases = response.data
                cases.forEach(element => {
                    //console.log(element.dateAnnounced, 'before experiment')
                    element.dateAnnounced = new Date(element.dateAnnounced)
                    //console.log(element.dateAnnounced, 'after experiment')
                });
                dispatch(fetchDataSuccess(cases))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchDataError(errorMsg))
            })
    }
}
