const initialState = {
    loading: false,
    error: false,
    servicesData: [],
    bannerData:{}
}

const reducerHomePage = (state = initialState, action) => {
  
    const newState = { ...state }
    switch (action.type) {
        case 'LOADING':
            return { loading: true }
        case 'ERROR':
            return { error: true }
        case 'GET_DATA_FOR_HOME_PAGE':
            const resuletAfterFetch = {
                ...newState,
                loading: false,
                error:false,
                servicesData: action.payload,
            }
            return  resuletAfterFetch
        default:
            return newState
    }
}
export default reducerHomePage;