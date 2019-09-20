const cars = (state = {cars: []}, action) => {
    switch(action.type) {
        case 'SEARCH_CLEARED':
            return {

            }
        case 'SEARCH_STARTED':
            return {
                cars: state.cars,
                inProgress: true
            }
        case 'SEARCH_DONE':
            return {
                ...state,
                cars: [ ...action.data.cars ],
                inProgress: false
            }
        case 'SEARCH_ERROR':
            return {
                error: action.error,
                inProgress: false
            }
        case 'OPEN_REGISTER_CAR':
            return {
                cars: state.cars,
                isCarFormOpen: true
            }
        case 'OPEN_EDIT_CAR':
            return {
                cars: state.cars,
                isCarFormOpen: true,
                editCar: action.car
            }
        case 'CLOSE_FORM':
            return {
                cars: state.cars,
                isCarFormOpen: false
            }
        case 'SAVE_CAR_STARTED':
        case 'EDIT_CAR_STARTED':
        case 'REMOVE_CAR_STARTED':
            return {
                ...state,
                formRequestInProgress: true
            }
        case 'SAVE_CAR_DONE':
        case 'EDIT_CAR_DONE':
        case 'REMOVE_CAR_DONE':
            return {
                ...state,
                formRequestSuccess: true,
                formRequestInProgress: false
            }
        case 'SAVE_CAR_ERROR':
        case 'EDIT_CAR_ERROR':
        case 'REMOVE_CAR_ERROR':
            return {
                ...state,
                formRequestSuccess: false,
                formRequestInProgress: false,
                formErrors: action.error
            }
        case 'LOAD_BRANDS_DONE':
            return {
                ...state,
                brands: action.brands
            }
        default:
            return state;
    }
}

export default cars