import axios from 'axios';
import { setup } from 'axios-cache-adapter'


export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const error = () => {
    return {
        type: 'ERROR'
    }
}


const api = setup({
    baseURL: 'https://api.myjson.com',
    cache: {
        maxAge: 15 * 60 * 1000,
    }
})

api.get('/bins/tuhst').then((response) => {
    // console.log('responseeeee', response.data)
    getBannerDataSucces(response.data)
})

// api.get('/bins/tuhst', {
//     cache:{
//         maxAge:2 * 60  * 1000, 
//         exclude: { query: false } 
//     }
// })
// .then((response) => {
//     console.log('resp', response.data)
// })



export const getBannerDataSucces = (resp) => {
    return {
        type: 'GET_BANNER_DATA',
        payload: resp
    }

}
export const getBannerData = () => {
    return (dispatch) => {
        // dispatch(loading());
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
        // dispatch(loading());
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
        dispatch(loading());
        axios.get('https://api.myjson.com/bins/hbrsp')
            .then(resp => {
                dispatch(getWorkDataSucces(resp.data.works))
            })
            .catch(error => {
                throw (error);
            })
    }
}