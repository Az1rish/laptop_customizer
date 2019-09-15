import React, { Component } from 'react';
import './Features.css';

import Options from '../Options/Options';

export default class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                return (
                    <>
                        <Options 
                            item={item}
                            feature={feature}
                            selected={this.props.selected}
                            USCurrencyFormat={this.props.USCurrencyFormat}
                            handleUpdate={this.props.handleUpdate}/>
                    </>
                );
                
            });
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
        });
        return (
            <>
                {features}
            </>
        );
    }
}