import React from 'react'
import { connect } from 'react-redux'
import CarItem from './CarItem'

const mapStateToPros = (state, ownProps) => ({
        cars: state.cars.cars
    }
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCarClicked: car => {
        dispatch({ type: 'OPEN_EDIT_CAR', car })
    }
})

const CarsList = ({ cars, onCarClicked }) => (
    <ul className="car-list">
        {cars.map((car) => (
                <CarItem key={car.id} car={car} onClick={() => onCarClicked(car)} />
        ))}
    </ul>
)

export default connect(mapStateToPros, mapDispatchToProps)(CarsList)