import React from 'react';
import { connect } from 'react-redux';
import CarsList from './CarsList';
import Banner from './Banner';
import CarForm from './CarForm';

const mapStateToProps = (state, ownProps) => ({
    cars: state.cars.cars,
    isCarFormOpen: state.cars.isCarFormOpen
})

const CarsHome = ({ cars = [], isCarFormOpen}) => {

    const handleList = () => {
        if(isCarFormOpen) {
            return <CarForm />
        } else if(cars.length > 0) {
            return <CarsList cars={cars}/>
        } else {
            return <Banner text="Pesquisa de Veículos do Traders Club"/>
        }
    }

    return(
        <div className="home">
            {handleList()}
        </div>
    )
}

export default connect(mapStateToProps, null)(CarsHome)