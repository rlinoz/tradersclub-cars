import React from 'react';
import { connect } from 'react-redux';
import { TCButtonFilled } from './TCButtons';
import SearchBar from './SearchBar';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRegisterClicked: () => {
        dispatch({type: 'OPEN_REGISTER_CAR'})
    }
})

const TopBar = ({ onRegisterClicked }) => {
    return (
        <div className="topbar">
            <SearchBar />
            <TCButtonFilled text="Cadastrar" onClick={onRegisterClicked}/>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(TopBar)