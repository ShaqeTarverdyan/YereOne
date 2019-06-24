import axios from 'axios';
import { setup } from 'axios-cache-adapter'


export const loadingBannerData = () => {
    return {
        type: 'LOADING_BANNER_DATA'
    }
}
export const loadingServicedata = () => {
    return {
        type: 'LOADING_SERVICE_DATA'
    }
}
export const loadingPortfolioData = () => {
    return {
        type: 'LOADING_PORTFOLIO_DATA'
    }
}

export const error = () => {
    return {
        type: 'ERROR'
    }
}

// const api = setup({
//     baseURL: 'https://api.myjson.com',
//     cache: {
//         maxAge: 15 * 60 * 1000,
//         exclude: { query: false } 
//     }
// })


// api.get('/bins/tuhst').then((response) => {
//     getBannerDataSucces(response.data)
// })

export const getBannerDataSucces = (resp) => {
    return {
        type: 'GET_BANNER_DATA',
        payload: resp
    }

}
export const getBannerData = () => {
    return (dispatch) => {
        // dispatch(loadingBannerData());
        return axios.get('https://api.myjson.com/bins/tuhst')
            .then(resp => {
                dispatch(getBannerDataSucces(resp.data))
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const getServiceDataSucces = (resp) => {
    return {
        type: 'GET_SERVICE_DATA',
        payload: resp
    }
}
export const getServiceData = () => {
    return (dispatch) => {
        // dispatch(loadingServicedata());
        return axios.get('https://api.myjson.com/bins/7p0p1')
            .then(resp => {
                dispatch(getServiceDataSucces(resp.data))
            })
            .catch(error => {
                throw (error);
            })
    }
}


export const getWorkDataSucces = (resp) => {
    return {
        type: 'GET_WORKS_DATA',
        payload: resp
    }
}

export const getWorkData = () => {
    return (dispatch) => {
        // dispatch(loadingPortfolioData());
        axios.get('https://api.myjson.com/bins/hbrsp')
            .then(resp => {
                dispatch(getWorkDataSucces(resp.data.works))
            })
            .catch(error => {
                throw (error);
            })
    }
}