import React from 'react'

const CarItem = ({ car, onClick }) => (
    <li className="car-row" onClick={ onClick }>
        <div className="row">
            <div>{car.title}</div>
            <div>{car.price}</div>
        </div>
        <div className="row">
            <div>{car.model} &#183; {car.brand} &#183; {car.km}</div>
            <div>{car.year}</div>
        </div>
    </li>
)

export default CarItem