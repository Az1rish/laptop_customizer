import React, { Component } from 'react';
import './Total.css';

export default class Total extends Component {
    render() {
        return (
            <div className="summary__option__cost">
                {this.props.USCurrencyFormat.format(this.props.selectedOption.cost)}
            </div>
        );
    }
}