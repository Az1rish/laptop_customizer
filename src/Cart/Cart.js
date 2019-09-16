import React, { Component } from 'react';
import './Cart.css';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';

export default class Cart extends Component {
    

    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    USCurrencyFormat={this.props.USCurrencyFormat} 
                    selected={this.props.selected}
                    handleUpdate={this.props.handleUpdate}/>
                <Total 
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}/>
            </section>
        );
    }
}