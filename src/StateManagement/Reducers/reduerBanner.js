const initialState = {
    loading: false,
    error: false,
    bannerData: {},
}
const reducerBanner = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'LOADING_BANNER_DATA':
            return { loading: true }
        case 'ERROR':
            return { error: true }
        case 'GET_BANNER_DATA':
            const resuletAfterFetch = {
                ...newState,
                bannerData: action.payload,
                loading: false,
                error: false
            }
            return resuletAfterFetch;
        default:
            return newState
    }
}
    export default reducerBanner;