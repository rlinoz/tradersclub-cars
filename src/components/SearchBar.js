import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchRequest } from '../api';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSearchChange: text => {
        if(text.length > 0)
            dispatch(searchRequest(text));
        else
            dispatch({type: 'SEARCH_CLEARED'})
    }
})

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.state = {
            text: '',
            typing: false,
            typingTimeout: 0
        }
    }

    onSearchChange = (event) => {
        const self = this;

        if (self.state.typingTimeout) {
            clearTimeout(self.state.typingTimeout);
        }

        self.setState({
            name: event.target.value,
            typing: false,
            typingTimeout: setTimeout(function () {
                self.props.onSearchChange(self.state.name);
            }, 300)
        });
    }

    render() {
        return (
            <input type="text" name="name" placeholder="Pesquise um veículo" onChange={this.onSearchChange} />
        );
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)