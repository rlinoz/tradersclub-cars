import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TCButtonFilled, TCButtonInverse } from './TCButtons';
import { saveCar, editCar, removeCar, loadBrands } from '../api';

const mapStateToProps = (state, ownProps) => ({
    car: state.cars.editCar,
    isLoading: state.cars.formRequestInProgress,
    isSuccess: state.cars.formRequestSuccess,
    formErrors: state.cars.formErrors,
    brands: state.cars.brands
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDismiss: () => dispatch({type: 'CLOSE_FORM'}),
    onRemove: (id) => dispatch(removeCar(id)),
    onSave: (car) => dispatch(saveCar(car)),
    onEdit: (car) => dispatch(editCar(car)),
    onLoad: () => dispatch(loadBrands())
})

class CarForm extends Component {

    constructor(props){
        super(props);

        const initialState = {
            formControl: {
                title: {
                    value: ''
                },
                model: {
                    value: ''
                },
                year: {
                    value: ''
                },
                brand: {
                    value: ''
                },
                color: {
                    value: ''
                },
                km: {
                    value: ''
                },
                price: {
                    value: ''
                },
            }
        }

        this.props.onLoad();
        
        if(props.car)
            this.state = this.getStateFromProps(initialState, props.car);
        else 
            this.state = initialState;

    }

    getStateFromProps = (initialState, car) => {
        Object.keys(initialState.formControl).map( (key, index) => {
            return initialState.formControl[key].value = car[key];
        });

        return initialState;
    }
    
    
    handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControl: {
                ...this.state.formControl,
                [name]: {
                    ...this.state.formControl[name],
                    value
                }
            }
        })
    }

    isFormValid = () => {
        //TODO deveria ter validação do que é obrigatório e do que não pelo form control
        return true;
    }

    isEditing = () => {
        return this.props.car && this.props.car.id
    }

    getCarFromForm = () => {
        return Object.keys(this.state.formControl).reduce( (car, key) => {
            car[key] = this.state.formControl[key].value;
            return car;
        }, {});
    }

    onSaveClicked = () => {
        if(this.isFormValid()) {
            const formCar = this.getCarFromForm();
            if(this.isEditing()) {
                formCar.id = this.props.car.id;
                this.props.onEdit(formCar);
            } else {
                this.props.onSave(formCar);
            }
        }
    }

    onRemoveCliked = () => {
        if(this.isEditing())
            this.props.onRemove(this.props.car.id);
    }

    removeButton = () => {
        if(this.isEditing()) {
            return <TCButtonInverse disabled={this.props.isLoading} onClick={this.onRemoveCliked} text="Remover" />
        }
    }

    buttonBar = () => (
        <div className="form-button-bar">
            <div className="form-button-bar-dismiss">
                { this.removeButton() }
                <TCButtonInverse disabled={this.props.isLoading} onClick={this.props.onDismiss} text="Cancelar" />
            </div>
            <div>
                <TCButtonFilled disabled={this.props.isLoading} onClick={this.onSaveClicked} text="Salvar" />
            </div>
        </div>
    )

    feedback = () => {
        if(this.props.isSuccess) {
            setTimeout( () => this.props.onDismiss(), 500); 
            return (
                <div>
                    Sucesso!
                </div>
            );
        } else if(this.props.formErrors) {
            return (
                <div>
                    Problemas ao salvar o formulário!
                </div>
            );
        }
    }

    brandSelector = () => {
        if(this.props.brands) {
            return (
                <select name="brand" placeholder="Marca" value={this.state.formControl.brand.value} onChange={this.handleFormChange}>
                    <option value="" disabled>Marca</option>
                    {this.props.brands.map((brand) => (
                        <option key={brand.id} value={brand.name}>{brand.name}</option>
                    ))}
                </select>
            );
        }
    }

    render() {
        return (
            <div className="form">
                { this.feedback() }
                <div className="form-fields">
                    <div>
                        <input name="title" placeholder="Título" value={this.state.formControl.title.value} onChange={this.handleFormChange} />
                    </div>
                    <div className="row">
                        <input name="model" placeholder="Modelo" value={this.state.formControl.model.value} onChange={this.handleFormChange} />
                        <input name="year" placeholder="Ano" value={this.state.formControl.year.value} onChange={this.handleFormChange} />
                    </div>
                    <div>
                        { this.brandSelector() }
                    </div>
                    <div className="row">
                        <input name="color" placeholder="Cor" value={this.state.formControl.color.value} onChange={this.handleFormChange} />
                        <input name="km" placeholder="KM" value={this.state.formControl.km.value} onChange={this.handleFormChange} />
                    </div>
                    <div>
                        <input name="price" placeholder="Preço" value={this.state.formControl.price.value} onChange={this.handleFormChange} />                
                    </div>
                </div>

                { this.buttonBar() }
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarForm)


