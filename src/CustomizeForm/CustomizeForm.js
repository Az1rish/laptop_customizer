import React, { Component } from 'react';
import './CustomizeForm.css';

export default class CustomizeForm extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.props.features}
            </form>
        );   
    }
}