const api = (url = "http://private-anon-a706d34f44-tradersclubapi.apiary-mock.com/api/") => {

    return {
        post: (path, body) => {
            return fetch(url + path, {method: 'POST', body: JSON.stringify(body)})
                .then(response => response.json())
        },
        get: (path) => {
            return fetch(url + path)
                .then(response => response.json())
        },
        delete: (path) => {
            return fetch(url + path)
                .then(response => response.json())
        }
    }

}

export const searchRequest = (term) => {
    return dispatch => {
        dispatch({type: 'SEARCH_STARTED'});
        api().get("cars?search=" + term)
            .then((response) => {
                dispatch({type: 'SEARCH_DONE', data: response});
            })
            .catch((error) => {
                dispatch({type: 'SEARCH_ERROR', error})
            })
    }

}

export const saveCar = (car) => {
    return dispatch => {
        dispatch({type: 'SAVE_CAR_STARTED'});
        api().post("cars", { car })
            .then((response) => {
                dispatch({type: 'SAVE_CAR_DONE'})
            })
            .catch((error) => {
                dispatch({type:'SAVE_CAR_ERROR', error})
            })
    }
}

export const editCar = (car) => {
    return dispatch => {
        dispatch({type: 'EDIT_CAR_STARTED'});
        api().post("cars/" + car.id, { car })
            .then((response) => {
                dispatch({type: 'EDIT_CAR_DONE'})
            })
            .catch((error) => {
                dispatch({type:'EDIT_CAR_ERROR', error})
            })
    }
}

export const removeCar = (id) => {
    return dispatch => {
        dispatch({type: 'REMOVE_CAR_STARTED'});
        api().get("cars/" + id)
            .then((response) => {
                dispatch({type: 'REMOVE_CAR_DONE'});
            })
            .catch((error) => {
                dispatch({type: 'REMOVE_CAR_ERROR', error})
            })
    }
}

export const loadBrands = () => {
    return dispatch => {
        dispatch({type: 'LOAD_BRAND_STARTED'});
        api().get("brands")
            .then((response) => {
                dispatch({type: 'LOAD_BRANDS_DONE', brands: response.brands});
            })
            .catch((error) => {
                dispatch({type: 'LOAD_BRANDS_ERROR', error})
            })
    }
}