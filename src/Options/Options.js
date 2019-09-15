import React, { Component } from 'react';
import './Options.css';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class Options extends Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.item.name === this.props.selected[this.props.feature].name}
                    onChange={e => this.props.handleUpdate(this.props.feature, this.props.item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
                </label>
            </div>
        );
    }
}