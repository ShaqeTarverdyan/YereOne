const initialState = {
    loading: false,
    error: false,
    servicesData: []
}

const reducerService = (state = initialState, action) => {
  
    const newState = { ...state }
    switch (action.type) {
        case 'LOADING_SERVICE_DATA':
            return { loading: true }
        case 'ERROR':
            return { error: true }
        case 'GET_SERVICE_DATA':
            const resuletAfterFetchServices = {
                ...newState,
                servicesData: action.payload,
                loading: false,
                error:false,
            
            }
            return  resuletAfterFetchServices
        default:
            return newState
    }
}

export default reducerService;