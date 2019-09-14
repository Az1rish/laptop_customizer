import React, { Component } from 'react';
import './CustomizeForm.css';
import Features from '../Features/Features';


export default class CustomizeForm extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features 
                    features={this.props.features}
                    selected={this.props.selected}
                    handleUpdate={this.props.handleUpdate}
                    USCurrencyFormat={this.props.USCurrencyFormat}/>
            </form>
        );   
    }
}