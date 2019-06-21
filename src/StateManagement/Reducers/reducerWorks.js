const initialState = {
    loading: false,
    error: false,
    worksData: []
}

const reducerWorks = (state = initialState, action) => {
  
    const newState = { ...state }
    switch (action.type) {
        case 'LOADING':
            return { loading: true }
        case 'ERROR':
            return { error: true }
        case 'GET_WORKS_DATA':
            const resuletAfterFetchWorks = {
                ...newState,
                worksData: action.payload,
                loading: false,
                error:false,
            }
            return  resuletAfterFetchWorks
        default:
            return newState
    }
}
export default reducerWorks;