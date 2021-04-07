import { FETCH_DATA_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../action/actionTypes";

const initState = {
    loading: false,
    cases: [],
    error: ''
};


const dataReducer = (state= initState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return{
                loading: false,
                cases: action.payload,
                error: '',
            }
        case FETCH_DATA_ERROR:
            return{
                loading:false,
                cases: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default dataReducer