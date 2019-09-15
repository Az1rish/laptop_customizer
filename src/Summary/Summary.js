import React, { Component } from 'react';
import './Summary.css';
import Total from '../Total/Total';

export default class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">
                       {feature} 
                    </div>
                    <div className="summary__option__value">
                        {selectedOption.name}
                    </div>
                    <Total 
                        USCurrencyFormat={this.props.USCurrencyFormat}
                        selectedOption={selectedOption}/>
                </div>
            );
        });

        return (
            <>
                {summary}
            </>
        );
    }
}