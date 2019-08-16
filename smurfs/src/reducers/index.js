export const FETCH_SMURFS_DATA_START = "FETCH_SMURFS_DATA_START"
export const FETCH_SMURFS_DATA_SUCCESS = "FETCH_SMURFS_DATA_SUCCESS"
export const FETCH_SMURFS_DATA_FAILURE = "FETCH_SMURFS_DATA_FAILURE"

export const initialState = {
    smurfsData =[],
    isLoading: false,
    error: '',
    test: "working!"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_SMURFS_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURFS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfsData: action.payload
            }
        case FETCH_SMURFS_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "error"
            }
        default:
            return state;
    }
}