import React, { Component } from 'react';
import './Options.css';

export default class Options extends Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={this.props.item.name === this.props.selected[feature].name}
                    onChange={e => this.props.handleUpdate(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                </label>
            </div>
        );
    }
}